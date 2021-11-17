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
      <StyledP>{question}❓</StyledP>
    </div>
  );
}

const StyledP = styled.p`
  border: 1px solid black;
  border-radius: 15px;
  margin: 1rem 2rem;
  background-color: white;
`;
