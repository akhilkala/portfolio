import React, { ReactElement } from "react";

export default function Skills(): ReactElement {
  return (
    <div className="h-screen">
      <h1 className="font-poppins font-bold text-4xl text-center">
        My Skills{" "}
      </h1>
      <div className="flex gap-36 justify-between mx-28 mt-16">
        <div className="flex-1 h-80 min-h-max p-6 rounded shadow-card">
          <h2 className="font-palanquin text-3xl text-center">Web</h2>
        </div>
        <div className="flex-1 h-80 min-h-max p-6 rounded shadow-card">
          <h2 className="font-palanquin text-3xl text-center">Backend</h2>
        </div>
        <div className="flex-1 h-80 min-h-max p-6 rounded shadow-card">
          <h2 className="font-palanquin text-3xl text-center">Miscellaneous</h2>
        </div>
      </div>
    </div>
  );
}
