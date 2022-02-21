import type { NextPage } from "next";
import Head from "next/head";
import { Editor } from "../components/Editor";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black w-screen h-screen">
      <Head>
        <title>Quik | A blazing fast web IDE</title>
      </Head>
      <h1 className="text-4xl font-bold text-white">
        Quik - A blazing fast web IDE
      </h1>
      <div className="p-1 mt-4 flex flex-row space-between">
        <div className="h-[40rem] w-[32rem]">
          <Editor />
        </div>
        <div className="bg-white h-[40rem] w-[32rem]">Output goes here</div>
      </div>
    </div>
  );
};

export default Home;
