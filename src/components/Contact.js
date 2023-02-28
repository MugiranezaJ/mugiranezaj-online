import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner";

export default function Contact() {
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
        setIsEmailSent(false)
        setIsEmailSendFailed(false);
    }, 5000)
  }, [isEmailSent, isEmailSendFailed])

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
          setIsEmailSent(true)
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email.");
          setIsEmailSending(false);
          setIsEmailSendFailed(true)
        }
      );
  };

  return (
    <div className="flex-1">
      <div className="flex-1 w-full mb-12 max-w-[820px] mx-auto">
        <div className=" space-y-3 text-center">
          <h2 className="font-bold text-4xl text-white">Contact</h2>
          <p>
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to{" "}
            <span className="text-blue-500">mugiranezajx@gmail.com</span>
          </p>
          <div className="space-y-4">
            <p>
              Want to get connected? Follow me on the social channels below.
            </p>
            <div className="flex justify-center content-center">
              <ul className="flex space-x-3 text-white">
                <li className="bg-blue-500 p-2 rounded-full">
                  <a
                    href="https://www.linkedin.com/in/mugiraneza-jackson-9a7a181b8"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-blue-500 p-2 rounded-full">
                  <a
                    href="https://github.com/MugiranezaJ"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-blue-500 p-2 rounded-full">
                  <a href="https://t.me/MugiranezaJ">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-slate-700" />

      <div className="flex-1 max-w-[820px] mx-auto justify-center space-y-6">
        <h3 className="text-center text-3xl font-bold text-gray-200">
          Get In Touch
        </h3>
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
                <option value="Full Time Employment">
                  Full Time Employment
                </option>
                <option value="Part Time Employment">
                  Part Time Employment
                </option>
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
                <div className="flex items-center bg-blue-600 bg-opacity-70 rounded-tr rounded-bl px-4 text-white font-bold">
                  Message sent!🤓.
                </div>
              )}
              {isEmailSendFailed && (
                <div className="flex items-center bg-red-500 xbg-opacity-70 rounded-tr rounded-bl px-4 text-white font-bold">
                  Failed to send message😔. Please try again.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
