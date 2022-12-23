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
    <>
      <Head>
        <title>Arnau Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-10">
        <ProjectList
          projects={sortedProjects}
          setSelectedProject={setSelectedProject}
        />
        <SelectedProject selectedProject={selectedProject} />
      </main>
    </>
  );
};

export default Projects;
