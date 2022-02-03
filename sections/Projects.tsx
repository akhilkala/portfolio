import React, { ReactElement } from "react";
import Image from "next/image";
import Project from "../components/Project";

export default function Projects(): ReactElement {
  return (
    <div id="projects" className="p-12 ml-6">
      <div className="flex justify-between">
        <h1 className="font-poppins font-bold text-5xl ml-6">Projects</h1>
        <div className="mr-16">
          <Image width={80} height={80} src="/projects-lines.svg" alt="Lines" />
        </div>
      </div>
      <Project
        name="Design Portal"
        description="Prism is IECSE’s very own design social network for budding designers where we host design competitions. It is built with MERN + Typescript. I worked on the client side with React, we used react query for caching and SWR."
        image="/designPortal.svg"
      />
      <Project
        name="Design Portal"
        description="Prism is IECSE’s very own design social network for budding designers where we host design competitions. It is built with MERN + Typescript. I worked on the client side with React, we used react query for caching and SWR."
        image="/designPortal.svg"
      />
      <Project
        name="Design Portal"
        description="Prism is IECSE’s very own design social network for budding designers where we host design competitions. It is built with MERN + Typescript. I worked on the client side with React, we used react query for caching and SWR."
        image="/designPortal.svg"
      />
      <Project
        name="Design Portal"
        description="Prism is IECSE’s very own design social network for budding designers where we host design competitions. It is built with MERN + Typescript. I worked on the client side with React, we used react query for caching and SWR."
        image="/designPortal.svg"
      />
      <Project
        name="Design Portal"
        description="Prism is IECSE’s very own design social network for budding designers where we host design competitions. It is built with MERN + Typescript. I worked on the client side with React, we used react query for caching and SWR."
        image="/designPortal.svg"
      />
    </div>
  );
}
