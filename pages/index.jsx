import Head from "next/head";
import { Header } from "./components/Header";

import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Head><title>Home</title></Head>
      <div>
        <Header pageName="Decisionmaker for groups" />
        
        <Navigation/>
      </div>
    </>
  )
}