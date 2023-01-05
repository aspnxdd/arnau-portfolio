import type { GithubRepo, Project } from "@/misc/types";

import { parseRepoAndOwner } from "@/misc/utils";
import { fetchGithubRepo } from "@/services/fetchGithubRepo";
import { useState, useEffect } from "react";

function githubRepoDataMapper(project: Project, repo?: GithubRepo) {
  if (repo) {
    project.stars = repo.stargazers_count;
    project.forks = repo.forks_count;
    project.language = repo.language;
  } else {
    project.stars = "N/A";
    project.forks = "N/A";
  }
  return project;
}

export function useFetchGithubRepo(projects: Project[]) {
  const [projectsWithMetadata, setProjectsWithMetadata] =
    useState<Project[]>(projects);

  useEffect(() => {
    (async () => {
      setProjectsWithMetadata(
        await Promise.all(
          await projects.reduce(async (acc, val) => {
            const sorted = await acc;
            let index = 0;
            while (index < sorted.length && val.order < sorted[index].order) {
              index++;
            }
            try {
              const res = await fetchGithubRepo(parseRepoAndOwner(val.github));
              const item = githubRepoDataMapper(val, res);
              sorted.splice(index, 0, item);
            } catch (err) {
              const item = githubRepoDataMapper(val);
              sorted.splice(index, 0, item);
            }

            return sorted;
          }, Promise.resolve([] as Project[]))
        )
      );
    })();
  }, [projects]);

  return projectsWithMetadata;
}
