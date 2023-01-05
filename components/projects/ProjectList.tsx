import type { FC } from "react";
import type { Project } from "@/misc/types";
import { BG_COLOR_MAPPER } from "@/styles/mappers";

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
            className="hover:bg-sky-600 ease-in-out duration-200 bg-sky-700 w-[18rem] h-[4rem]  rounded-2xl p-4 items-center justify-center flex flex-col"
            onClick={() => setSelectedProject(project)}
          >
            <h2 className="text-lg font-bold ">{project.name}</h2>
            <div className="flex gap-2">
              <p className="text-sm p-1 ">{project.stars}⭐</p>
              <p className="text-sm p-1 ">{project.forks}🔱</p>
              <p
                className={`text-sm rounded-xl p-1 px-2 ${
                  BG_COLOR_MAPPER[
                    (project.language?.toLowerCase() as keyof typeof BG_COLOR_MAPPER) ??
                      "default"
                  ]
                }`}
              >
                {project.language}
              </p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
