import React, { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import { Header } from "../Header";
import ListItem from "../ListItem";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function VoteCard({
  inputs,
  setInputs,
  roomQuestion,
  setRoomQuestion,
}) {
  //fetch question data from firestore
  useEffect(() => {
    try {
      firebase
        .firestore()
        .collection("createRoom")
        .doc("room_id+question")
        .onSnapshot((doc) => {
          console.log(doc.data().question[0].value);
          const fetchedQuestion = {
            id: doc.data().question[0].id,
            value: doc.data().question[0].value,
          };
          setRoomQuestion([fetchedQuestion]);
          console.log(roomQuestion + 123);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
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

      <StyledSection>
        {roomQuestion.map((single, index) => {
          return (
            <>
              <p key={index}>
                <span className="highlight">room-id:{single.id}</span>
                <span>question:{single.value}</span>
              </p>
            </>
          );
        })}
      </StyledSection>
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

const StyledSection = styled.section`
  border: 4px solid #56a8e1;
  border-radius: 25px;
  color: #606060;
  background-color: white;
  width: 60%;
  margin: auto;
  margin-bottom: 7.5vh;
  margin-top: 0;
  padding: 1vh 1vw;
  span {
    display: block;
  }
  .highlight {
    color: #56a8e1;
  }
`;
