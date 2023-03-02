import { useRef } from "react";
import { ResumeTemplate } from "../components/Resume/ResumeTemplate";
import ResumeIntro from "../components/Resume/ResumeIntro";
import { useReactToPrint } from "react-to-print";

export default function Resume() {
  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });
  return (
    <div className="flex-1 lg:max-w-[1320px] md:max-w-[720px] mx-auto">
      <ResumeIntro handlePrint={handlePrint} />

      <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700" />

      <div className="md:px-3 lg:px-5">
        <ResumeTemplate ref={resumeRef} />
      </div>
    </div>
  );
}
