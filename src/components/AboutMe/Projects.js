import React from "react";
import { NavLink } from "react-router-dom";
import { projectsData } from "../../Data/DataStore";
import ProjectCard from "../ProjectCard";
import { CgArrowRightO } from "react-icons/cg";

const Projects = () => {
  return (
    <div className="space-y-9">
      <div className="space-y-3">
        <h2 className="font-bold text-3xl text-white">Featured Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 gap-y-10 mb-6 lg:grid-cols-3 w-full">
        {projectsData?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="flex justify-center">
        <NavLink
          exact={"true"}
          to="/resume"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <button className="bg-fe bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
            <CgArrowRightO size={22} />
            <span>View More</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;
