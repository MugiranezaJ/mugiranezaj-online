import WhatIDo from "../components/AboutMe/WhatIDo";
import Projects from "../components/AboutMe/Projects";
import Introduction from "../components/AboutMe/Introduction";

export default function AboutMe() {
  return (
    <div className="flex-1 lg:max-w-[1320px] sm:max-w-[540px] md:max-w-[720px] mx-auto">
      {/* Introduction */}
      <Introduction />

      <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700" />

      {/* What I Do */}
      <WhatIDo />

      <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700" />

      {/* Featured Projects */}
      <Projects />
    </div>
  );
}
