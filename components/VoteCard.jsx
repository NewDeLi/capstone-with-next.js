import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Header } from "./Header";
import ListItem from "./ListItem";

export default function VoteCard({ question, inputs }) {
  return (
    <div>
      <Head>
        <title>Vote</title>
      </Head>

      <Header pageName={"Vote"} />
      <StyledP>{question}</StyledP>

      {inputs.map((voteListItem) => {
        return (
          <ul key={voteListItem.id}>
            <ListItem>
              <button>👎</button>
              {voteListItem.value}
              <button>👍</button>
            </ListItem>
          </ul>
        );
      })}
    </div>
  );
}

const StyledP = styled.p`
  font-size: 1.5rem;
  border: 1px solid black;
  border-radius: 15px;
  margin: 1rem auto;
  padding: auto;
  background-color: white;
  height: 100%;
  width: 70%;
`;
