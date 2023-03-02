import React from 'react';
import { HiOutlineDocumentText } from "react-icons/hi";
// import { NavLink } from "react-router-dom";

const ResumeIntro = ({ handlePrint }) => {
  return (
    <div className="flex-1 w-full mb-12">
      <div className=" space-y-3 text-center">
        <h2 className="font-bold text-4xl text-white">Online Resume</h2>
        <div className="space-y-4 space-x-2">
          {/* <NavLink exact={"true"} to="/portfolio">
            <button className="bg-fe bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>View Projects</span>
            </button>
          </NavLink> */}
          <button
            onClick={handlePrint}
            className="bg-fe bg-gray-700 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1"
          >
            <HiOutlineDocumentText size={22} />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeIntro;
