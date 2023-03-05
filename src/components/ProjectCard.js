import React from 'react';
import { BsFolderFill, BsGithub } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";

const ProjectCard = ({project}) => {
    
    return (
        <a
          href={project?.previewLink}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <div className="flex flex-col min-h-[282px] p-5 bg-slate-800 rounded-2xl">
            <div className="flex py-2 justify-between">
              <BsFolderFill size={30} />
              <div className="flex space-x-3">
                {project?.githubLink && (<a
                  href={project.githubLink}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="hover:text-blue-400"
                >
                  <BsGithub size={25} />
                </a>)}
                <FaShareSquare size={25} />
              </div>
            </div>
            <div className="flex-1 mb-3 text-slate-300">
              <h4 className="font-bold text-xl line-clamp-2">
                {project?.title}
              </h4>
              <p className="line-clamp-3">
                {project?.description}
              </p>
              <p className=" py-1 text-gray-400">Client: {project?.client}</p>
            </div>
            <div className="flex flex-wrap items-center">
                {
                    project?.skills?.map((skill, index) => (
                        <span key={index} className="mr-3">{skill}</span>
                    ))
                }
            </div>
          </div>
        </a>
    );
}

export default ProjectCard;