import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "../Spinner";
import SuccesToast from "./SuccesToast";
import FailToast from "./FailToast";

const ContactForm = () => {
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailSendFailed, setIsEmailSendFailed] = useState(false);
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    service: "",
    message: "",
  });
  const form = useRef();
  useEffect(() => {
    setTimeout(() => {
      setIsEmailSent(false);
      setIsEmailSendFailed(false);
    }, 5000);
  }, [isEmailSent, isEmailSendFailed]);

  const sendEmail = () => {
    setIsEmailSending(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          setIsEmailSending(false);
          setIsEmailSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email.");
          setIsEmailSending(false);
          setIsEmailSendFailed(true);
        }
      );
  };
  return (
    <div>
      <form
        ref={form}
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail();
        }}
        className="space-y-6"
      >
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <label
              for="names"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              onChange={(event) => {
                setFormData({ ...formData, names: event.target.value });
              }}
              type="text"
              name="names"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              onChange={(event) => {
                setFormData({ ...formData, email: event.target.value });
              }}
              type="email"
              name="email"
              id="email"
              class="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="yourname@company.com"
              required
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>
        </div>

        <div>
          <label
            for="service"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            onChange={(event) => {
              setFormData({ ...formData, service: event.target.value });
            }}
            id="service"
            name="service"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a service</option>
            <option value="Full Time Employment">Full Time Employment</option>
            <option value="Part Time Employment">Part Time Employment</option>
            <option value="Freelance">Freelance</option>
            <option value="Not sure">Not sure</option>
          </select>
        </div>

        <div>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            onChange={(event) => {
              setFormData({ ...formData, message: event.target.value });
            }}
            id="message"
            name="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>

        <div className="flex space-x-3">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isEmailSending && (
              <div className="flex justify-center items-center">
                <Spinner />
                <span>Sending...</span>
              </div>
            )}
            {!isEmailSending && <span>Submit</span>}
          </button>
          {isEmailSent && (
            <SuccesToast/>
          )}
          {isEmailSendFailed && (
            <FailToast/>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
