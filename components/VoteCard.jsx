import React from "react";
import Head from "next/head";
import { Header } from "./Header";
import ListItem from "./ListItem";
import QuestionFromDb from "./dbFirestore/QuestionFromDb";

export default function VoteCard({ inputs, setInputs }) {
  //handle vote mode
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
      <QuestionFromDb />
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
