import { useState } from "react";
import { NavLink } from 'react-router-dom'
import mjImage from "../assets/PXL_20220817_070738868.PORTRAIT_2_square.jpg"
import BurgerButton from './BurgerButton';

export default function Sidebar() {
    // const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex flex-row-reverse'>
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div
            // className={`h-screen sticky top-0 ${
            //     open ? "w-40" : "w-96 "
            // } flex flex-col h-screen p-3 bg-gray-800 shadow duration-300`}
            className={`${isOpen ? 'fixed left-0 top-0 bottom-0 z-10 w-full' :'hidden sticky'} h-screen overflow-y-scroll transition ease transform top-0 md:max-w-[280px] md:min-w-[280px] md:flex flex-col p-5 bg-[#1e2a3a] shadow duration-300 scrollbar-thumb-gray-900 scrollbar-thumb-rounded-full scrollbar-thin`}
        >
            <div className="space-y-3 text-center  text-white">
                {/* <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">
                        Dashboard
                    </h2>
                    <button onClick={() => setOpen(!open)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                </div> */}
                <div className="flex items-center justify-center flex-col space-y-6">
                    <h2 className=" text-2xl font-bold">Mugiraneza Jackson</h2>
                    <div className="mb-4">
                        <img src={mjImage} alt="MugiranezaJ" className="w-40 h-auto rounded-full"/>
                    </div>
                    <p className="font text-sm">Hi, my name is Mugiraneza Jackson and I'm a software engineer. Welcome to my personal website!</p>
                    <div>
                        <ul className="flex space-x-3">
                            <li className="bg-blue-500 p-2 rounded-full">
                                <a href="https://www.linkedin.com/in/mugiraneza-jackson-9a7a181b8" target={'_blank'} rel="noreferrer" alt="">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                            </li>
                            <li className="bg-blue-500 p-2 rounded-full">
                                <a href="https://github.com/MugiranezaJ" target={'_blank'} rel="noreferrer">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-4 h-4"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                            </li>
                            <li className="bg-blue-500 p-2 rounded-full">
                                <a href="/#" target={'_blank'} rel="noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-4 h-4"><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='my-4 h-px border-0 dark:bg-slate-700'/>

                {/* <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center py-4">
                        <button
                            type="submit"
                            className="p-2 focus:outline-none focus:ring"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </span>
                    <input
                        type="search"
                        name="Search"
                        placeholder="Search..."
                        className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                    />
                </div> */}
                <div className="">
                    <ul className="flex-1 justify-between pt-2 pb-4 space-y-1 text-sm font-bold">
                        <div className="rounded-sm max">
                            <NavLink
                                exact={"true"}
                                onClick={() => setIsOpen(false)}
                                to="/about-me"
                                className="flex items-center p-2 space-x-3 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                <span className="text-gray-100">About Me</span>
                            </NavLink>
                        </div>
                        <li className="rounded-sm">
                            <NavLink
                                    exact={"true"}
                                    onClick={() => setIsOpen(false)}
                                    to="/portfolio"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                    />
                                </svg>
                                <span className="text-gray-100">Portfolio</span>
                            </NavLink>
                        </li>
                        <li className="rounded-sm">
                            <NavLink
                                exact={"true"}
                                onClick={() => setIsOpen(false)}
                                to="/resume"
                                className="flex items-center p-2 space-x-3 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                                <span className="text-gray-100">
                                    Resume
                                </span>
                            </NavLink>
                        </li>
                        <li className="rounded-sm">
                            <NavLink
                                exact={"true"}
                                onClick={() => setIsOpen(false)}
                                to="/contact"
                                className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="text-gray-100">
                                        Contact
                                    </span>
                            </NavLink>
                        </li>
                        <li className="rounded-sm">
                            <NavLink
                                    exact={"true"}
                                    onClick={() => setIsOpen(false)}
                                    to="/settings"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                    />
                                </svg>
                                <span className="text-gray-100">
                                    Settings
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink
                        exact={"true"}
                        to="/contact">
                        <button className="bg-fe bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                            <span>Let's talk</span>
                        </button>
                    </NavLink>

                </div>
                <hr className='my-4 h-px border-0 dark:bg-slate-700'/>
                <div>
                    <p>Some Theme settings</p>
                </div>
            </div>
        </div>
        </div>
    );
}