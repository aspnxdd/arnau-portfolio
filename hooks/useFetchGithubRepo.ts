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
          projects
            .sort((a, b) => a.order - b.order)
            .map(async (project) => {
              try {
                const res = await fetchGithubRepo(
                  parseRepoAndOwner(project.github)
                );
                return githubRepoDataMapper(project, res);
              } catch (err) {
                return githubRepoDataMapper(project);
              }
            })
        )
      );
    })();
  }, [projects]);

  return projectsWithMetadata;
}
