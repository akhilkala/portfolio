import React, { ReactElement } from "react";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  description: string;
  repoURL?: string;
  liveURL?: string;
}

export default function Project({
  image,
  name,
  description,
}: Props): ReactElement {
  return (
    <div className="flex items-center">
      <Image src={image} alt={name} width={550} height={550} />
      <div className="ml-20">
        <h2 className="font-roboto font-bold text-3xl">{name}</h2>
        <p className="font-roboto w-4/5 mt-2 text-xl">{description}</p>
        <button className="bg-primary text-white font-roboto mt-4 text-lg rounded px-3 py-1">
          Live Project
        </button>
        <button className="ml-5  bg-code text-white font-roboto mt-4 text-lg rounded px-3 py-1">
          Code
        </button>
      </div>
    </div>
  );
}
