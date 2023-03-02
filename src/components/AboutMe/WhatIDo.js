import { NavLink } from "react-router-dom";
import { SiPhp } from "react-icons/si";
import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
  FaMobileAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiPhotoshop, DiCss3, DiHtml5 } from "react-icons/di";
import { MdWeb, MdDesignServices } from "react-icons/md";
import { CgArrowRightO } from "react-icons/cg";

const WhatIDo = () => {
  return (
    <div className="space-y-9">
      <div className="space-y-3">
        <h2 className="font-bold text-3xl text-white">What I Do.</h2>
        <p>
          I have over three years of experience building software for clients
          and for me. Here are some of the main skills and technologies I use in
          my work. For more, you can also check my online resume.
        </p>
      </div>
      {/* <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4 w-full"> */}
      <div className="grid lg:grid-cols-3">
        <div className="p-5 space-y-5">
          <div className="flex items-center justify-center w-32 h-32 bg-slate-800 bg-opacity-30 rounded-full shadow-lg">
            <MdWeb size={50} />
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-2xl">Web Development</h4>
            <p>
              My web development services include creating responsive and
              dynamic websites that are optimized for speed and performance,
              with clean and modular code that is easy to maintain and scale.
            </p>
          </div>
          <div className="flex items-center flex-wrap space-x-1">
            <DiHtml5 size={30} />
            <DiCss3 size={30} />
            <IoLogoJavascript size={30} />
            <FaReact size={30} />
            <FaNodeJs size={30} />
            <FaPython size={30} />
            <FaJava size={30} />
            <SiPhp size={30} />
          </div>
        </div>

        <div className="p-5 space-y-5">
          <div className="flex items-center justify-center w-32 h-32 bg-slate-800 bg-opacity-30 rounded-full shadow-lg">
            <FaMobileAlt size={50} />
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-2xl">Mobile Development</h4>
            <p>
              I aim at creating mobile applications that are fast, intuitive,
              and user-friendly, while also being visually appealing and
              engaging.
            </p>
          </div>
          <div className="flex items-center flex-wrap space-x-1">
            <div className="flex items-center flex-wrap space-x-1">
              <FaReact size={30} />
            </div>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <div className="flex items-center justify-center w-32 h-32 bg-slate-800 bg-opacity-30 rounded-full shadow-lg">
            <MdDesignServices size={50} />
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-2xl">UI/UX</h4>
            <p>
              Designing user-centered digital experiences that enhance usability
              and engagement.
            </p>
          </div>
          <div className="flex items-center flex-wrap space-x-1">
            <FaFigma size={30} />
            <DiPhotoshop size={30} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <NavLink
          exact={"true"}
          to="/resume"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <button className="bg-fe bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
            <CgArrowRightO size={22} />
            <span>View Projects</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default WhatIDo;
