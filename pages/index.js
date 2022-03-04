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
      <Body>
        <Header
          pageName={"DECISIONS"}
          subHeader={"VOTE WITH ME"}
          className="onlyIndex"
        />
        <main>
          <section>
            <img src="/Icon/Waage-01.svg" width="150px" height="150px" />
          </section>
          <SignInScreen />
        </main>
      </Body>
    </>
  );
}

const Body = styled.body`
  background: var(--fixed-background);
  section {
    margin-bottom: 10vh;
    img {
      display: block;
      margin: 0 auto;
    }
  }
`;
