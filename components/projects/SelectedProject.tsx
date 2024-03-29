import type { FC } from "react";
import type { Project } from "@/misc/types";

import Image from "next/image";
import { BG_COLOR_MAPPER } from "@/styles/mappers";

type SelectedProjectProps = {
  selectedProject: Project;
};

const SelectedProject: FC<SelectedProjectProps> = ({ selectedProject }) => {
  return (
    <div className="flex flex-col gap-4 my-10">
      <h2 className="text-3xl font-bold">{selectedProject.name}</h2>
      <div className="flex gap-2">
        <p className="p-1 ">{selectedProject.stars}⭐</p>
        <p className="p-1 ">{selectedProject.forks}🔱</p>
        <p
          className={`rounded-xl p-1 px-2 ${
            BG_COLOR_MAPPER[
              (selectedProject.language?.toLowerCase() as keyof typeof BG_COLOR_MAPPER) ??
                "default"
            ]
          }`}
        >
          {selectedProject.language}
        </p>
      </div>
      {selectedProject.image && (
        <Image
          src={`/${selectedProject.image}`}
          alt={selectedProject.name}
          width={800}
          height={800}
          unoptimized={true}
        />
      )}
      <p className="text-lg max-w-[70ch] font-semibold">
        {selectedProject.description}
      </p>
      <div className="flex space-x-4">
        {selectedProject.github && (
          <a href={selectedProject.github} target="_blank" rel="noreferrer">
            <button className="bg-sky-700 hover:bg-sky-600 ease-in-out duration-200 text-white rounded-md p-2 px-5 font-bold">
              Github
            </button>
          </a>
        )}
        {selectedProject.uri && (
          <a href={selectedProject.uri} target="_blank" rel="noreferrer">
            <button className="bg-sky-700 hover:bg-sky-600 ease-in-out duration-200 text-white rounded-md p-2 px-5 font-bold">
              Website
            </button>
          </a>
        )}
      </div>
      <div>
        <h3 className="text-xl font-bold my-4">Technologies used</h3>
        <div className="flex flex-wrap gap-4">
          {selectedProject.tags.map((tag) => (
            <div
              key={tag}
              className="bg-sky-700 ease-in-out duration-200 text-white rounded-full p-2 px-5 font-bold"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedProject;
