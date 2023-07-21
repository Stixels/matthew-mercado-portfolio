// imports
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// Footer component
const Footer = () => {
  return (
    <footer className="my-20 p-6">
      <div className="flex flex-col items-center justify-between gap-2">
        <div>
          <p className="text-gray-400"> Designed & Built by Matthew Mercado</p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/matthew-mercado-velez/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            <FaLinkedin size={20} title="Linkedin" />
          </a>

          <a
            href="https://www.github.com/Stixels"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            <FaGithub size={20} title="Github" />
          </a>

          <a
            href="https://www.twitter.com/Stixels_"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            <FaTwitter size={20} title="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
