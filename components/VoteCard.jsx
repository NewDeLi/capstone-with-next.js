import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Header } from "./Header";
import ListItem from "./ListItem";

export default function VoteCard({ roomName, inputs, setInputs }) {
  const handleVotePlus = (id) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === id) {
          return { ...input, countYes: input.countYes + 1 };
        } else {
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
    <>
      <Head>
        <title>Vote</title>
      </Head>

      <Header pageName={"VOTE"} />
      <StyledP>
        <span>{roomName}</span>
      </StyledP>

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
    </>
  );
}

const StyledP = styled.p`
  border: 4px solid #56a8e1;
  border-radius: 25px;
  color: #606060;
  background-color: white;
  width: 60%;
  margin: auto;
  margin-bottom: 7.5vh;
  margin-top: 0;
  padding: 1vh 1vw;
`;
