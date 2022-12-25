import { NavLink } from "react-router-dom";
import MyImage from "../assets/MyImage-wide.jpg"

export default function Resume() {
    return (
        <div className="flex-1 lg:max-w-[1320px] sm:max-w-[540px] md:max-w-[720px] mx-auto">
             <div className="flex-1 w-full min-h-[220px]">
                <div className=" space-y-3 text-center">
                    <h2 className="font-bold text-4xl text-white">Online Resume</h2>
                    <div className="space-x-2">
                        <button className="bg-fe bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>View Portfolio</span>
                        </button>
                        <button className="bg-fe bg-gray-700 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            <span>Download Resume</span>
                        </button>
                    </div>
                </div>
            </div>

            <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700"/>

            <div className="container mx-auto mt-12 px-6 py-6 bg-slate-500 text-sm">
                <div className="p-3 shadow-2xl bg-[#151e29]">
                    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
                        <div className="col-span-3">
                            <h2 className="font-bold text-5xl text-white">Mugiraneza Jackson</h2>
                            <p className="font-thin text-2xl">Software Engineer</p>
                        </div>
                        <div className="flex justify-center w-full">
                            <ul className="flex-1 pt-2 pb-4 text-sm w-[320px]">
                                <div className="rounded-sm max">
                                    <NavLink
                                        exact
                                        to="/#"
                                        className="flex items-center space-x-2 rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
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
                                        <p className="text-xs">(+250) 780712835</p>
                                    </NavLink>
                                </div>
                                <li className="rounded-sm">
                                    <NavLink
                                            exact
                                            to="/#"
                                            className="flex items-center space-x-2 rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
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
                                        <p className="text-xs">mugiranzaj@gmail.com</p>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink
                                        exact
                                        to="/#"
                                        className="flex items-center space-x-2 rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
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
                                        <p  className="text-xs">mywebsite.com</p>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink
                                            exact
                                            to="/#"
                                            className="flex items-center space-x-2 rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
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
                                        <p className="text-xs">Kigali, Rwanda</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700"/>

                    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-5">
                        <div className="flex items-center justify-center">
                            <img src={MyImage} alt="" className=" h-32 w-32 rounded-full"/>
                        </div>
                        <div className=" flex items-center col-span-4">
                            <p>
                                Summarise your career here. You can make a PDF 
                                version of your resume using our free Sketch 
                                template here. Donec quam felis, ultricies nec, 
                                pellentesque eu. Lorem ipsum dolor sit amet, 
                                consectetuer adipiscing elit. Aenean commodo 
                                ligula eget dolor. Aenean massa. Cum sociis 
                                natoque penatibus et magnis dis parturient 
                                montes, nascetur ridiculus mus. Donec quam felis
                                , ultricies nec, pellentesque eu, pretium quis, 
                                sem. Maecenas nec odio et ante tincidunt tempus.
                                Donec vitae sapien ut libero venenatis 
                                faucibus. Nullam quis ante. Etiam sit amet orci
                                eget eros faucibus tincidunt. Duis leo. Sed 
                                fringilla mauris sit amet nibh.
                            </p>
                        </div>
                    </div>

                    <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700"/>

                    <div className="grid lg:grid-cols-4">
                        <div className="col-span-3 pl-3 pr-12 space-y-2">
                            <h2 className="font-bold text-2xl text-white uppercase">Work Experience</h2>
                            <div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between">
                                        <h3 className=" text-base font-bold text-neutral-300">Senior Software Engineer</h3>
                                        <p>Google | 2019 - Present</p>
                                    </div>
                                    <p>
                                        Role description goes here ipsum dolor 
                                        sit amet, consectetuer adipiscing elit. 
                                        Aenean commodo ligula eget dolor. Aenean
                                        massa. Cum sociis natoque penatibus et 
                                        magnis dis parturient montes, nascetur 
                                        ridiculus mus. Donec quam felis, 
                                        ultricies nec, pellentesque eu, pretium 
                                        quis, sem. Donec pede justo, fringilla 
                                        vel. Lorem ipsum dolor sit amet, 
                                        consectetuer adipiscing elit. Aenean 
                                        commodo ligula eget dolor. Aenean massa. 
                                        Cum sociis natoque penatibus et magnis 
                                        dis parturient montes, nascetur 
                                        ridiculus mus. Donec quam felis.
                                    </p>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between">
                                        <h3 className=" text-base font-bold text-neutral-300">Senior Software Engineer</h3>
                                        <p>Google | 2019 - Present</p>
                                    </div>
                                    <p>
                                        Role description goes here ipsum dolor 
                                        sit amet, consectetuer adipiscing elit. 
                                        Aenean commodo ligula eget dolor. Aenean
                                        massa. Cum sociis natoque penatibus et 
                                        magnis dis parturient montes, nascetur 
                                        ridiculus mus. Donec quam felis, 
                                        ultricies nec, pellentesque eu, pretium 
                                        quis, sem. Donec pede justo, fringilla 
                                        vel. Lorem ipsum dolor sit amet, 
                                        consectetuer adipiscing elit. Aenean 
                                        commodo ligula eget dolor. Aenean massa. 
                                        Cum sociis natoque penatibus et magnis 
                                        dis parturient montes, nascetur 
                                        ridiculus mus. Donec quam felis.
                                    </p>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between">
                                        <h3 className=" text-base font-bold text-neutral-300">Senior Software Engineer</h3>
                                        <p>Google | 2019 - Present</p>
                                    </div>
                                    <p>
                                        Role description goes here ipsum dolor 
                                        sit amet, consectetuer adipiscing elit. 
                                        Aenean commodo ligula eget dolor. Aenean
                                        massa. Cum sociis natoque penatibus et 
                                        magnis dis parturient montes, nascetur 
                                        ridiculus mus. Donec quam felis, 
                                        ultricies nec, pellentesque eu, pretium 
                                        quis, sem. Donec pede justo, fringilla 
                                        vel. Lorem ipsum dolor sit amet, 
                                        consectetuer adipiscing elit. Aenean 
                                        commodo ligula eget dolor. Aenean massa. 
                                        Cum sociis natoque penatibus et magnis 
                                        dis parturient montes, nascetur 
                                        ridiculus mus. Donec quam felis.
                                    </p>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between">
                                        <h3 className=" text-base font-bold text-neutral-300">Senior Software Engineer</h3>
                                        <p>Google | 2019 - Present</p>
                                    </div>
                                    <p>
                                        Role description goes here ipsum dolor 
                                        sit amet, consectetuer adipiscing elit. 
                                        Aenean commodo ligula eget dolor. Aenean
                                        massa. Cum sociis natoque penatibus et 
                                        magnis dis parturient montes, nascetur 
                                        ridiculus mus. Donec quam felis, 
                                        ultricies nec, pellentesque eu, pretium 
                                        quis, sem. Donec pede justo, fringilla 
                                        vel. Lorem ipsum dolor sit amet, 
                                        consectetuer adipiscing elit. Aenean 
                                        commodo ligula eget dolor. Aenean massa. 
                                        Cum sociis natoque penatibus et magnis 
                                        dis parturient montes, nascetur 
                                        ridiculus mus. Donec quam felis.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-2xl text-white uppercase">Skills</h2>
                            <div>
                                <h3 className=" text-base font-bold text-neutral-300">Technical</h3>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}