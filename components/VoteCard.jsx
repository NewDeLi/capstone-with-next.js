import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Header } from "./Header";
import ListItem from "./ListItem";
import Result from "./Result";

export default function VoteCard({ question, inputs, setInputs }) {
  const handleVotePlus = (id) => {
    const foundInput = inputs.find((input) => input.id === id);
    foundInput.countYes++;
    setInputs([...inputs]);
    console.log(inputs);
  };
  const handleVoteMinus = (id) => {
    const foundInput = inputs.find((input) => input.id === id);
    foundInput.countNo++;
    setInputs([...inputs]);
    console.log(inputs);
  };
  return (
    <div>
      <Head>
        <title>Vote</title>
      </Head>

      <Header pageName={"Vote"} />
      <StyledP>{question}</StyledP>
      <ul>
        {inputs.map((voteListItem) => {
          return (
            <ListItem key={voteListItem.id}>
              <button onClick={() => handleVoteMinus(voteListItem.id)}>
                👎
              </button>
              <p>{voteListItem.value}</p>
              <button onClick={() => handleVotePlus(voteListItem.id)}>
                👍
              </button>
            </ListItem>
          );
        })}
      </ul>
      <Result inputs={inputs} />
    </div>
  );
}

const StyledP = styled.p`
  border: 1px solid black;
  border-radius: 50%;
  margin: 1rem auto;
  padding: 1rem;
  background-color: white;
  height: 100%;
  width: 70%;
`;
