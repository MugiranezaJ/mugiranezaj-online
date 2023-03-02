import ContactForm from "../components/Contact/ContactForm";
import ContactIntro from "../components/Contact/ContactIntro";

export default function Contact() {
  return (
    <div className="flex-1">
      <ContactIntro />

      <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700" />

      <div className="flex-1 max-w-[820px] mx-auto justify-center space-y-6">
        <h3 className="text-center text-3xl font-bold text-gray-200">
          Get In Touch
        </h3>
        <ContactForm />
      </div>
    </div>
  );
}
