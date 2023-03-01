import { NavLink } from "react-router-dom";
import { BsFolderFill, BsGithub } from 'react-icons/bs'
import { FaShareSquare } from 'react-icons/fa'
import MyImage from "../assets/MyImage-wide.jpg"
import './css/style.css'
import WhatIDo from "./AboutMe/WhatIDo";

export default function AboutMe() {
    return (
        <div className="flex-1 lg:max-w-[1320px] sm:max-w-[540px] md:max-w-[720px] mx-auto">
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 w-full min-h-[320px]">
                <div className=" space-y-3">
                    <h2 className="font-bold text-5xl text-white">Mugiraneza Jackson</h2>
                    <p className="font-thin text-2xl">Software Engineer</p>
                    <p className="">
                        I'm a full stack software engineer and mobile developer specializing in backend development. 
                        I'm passinate about delivering innovative solutions for small to complex business challenges 
                        and am dedicated to collaborating effectivelly with cross-functional teams.
                    </p>
                    <div className="space-x-2">
                        <NavLink
                            exact={"true"}
                            to="/portfolio">
                            <button className="bg-fe bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 mb-2 rounded inline-flex items-center space-x-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>View Portfolio</span>
                            </button>
                        </NavLink>
                        <NavLink
                                exact={"true"}
                                to="/resume">
                            <button className="bg-fe bg-gray-700 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                <span>View Resume</span>
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={MyImage} alt="" className="p-1 w-full max-w-sm rounded-2xl"/>
                </div>
            </div>
            <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700"/>

            {/* What I Do */}
            <WhatIDo/>

            <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700"/>

            {/*  Featured Projects */}
            <div className="space-y-9">
                <div className="space-y-3">
                    <h2 className="font-bold text-3xl text-white">Featured Projects</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 gap-y-10 mb-6 lg:grid-cols-3 w-full">
                    <a 
                        href="https://ms-store-sigma.vercel.app/" 
                        target={'_blank'} 
                        rel={'noreferrer'} 
                        >
                        <div className="flex flex-col min-h-[282px] p-5 bg-slate-800 rounded-2xl">
                            <div className="flex py-2 justify-between">
                                <BsFolderFill size={30} />
                                <div className="flex space-x-3">
                                <a 
                                    href="https://github.com/MugiranezaJ/ms-store"
                                    target={'_blank'} 
                                    rel={'noreferrer'} 
                                    className="hover:text-blue-400">
                                    <BsGithub size={25} />
                                </a>
                                <FaShareSquare size={25} />
                                </div>
                            </div>
                            <div className="flex-1 mb-3 text-slate-300">
                                <h4 className="font-bold text-xl line-clamp-2">Microsoft store - Re-implementation</h4>
                                <p className="line-clamp-3">
                                    This is the front end re-implemetation of microsoft store 
                                    desktop app in a web version using react.
                                </p>
                                <p className=" py-1 text-gray-400">
                                    Client: Open source
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <span className="mr-3">ReactJs</span>
                                <span className="mr-3">NodeJS</span>
                                <span className="mr-3">Tailwind CSS</span>
                            </div>
                        </div>
                    </a>

                    <a 
                        href="https://igare.rw/" 
                        target={'_blank'} 
                        rel={'noreferrer'} 
                        >
                        <div className="flex flex-col min-h-[282px] p-5 bg-slate-800 rounded-2xl">
                            <div className="flex py-2 justify-between">
                                <BsFolderFill size={30} />
                                <div className="flex space-x-3">
                                <FaShareSquare size={25} />
                                </div>
                            </div>
                            <div className="flex-1 mb-3 text-slate-300">
                                <h4 className="font-bold text-xl line-clamp-2">Igare.rw</h4>
                                <p className="line-clamp-3">
                                    By proving legal ownership documents, this website aims at regulating the 
                                    buying and selling of bicycles all over the 
                                    country of Rwanda in a secure way.
                                </p>
                                <p className=" py-1 text-gray-400">
                                    Client: BSSC Ltd.
                                </p>
                            </div>
                            <div className="flex flex-wrap w-full">
                                <span className="mr-3">PHP</span>
                                <span className="mr-3">JavaScript</span>
                                <span className="mr-3">Ajax</span>
                                <span className="mr-3">HTML</span>
                                <span className="mr-3">CSS</span>
                                <span className="mr-3">MySQL</span>
                            </div>
                        </div>
                    </a>
                    
                    <a 
                        href="https://softlanding.rw/" 
                        target={'_blank'} 
                        rel={'noreferrer'} 
                        >
                        <div className="flex flex-col min-h-[282px] p-5 bg-slate-800 rounded-2xl">
                            <div className="flex py-2 justify-between">
                                <BsFolderFill size={30} />
                                <div className="flex space-x-3">
                                <FaShareSquare size={25} />
                                </div>
                            </div>
                            <div className="flex-1 mb-3 text-slate-300">
                                <h4 className="font-bold text-xl line-clamp-2">Softlanding.rw</h4>
                                <p className="line-clamp-3">
                                    Soft Landing Rwanda is a company that 
                                    facilitates peaple in travelling and relocating  
                                    in Rwanda and Africa at large. You can see more 
                                    services through their website
                                </p>
                                <p className=" py-1 text-gray-400">
                                    Client: Soft Landing Rwanda
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <span className="mr-3">PHP</span>
                                <span className="mr-3">JavaScript</span>
                                <span className="mr-3">Ajax</span>
                                <span className="mr-3">HTML</span>
                                <span className="mr-3">CSS</span>
                                <span className="mr-3">MySQL</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex justify-center">
                    <NavLink
                        exact={"true"}
                        to="/resume"
                        className="flex items-center p-2 space-x-3 rounded-md">
                        <button className="bg-fe bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>View Portfolio</span>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}