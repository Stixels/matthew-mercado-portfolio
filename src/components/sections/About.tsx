import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex items-center justify-center bg-slate-900 rounded md:p-8 mt-32">
      <div
        className="max-w-5xl bg-slate-800 rounded-lg shadow-lg p-8 space-y-8 text-md leading-loose -mt-32"
        id="about"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <div className="flex space-x-5 text-blue-400">
            <a
              href="https://www.linkedin.com/in/matthew-mercado-velez/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} title="Linkedin" />
            </a>
            <a
              href="https://www.github.com/Stixels"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} title="Github" />
            </a>
            <a
              href="https://www.twitter.com/Stixels_"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={30} title="Twitter" />
            </a>
          </div>
        </div>

        <div className="md:flex md:items-center md:gap-8">
          <div className="flex flex-col gap-2 md:w-1/2">
            <h2 className="text-2xl font-bold mt-4">Background & Experience</h2>
            <p>
              Born and raised in Puerto Rico, I&apos;m a Computer Science
              graduate from{" "}
              <span className="text-blue-400">
                Mount St. Mary&apos;s University
              </span>
              . I have designed interactive Arduino puzzles and redesigned the
              website at{" "}
              <a
                className="text-blue-400 underline hover:text-blue-300"
                href="https://www.escapethisfrederick.com/"
                target="_blank"
                rel="noreferrer"
              >
                Escape This Frederick
              </a>
              . I founded{" "}
              <a
                className="text-blue-400 underline hover:text-blue-300"
                href="https://www.escapedirector.software/"
                target="_blank"
                rel="noreferrer"
              >
                Escape Director
              </a>
              , a web-app for escape room businesses manage their business; and
              have worked as a Software Engineer Intern at{" "}
              <span className="text-blue-400">Box</span>, leading a project to
              implement social media link unfurling.
            </p>

            <h2 className="text-2xl font-bold mt-4">What&apos;s Next?</h2>
            <p>
              Fluent in both{" "}
              <span className="text-blue-400">English and Spanish</span>, I look
              forward to bringing my creative spark, enthusiasm, and technical
              prowess to a forward-thinking company. Let&apos;s connect and code
              our way to innovation, one line of code at a time.
            </p>
          </div>
          <div className="md:block md:w-1/2 md:mt-0 pt-12">
            <Image
              className="rounded-lg"
              src="/matthew-headshot.png"
              alt="Matthew Mercado"
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
