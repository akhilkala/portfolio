import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import NotFound from "./404";

const Admin: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [title, setTitle] = useState("404: This page could not be found");

  useEffect(() => {
    axios("/api/admin", {
      headers: {
        Token: localStorage.getItem("token-x") || "",
      },
    })
      .then((raw) => {
        setData(raw.data);
        setLoading(false);
        setTitle("Akhil Kala | Admin");
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) return <NotFound />;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Akhil's portfolio statistics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8">
        <div className="flex">
          <div className="flex-1">
            <h1 className="font-poppins text-4xl">Statistics</h1>
            <h2 className="font-roboto text-2xl font-medium mt-4 pt-4 border-t-2">
              Visits
            </h2>
            <h4 className="mt-4 text-lg">
              Total Visits: <span className="text-primary">400</span>
            </h4>
            <h2 className="font-roboto text-2xl font-medium mt-4 pt-4 border-t-2">
              Clicks
            </h2>
            <h2 className="font-roboto text-2xl font-medium mt-4 pt-4 border-t-2">
              Errors
            </h2>
          </div>
          <div className="flex-1">
            <h1 className="font-poppins text-4xl">Projects</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;
