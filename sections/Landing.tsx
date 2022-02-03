import React, { ReactElement } from "react";
import Image from "next/image";
import useClickLogger from "../hooks/useClickLogger";

export default function Landing(): ReactElement {
  const click = useClickLogger("landing");

  return (
    <div className="h-screen relative overflow-hidden">
      <header className="flex justify-between items-center py-9 px-12">
        <h3 className="font-roboto font-medium text-2xl ml-6">
          Akhil Kala - Full Stack Developer
        </h3>
        <nav className="mr-6">
          <a
            onClick={() => click("projects")}
            href="#projects"
            className="font-roboto text-xl mx-5 nav-item"
          >
            Projects
          </a>
          <a
            onClick={() => click("skills")}
            href="#skills"
            className="font-roboto text-xl mx-5 nav-item"
          >
            Skills
          </a>
          <a
            onClick={() => click("about")}
            href="#about"
            className="font-roboto text-xl mx-5 nav-item"
          >
            About
          </a>
          <a
            onClick={() => click("contact")}
            href="#contact"
            className="font-roboto text-xl mx-5 nav-item"
          >
            Contact
          </a>
          <a
            href="#"
            onClick={() => click("resume")}
            className="font-roboto text-xl mx-5 border-3 border-primary rounded-md px-4 py-1"
          >
            Resume
          </a>
        </nav>
      </header>
      <div className="p-12 mt-12 ml-14 flex justify-between">
        <div>
          <h1 className="relative font-poppins font-black text-5xl tracking-widest leading-normal">
            I Build Experiences <br />
            For The Web
            <div className="absolute top-0 left-0 -translate-y-[20%] -translate-x-[40%] -z-10">
              <Image width={80} height={80} src="/dots.svg" alt="Dots" />
            </div>
          </h1>
          <h4 className="font-roboto text-3xl text-light tracking-widest mt-1">
            And I make them look good
          </h4>
          <div className="flex ">
            <button className="mr-12 bg-primary text-white font-roboto text-xl font-medium rounded-md px-10 py-1 mt-12 shadow-purple">
              My Work
            </button>
            <Image
              className="translate-y-6"
              width={250}
              height={100}
              src="/arrow.svg"
              alt="Arrow"
            />
          </div>
        </div>
        <div className="flex mr-14 flex-col">
          <div className="cursor-pointer">
            <a
              onClick={() => click("github")}
              href="https://github.com/akhilkala"
            >
              <Image
                width={35}
                height={35}
                src="/github-dark.svg"
                alt="Github"
              />
            </a>
          </div>
          <div className="mt-6 cursor-pointer">
            <a
              onClick={() => click("linkedin")}
              href="https://www.linkedin.com/in/akhil-kala-b185131b0/"
            >
              <Image
                width={35}
                height={35}
                src="/linkedin-dark.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="mt-6 cursor-pointer">
            <a
              onClick={() => click("medium")}
              href="https://akhilkala.medium.com/"
            >
              <Image
                width={35}
                height={35}
                src="/medium-dark.svg"
                alt="Medium"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute right-24 bottom-0 translate-y-5">
        <Image width={300} height={300} src="/landing.svg" alt="Medium" />
      </div>
      <div className="absolute right-2/4 bottom-10 translate-x-2/4 cursor-pointer">
        <a href="#projects">
          <Image
            width={50}
            height={50}
            src="/down-arrow.svg"
            alt="Down Arrow"
          />
        </a>
      </div>
    </div>
  );
}
