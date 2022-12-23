import type { GetStaticProps, NextPage } from "next";
import type { Project } from "@/misc/types";

import Head from "next/head";
import { useState } from "react";
import projects from "@/misc/projects.json";
import { ProjectList, SelectedProject } from "@/components/projects";

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
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  const sortedProjects = projects.sort((a, b) => a.order - b.order);
  return (
    <main>
      <ProjectList
        projects={sortedProjects}
        setSelectedProject={setSelectedProject}
      />
      <SelectedProject selectedProject={selectedProject} />
    </main>
  );
};

export default Projects;
