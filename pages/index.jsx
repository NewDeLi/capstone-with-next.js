import Head from "next/head";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header pageName={"Decisionmaker"} />
      <Navigation />
    </>
  );
};