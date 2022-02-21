import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Quik | A blazing fast web IDE</title>
      </Head>
      <h1 className="text-3xl font-bold underline">
        Quik - A blazing fast web IDE
      </h1>
    </div>
  );
};

export default Home;
