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
      <div className="p-1 mt-4 flex flex-row justify-evenly h-[40rem] w-[64rem] rounded-lg bg-gray-500">
        <div className="h-full w-1/2 bg-white overflow-x-scroll rounded-lg p-2">
          <Editor />
        </div>
        <div className="bg-white w-1/2 ml-6 pl-4 pt-2 rounded-lg overflow-x-scroll p-2">
          Output goes here
        </div>
      </div>
    </div>
  );
};

export default Home;
