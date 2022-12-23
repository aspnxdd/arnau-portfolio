import type { FC } from "react";
import type { Project } from "@/misc/types";

type ProjectListProps = {
  projects: Project[];
  setSelectedProject: (project: Project) => void;
};

const ProjectList: FC<ProjectListProps> = ({
  projects,
  setSelectedProject,
}) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Personal projects</h1>
      <div className="flex flex-wrap gap-4">
        {projects.map((project) => (
          <button
            key={project.name}
            className="hover:bg-sky-600 ease-in-out duration-200 bg-sky-700 w-[18rem] h-[3rem]  rounded-2xl p-4 items-center justify-center flex flex-col"
            onClick={() => setSelectedProject(project)}
          >
            <h2 className="text-lg font-bold">{project.name}</h2>
          </button>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
