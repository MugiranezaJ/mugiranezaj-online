import { NavLink } from "react-router-dom";
import MyImage from "../../assets/MyImage-wide.jpg";
// import { CgArrowRightO } from "react-icons/cg";
import { HiOutlineDocumentText } from "react-icons/hi";

const Introduction = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 w-full min-h-[320px]">
      <div className=" space-y-3">
        <h2 className="font-bold text-5xl text-white">Mugiraneza Jackson</h2>
        <p className="font-thin text-2xl">Software Engineer</p>
        <p className="">
          I'm a full stack software engineer and mobile developer specializing
          in backend development. I'm passinate about delivering innovative
          solutions for small to complex business challenges and am dedicated to
          collaborating effectivelly with cross-functional teams.
        </p>
        <div className="space-x-2">
          {/* <NavLink exact={"true"} to="/portfolio">
            <button className="bg-fe bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 mb-2 rounded inline-flex items-center space-x-1">
              <CgArrowRightO size={22} />
              <span>View Projects</span>
            </button>
          </NavLink> */}
          <NavLink exact={"true"} to="/resume">
            <button className="bg-fe bg-gray-700 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
              <HiOutlineDocumentText size={22} />
              <span>View Resume</span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={MyImage} alt="" className="p-1 w-full max-w-sm rounded-2xl" />
      </div>
    </div>
  );
};

export default Introduction;
