import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import firebase from "../firebase/config.js";
import SignInScreen from "../components/Authentication/SignInScreen";
import styled from "styled-components";

firebase;

export default function Index({handleLogin}) {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header pageName={"DECISIONS"} onlyIndex={"VOTE WITH ME"} />
      <StyleSection>
        <img src="/Icon/Waage-01.svg" width="150px" height="150px" />
      </StyleSection>
      <SignInScreen handleLogin={handleLogin}/>
    </>
  );
}
const StyleSection = styled.section`
  margin-bottom: 20vh;
`;
