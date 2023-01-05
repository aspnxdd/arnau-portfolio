import type { GetStaticProps, NextPage } from "next";
import type { Project } from "@/misc/types";

import { useState } from "react";
import projects from "@/misc/projects.json";
import { ProjectList, SelectedProject } from "@/components/projects";
import { useFetchGithubRepo } from "@/hooks";

export const getStaticProps: GetStaticProps<{
  projects: Project[];
}> = async () => {
  return {
    props: {
      projects: projects as Project[],
    },
  };
};

const Projects: NextPage<{
  projects: Project[];
}> = ({ projects }) => {
  const projectsWithMetadata = useFetchGithubRepo(projects);

  const [selectedProject, setSelectedProject] = useState<Project>(
    projectsWithMetadata[0]
  );

  return (
    <main>
      <ProjectList
        projects={projectsWithMetadata}
        setSelectedProject={setSelectedProject}
      />
      <SelectedProject selectedProject={selectedProject} />
    </main>
  );
};

export default Projects;
