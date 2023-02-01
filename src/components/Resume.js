import { useRef } from "react";
import { ResumeTemplate } from "./ResumeTemplate";
import { useReactToPrint } from "react-to-print";
import { NavLink } from "react-router-dom";


export default function Resume() {
    const resumeRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
    });
    return (
        <div className="flex-1 lg:max-w-[1320px] md:max-w-[720px] mx-auto">
             <div className="flex-1 w-full mb-12">
                <div className=" space-y-3 text-center">
                    <h2 className="font-bold text-4xl text-white">Online Resume</h2>
                    <div className="space-y-4 space-x-2">
                        <NavLink
                            exact={"true"}
                            to="/portfolio">
                            <button className="bg-fe bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>View Portfolio</span>
                            </button>
                        </NavLink>
                        <button 
                            onClick={handlePrint}
                            className="bg-fe bg-gray-700 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                <span>Download Resume</span>
                        </button>
                    </div>
                </div>
            </div>

            <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700"/>

            <div className="px-3 lg:px-5">
               <ResumeTemplate ref={ resumeRef }/> 
            </div>
        </div>
    );
}