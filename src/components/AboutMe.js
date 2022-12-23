import MyImage from "../assets/MyImage-wide.jpg"

export default function AboutMe() {
    return (
        <div className="flex-1  pl-12 pr-12">
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 w-full min-h-[320px]">
                <div className=" space-y-3">
                    <h2 className="font-bold text-5xl">Mugiraneza Jackson</h2>
                    <p className="font-thin text-2xl">Software Engineer</p>
                    <p className="">
                        I'm a software engineer specialised in frontend and backend development for complex 
                        scalable web apps. I write about software development on my blog. Want to know 
                        how I may help your project? Check out my project portfolio and online resume.
                    </p>
                    <div className="space-x-2">
                        <button className="bg-fe bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>View Portfolio</span>
                        </button>
                        <button className="bg-fe bg-gray-900 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            <span>View Resume</span>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={MyImage} alt="" className="p-1 max-w-sm"></img>
                </div>
            </div>
            <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700"/>
            <div className="space-y-9">
                <div className="space-y-3">
                    <h2 className="font-bold text-3xl">What I Do</h2>
                    <p>
                        I have more than 20 years' experience building software for clients all over the world.
                        Below is a quick overview of my main technical skill sets and technologies I use. 
                        Want to find out more about my experience? Check out my online resume and project portfolio.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4 w-full">
                    <div className="space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 " viewBox="0 0 512 512"><title>ionicons-v5_logos</title><path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z"/></svg>
                        <p>JavaScript</p>
                        <p>
                            List skills/technologies here. You can change the icon above to any of 
                            the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 " viewBox="0 0 512 512"><title>ionicons-v5_logos</title><path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z"/></svg>
                        <p>JavaScript</p>
                        <p>
                            List skills/technologies here. You can change the icon above to any of 
                            the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 " viewBox="0 0 512 512"><title>ionicons-v5_logos</title><path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z"/></svg>
                        <p>JavaScript</p>
                        <p>
                            List skills/technologies here. You can change the icon above to any of 
                            the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 " viewBox="0 0 512 512"><title>ionicons-v5_logos</title><path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z"/></svg>
                        <p>JavaScript</p>
                        <p>
                            List skills/technologies here. You can change the icon above to any of 
                            the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}