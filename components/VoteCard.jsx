import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Header } from "./Header";

export default function VoteCard({ question }) {
  return (
    <div>
      <Head>
        <title>Vote</title>
      </Head>

      <Header pageName={"Vote"} />
      <StyledH3>{question}❓</StyledH3>
      <li>option 1</li>
      <li>option 2</li>
      <li>option 3</li>
    </div>
  );
}

const StyledH3 = styled.h3`
  border: 1px solid black;
  border-radius: 15px;
  margin: 1rem 2rem;
  background-color: white;
`;
