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
                <img src="/Icon/thumbsDown.svg" height="25px" width="25px" />
              </button>
              <p>{voteListItem.value}</p>
              <button onClick={() => handleVotePlus(voteListItem.id)}>
                <img src="/Icon/thumbsUp.svg" height="25px" width="25px" />
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
  border: 5px solid #56a8e1;
  border-radius: 25px;
  max-width: 80%;
  margin: 1rem auto;
  padding: 1vh 1vw;
  background-color: white;
`;
