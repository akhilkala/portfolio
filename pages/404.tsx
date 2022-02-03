import { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function NotFound(): ReactElement {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="Akhil's portfolio | Page Not Found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-12 relative h-screen flex items-center justify-center flex-col">
        <div className="absolute top-16 right-16">
          <Image
            src="/404_corner.svg"
            width={70}
            height={70}
            alt="corner Illustration"
          />
        </div>
        <div className="absolute bottom-16 left-16 rotate-180">
          <Image
            src="/404_corner.svg"
            width={70}
            height={70}
            alt="corner Illustration"
          />
        </div>
        <div className="opacity-75">
          <h1 className="text-4xl">
            <span className="font-fira font-medium border-r-2 pr-4 mr-4">
              404
            </span>
            <span className="font-poppins font-500">Page Not Found</span>
          </h1>
          <h2 className="font-roboto text-xl mt-1.5 tracking-notfound">
            But you can find some talent
            <span className="text-primary underline ml-1.5">
              <Link href="/">here</Link>
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}
