import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Contact from "../sections/Contact";
import Landing from "../sections/Landing";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

const Home: NextPage = () => {
  useEffect(() => {
    const endpoint = "/api/stats/visit";
    const Token = localStorage.getItem("token-x") || "";
    axios.patch(endpoint, {}, { headers: { Token } }).catch((err) => {
      axios.post("/api/error", { endpoint });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Akhil Kala</title>
        <meta name="description" content="Akhil's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
