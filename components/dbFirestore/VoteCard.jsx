import React from "react";
import Head from "next/head";
import { Header } from "../Header";
import ListItem from "../ListItem";
import QuestionFromDb from "./QuestionFromDb";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default function VoteCard({
  optionsCollection,
  updateCountYes,
  updateCountNo,
}) {
  //increase count with incrementCount/decreaseCount api
  const sendData2 = (id) => {
    try {
      optionsCollection.map((optionObject) => {
        if (optionObject.id == id) {
          firebase
            .firestore()
            .collection("optionObjects")
            .doc(`${optionObject.id}`)
            .set({ optionObject })
        }
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const increaseCountYes = async (id) => {
    const response = await fetch(
      `/api/increaseCountYes?id=${encodeURIComponent(id)}`
    );
    const fetched = await response.json();
    updateCountYes(id, fetched.total);
    sendData2(id);
  };

  const increaseCountNo = async (id) => {
    const response = await fetch(
      `/api/increaseCountNo?id=${encodeURIComponent(id)}`
    );
    const fetched = await response.json();
    updateCountNo(id, fetched.total);
    sendData2(id);
  };

  return (
    <>
      <Head>
        <title>Vote</title>
      </Head>
      <Header pageName={"VOTE"} />
      <QuestionFromDb />
      <ul>
        {optionsCollection?.map((option) => {
          return (
            <ListItem key={option.id}>
              <button onClick={() => increaseCountNo(option.id)}>
                <img src="/Icon/thumbsDown.svg" height="25px" width="25px" />
              </button>
              <p>{option.value}</p>
              <button onClick={() => increaseCountYes(option.id)}>
                <img src="/Icon/thumbsUp.svg" height="25px" width="25px" />
              </button>
            </ListItem>
          );
        })}
      </ul>
    </>
  );
}
