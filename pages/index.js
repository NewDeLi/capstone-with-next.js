import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import Home from "./home";
import Login from "./login";
import SignInScreen from "./auth";




  
export default function Index({}) {
  return (
    <>
      <Header pageName={"DECISIONS"} onlyIndex={"VOTE WITH ME"} />
      <section>
        <SignInScreen />
      </section>
      <Login />
    </>
  );
}
