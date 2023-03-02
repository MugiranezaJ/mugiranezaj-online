const Footer = () => {
  return (
    <div className="flex justify-center mt-20 mb-7 text-gray-400">
      <p>
        <small>
          &copy;{new Date().getFullYear()}{" "}
          <a
            href="https://www.github.com/MugiranezaJ"
            target={"_blank"}
            rel="noreferrer"
            className="font-bold text-blue-500 hover:underline"
          >
            MugiranezaJ
          </a>
        </small>
      </p>
    </div>
  );
};

export default Footer;
