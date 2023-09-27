import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-32 flex items-center justify-center rounded bg-slate-900 md:p-8">
      <div
        className="text-md -mt-32 max-w-5xl space-y-8 rounded-lg bg-slate-800 p-8 leading-loose shadow-lg"
        id="about"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
            <h2 className="mt-4 text-2xl font-bold">Background & Experience</h2>
            <p>
              I am first and foremost a proud nerd. I&apos;m a Computer Science
              graduate summa cum laude from Mount St. Mary&apos;s University. I
              have designed interactive Arduino puzzles and redesigned the
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
              , a web-app for escape room businesses manage their business. I
              also worked as a Software Engineer Intern at{" "}
              <a
                className="text-blue-400 underline hover:text-blue-300"
                href="https://www.box.com/"
                target="_blank"
                rel="noreferrer"
              >
                Box
              </a>
              , leading a project to implement social media link unfurling,
              worked with React and Redux to create components, and developed
              Gherkin scripts with Webdriver.io and Selenium to support BDD. I
              am a passionate problem solver and tech enthusiast. I love to
              learn and am always looking for new challenges.
            </p>

            <h2 className="mt-4 text-2xl font-bold">What&apos;s Next?</h2>
            <p>
              I look forward to bringing my creative spark, burning passion, and
              technical prowess to a forward-thinking company. Let&apos;s
              connect and code our way to innovation, one line of code at a
              time.
            </p>
          </div>
          <div className="pt-12 md:mt-0 md:block md:w-1/2">
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
