import React from "react";
import Head from "next/head";
import { Header } from "./Header";

export default function Result() {
  return (
    <div>
      <Head>
        <title>Results</title>
      </Head>

      <Header pageName={"Results"} />
    </div>
  );
}
