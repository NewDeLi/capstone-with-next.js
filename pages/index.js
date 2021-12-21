import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import SignInScreen from "../components/Authentication/SignInScreen";
import styled from "styled-components";

export default function Index() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header pageName={"DECISIONS"} onlyIndex={"VOTE WITH ME"} />
      <StyleSection>
        <img src="/Icon/Waage-01.svg" width="150px" height="150px" />
      </StyleSection>
      <SignInScreen/>
    </>
  );
}
const StyleSection = styled.section`
  margin-bottom: 20vh;
`;
