import React, { ReactElement } from "react";
import Input from "../components/Input";
import useInputState from "../hooks/useInputState";
import Image from "next/image";
import useClickLogger from "../hooks/useClickLogger";

export default function Contact(): ReactElement {
  const name = useInputState();
  const email = useInputState();
  const message = useInputState();
  const click = useClickLogger("contact");

  const handleSubmit = async () => {
    if (!email.value) return;
  };

  return (
    <div id="contact" className="h-screen p-12 ml-6 flex flex-col relative">
      <h1 className="font-poppins font-bold text-3xl">GET IN TOUCH</h1>
      <p className="font-roboto text-xl w-2/3 text-faded mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam enim at
        urna, eu e lementum id sapien in. Arcu, amet mattis egestas a eget urna
        ipsum ultricies.{" "}
      </p>
      <div className="flex flex-1 items-center">
        <div className="flex-1">
          <Input state={name} name="Name" />
          <Input state={email} name="Email" />
          <Input state={message} name="Message" long />
        </div>
        <Image src="/or-desktop.svg" height={275} width={100} alt="Or" />
        <div className="flex-1"></div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-28 mr-12 bg-primary text-white font-roboto text-xl font-medium rounded px-7 py-1 shadow-purple"
      >
        Send
      </button>
      <div className="absolute bottom-0 right-0">
        <Image src="/contact.svg" width={300} height={300} alt="Illustration" />
      </div>
    </div>
  );
}
