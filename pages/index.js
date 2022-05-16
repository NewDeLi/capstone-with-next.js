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

      <Main>
        <section>
          <Header
            pageName={"DECISIONS"}
            subHeader={"VOTE WITH ME"}
            className="onlyIndex"
          />
          <img src="/Icon/Waage-01.svg" width="150px" height="150px" />
        </section>
        <SignInScreen />
      </Main>
    </>
  );
}

const Main = styled.main`
  height: 100vh;
  background: linear-gradient(var(--fixed-background), var(--fixed-color-two));
  section {
    margin-bottom: 10vh;
    img {
      display: block;
      margin: 0 auto;
    }
  }
`;
