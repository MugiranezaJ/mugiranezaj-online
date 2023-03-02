import { projectsData } from "../Data/DataStore";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <div className="flex-1 lg:max-w-[1320px] md:max-w-[720px] mx-auto">
      <div className="container mx-auto mt-12 ">
        <div className="mb-10">
          <h2 className="font-bold text-3xl text-white">More Projects.</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          {projectsData?.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-20">
            <p>More projects to be added soon... in the meantime , you can check my github</p>
        </div>
      </div>
    </div>
  );
}
