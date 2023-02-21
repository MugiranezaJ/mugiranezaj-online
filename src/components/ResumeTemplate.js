import React from "react";
import MyImage from "../assets/MyImage-wide.jpg"

export const ResumeTemplate = React.forwardRef((props, ref) => {
    return (
        <div className="container max-w-[1140px] mx-auto md:mt-12 xl:p-12 text-sm">
            <div ref={ref} className="p-4 xl:p-12 shadow-2xl bg-[#151e29]">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
                    <div className="col-span-3">
                        <h2 className="font-bold text-2xl md:text-5xl text-white uppercase">Mugiraneza Jackson</h2>
                        <p className="font-thin text-xl md:text-2xl">Software Engineer</p>
                    </div>
                    <div className="flex justify-center w-full">
                        <ul className="flex-1 pt-2 pb-4 text-sm w-[320px]">
                            <li className="flex items-center space-x-2 rounded-md">
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
                            </li>
                            <li className="flex items-center space-x-2 rounded-mdrounded-sm">
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
                                    <p className="text-xs">mugiranezaj@gmail.com</p>
                            </li>
                            <li className="flex items-center space-x-2">
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
                                    <p  className="text-xs">mugiranezaj.vercel.app</p>
                            </li>
                            <li className="flex items-center space-x-2 rounded-md">
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
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700"/>

                {/* Resume Header Summary */}
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-5">
                    <div className="flex items-center justify-center">
                        <img src={MyImage} alt="" className=" h-32 w-32 rounded-full"/>
                    </div>
                    <div className=" flex items-center lg:col-span-4">
                        <p>
                            Enthusiastic Software engineer eager to contribute 
                            to individual and teams success through hard work, 
                            attention to detail and excellent organizational 
                            skills. Clear understanding of Programming and 
                            coding in general. Motivated to learn, grow and 
                            excel in Software engineering and web development. 
                        </p>
                    </div>
                </div>

                <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700"/>

                {/* Main body */}
                <div className="grid lg:grid-cols-4 mb-16">
                    {/* Main Panel */}
                    <div className="col-span-3 lg:pl-3 sm:pr-12 space-y-2">

                        {/* Experiance */}
                        <div className="mb-12">
                            <h2 className="font-bold text-2xl text-white uppercase tracking-widest mb-4">Work Experience</h2>
                            <div>
                                <div className="space-y-2 mb-4">
                                    <div className="sm:flex justify-between">
                                        <div>
                                            <h3 className=" text-base font-bold text-neutral-300">Backend Software Engineer</h3>
                                            <p>Full-time</p>
                                        </div>
                                        <p>Bongalo Ltd | 2022 Apr - 2022 December</p>
                                    </div>
                                    <p>
                                        As a backend end engineer, I was tasked 
                                        to implement new features, debug, fix 
                                        and improve already existing ones 
                                        and then deploy them. I would also maintain the system.
                                    </p>
                                    <p>Tools: Pyhton | Django Rest framework(DRF) | Google Cloud Pratiform(GCP) | Firebase</p>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="sm:flex justify-between">
                                        <div>
                                                <h3 className=" text-base font-bold text-neutral-300">Full Stack Developer</h3>
                                                <p>Freelance</p>
                                        </div>
                                        <p>BSSC Ltd. | 2021 Nov - Mar 2022</p>
                                    </div>
                                    <p>
                                        I designed the UI/UX, did system 
                                        design, built all features of frontend 
                                        and backend and deployed the project.
                                    </p>
                                    <p>Tools: PhpMyAdmin | Bootstrap | CSS | HTML5 | PHP | jQuery | JavaScript</p>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="sm:flex justify-between">
                                        <div>
                                            <h3 className=" text-base font-bold text-neutral-300">Full Stack Developer</h3>
                                            <p>Freelance</p>
                                        </div>
                                        <p>Soft Landing Rwanda. | 2021 May - Jul 2022</p>
                                    </div>
                                    <p>
                                        I designed the UI/UX, did system 
                                        design, built all features of frontend 
                                        and backend and deployed the project.
                                    </p>
                                    <p>Tools: PhpMyAdmin | PHP | jQuery | JavaScript</p>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="sm:flex justify-between">
                                        <div>
                                            <h3 className=" text-base font-bold text-neutral-300">Software Engineer Intern</h3>
                                            <p>Full-time Internship</p>
                                        </div>
                                        <p>MVend Ltd. | 2019 - Present</p>
                                    </div>
                                    <p>
                                        As an intern, I worked on both frontend 
                                        and backend projects that gave me hints 
                                        on industry level skills. I also 
                                        improved my communication skills 
                                        though working as a team
                                    </p>
                                    <p> Git | PostgreSQL | Apache Kafka | Node.js | React.js</p>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="sm:flex justify-between">
                                        <div>
                                            <h3 className=" text-base font-bold text-neutral-300">Full Stack Developer</h3>
                                            <p>Freelance</p>
                                        </div>
                                        <p>Ikuzo Tech Group. | 2021 May - Jul 2022</p>
                                    </div>
                                    <p>
                                        I worked as full stack developer 
                                        focusing mostly on backend tasks
                                    </p>
                                    <p>Tools: PhpMyAdmin | PHP | jQuery | Bootstrap | JavaScript</p>
                                </div>
                            </div>
                        </div>

                        {/* Projects */}
                        <div className="mb-12">
                            <h2 className="font-bold text-2xl text-white uppercase tracking-widest mb-4">Projects</h2>
                            <div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between">
                                        <h3 className=" text-base font-bold text-neutral-300">Microsoft store - Re-Implementation</h3>
                                        <p>Open Source</p>
                                    </div>
                                    <p>
                                        This is the front end re-implemetation 
                                        of microsoft store desktop app in a web 
                                        version using react.
                                    </p>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between">
                                        <h3 className=" text-base font-bold text-neutral-300">Igare.rw</h3>
                                        <p>Closed Source</p>
                                    </div>
                                    <p>
                                        By proving legal ownership documents, 
                                        this website aims at regulating the 
                                        buying and selling of bicycles all over 
                                        the country of Rwanda in a secure way.
                                    </p>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between">
                                        <h3 className=" text-base font-bold text-neutral-300">Softlanding.rw</h3>
                                        <p>closed Source</p>
                                    </div>
                                    <p>
                                        Soft Landing Rwanda is a company that 
                                        facilitates peaple in travelling and 
                                        relocating in Rwanda and Africa at 
                                        large. You can see more services 
                                        through their website
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Panel */}
                    <div className="space-y-5">
                        <div className="space-y-3">
                            <h2 className="font-bold text-2xl text-white uppercase tracking-widest">Skills</h2>
                            <div className="">
                                <h3 className=" text-base font-bold text-white mb-1">Technical</h3>
                                <div className="">
                                    <ul className="space-y-1">
                                        <li>HTML/CSS/PHP</li>
                                        <li>JavaScript/React</li>
                                        <li>React Native</li>
                                        <li>NodeJs/Python/Java</li>
                                        <li>PostgreSQL/MySQL/MongoDB</li>
                                        <li>Figma</li>
                                        <li>Heroku/DigitalOcean/GCP</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="">
                                <h3 className=" text-base font-bold text-white mb-1">Professional</h3>
                                <div className="">
                                    <ul className="space-y-1">
                                        <li>JavaScript/React</li>
                                        <li>NodeJs/Python/Java</li>
                                        <li>PostgreSQL/MySQL/MongoDB</li>
                                        <li>Figma</li>
                                        <li>Heroku/DigitalOcean/GCP</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>

                        <div className="space-y-3">
                            <h2 className="font-bold text-2xl text-white uppercase tracking-widest">Education</h2>
                            <div className="space-y-3">
                                <div className=" mb-1">
                                    <p className=" text-stone-200">Software Engineering and communication Skills</p>
                                    <p>Andela Inc.</p>
                                    <p>2020 - 2021</p>
                                </div>
                                <div className=" mb-1">
                                    <p className=" text-stone-200">Advanced Level Diploma in Maths, Physics & Computer Science</p>
                                    <p>ES KAnombe EFOTEC</p>
                                    <p>2017 - 2019</p>
                                </div>
                            </div>
                        </div>

                        {/* Certification */}
                        <div className="space-y-3">
                            <h2 className="font-bold text-2xl text-white uppercase tracking-widest">Certification</h2>
                            <div className="space-y-3">
                                <div className=" mb-1">
                                    <p className=" text-stone-200">Software Engineering and communication Skills</p>
                                    <p>Andela Inc.</p>
                                </div>
                                {/* <div className=" mb-1">
                                <p className=" text-stone-200">Award Lorem Ipsum</p>
                                    <p>Oracle lorem ipsum</p>
                                </div> */}
                            </div>
                        </div>

                        {/*  */}
                        <div className="space-y-3">
                            <h2 className="font-bold text-2xl text-white uppercase tracking-widest">Languages</h2>
                            <div className="space-y-3">
                                <div className=" mb-1">
                                <p className=" text-stone-200">Kinyarwanda <span className="text-gray-400">(Native)</span></p>
                                </div>
                                <div className=" mb-1">
                                <p className=" text-stone-200">English <span className="text-gray-400">(Intermediate)</span></p>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className="space-y-3">
                            <h2 className="font-bold text-2xl text-white uppercase tracking-widest">Interests</h2>
                            <div className="space-y-2">
                                <p className=" text-stone-200">Travelling</p>
                                <p className=" text-stone-200">Gaming</p>
                                <p className=" text-stone-200">Photography</p>
                                <p className=" text-stone-200">Cosmology</p>

                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700"/>

                <div className="xl:flex xl:justify-center xl:space-x-4">
                    <div className="flex space-x-1 items-center my-4">
                        <a href="/#" alt="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                        </a>
                        <p>linkedin.com/in/mugiraneza-jackson-9a7a181b8</p>
                    </div>
                    <div className="flex space-x-1 items-center my-4">
                        <a href="/#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5 h-5"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                        </a>
                        <p>github.com/MugiranezaJ</p>
                    </div>
                    <div className="flex space-x-1 items-center my-4">
                        <a href="/#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5 h-5"><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                        </a>
                        <p>@MugiranezaJ</p>
                    </div>
                </div>
            </div>
        </div>
    );
})