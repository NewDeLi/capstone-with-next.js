import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Header } from "./Header";
import ListItem from "./ListItem";
import Result from "./Result";

export default function VoteCard({ question, inputs, setInputs }) {
  const handleVotePlus = (id) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === id) {
          // Create a *new* object with changes
          return { ...input, countYes: input.countYes + 1 };
        } else {
          // No changes
          return input;
        }
      })
    );
    console.log(inputs);
  };
  const handleVoteMinus = (id) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === id) {
          return { ...input, countNo: input.countNo + 1 };
        } else {
          return input;
        }
      })
    );
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
        {inputs.map(({ id, value }) => {
          return (
            <ListItem key={id}>
              <button onClick={() => handleVoteMinus(id)}>
                <img src="/Icon/thumbsDown.svg" height="25px" width="25px" />
              </button>
              <p>{value}</p>
              <button onClick={() => handleVotePlus(id)}>
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
