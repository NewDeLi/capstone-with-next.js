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
  roomID,
}) {
  //increase count with incrementCount/decreaseCount api
  const sendData2 = (id) => {
    try {
      optionsCollection?.map((optionObject) => {
        if (optionObject.id == id) {
          firebase
            .firestore()
            .collection(`${roomID}`) //TO-DO put in room-id in here and reset code from github votecard, result, roomname, optionformlist!!!!!
            .doc(`${optionObject.id}`)
            .update({ optionObject: optionObject });
        }
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const increaseCountYes = (id, count) => {
    const newCount = count + 1;
    updateCountYes(id, newCount);
    sendData2(id);
  };

  const increaseCountNo = (id, count) => {
    const newCount = count + 1;
    updateCountNo(id, newCount);
    sendData2(id);
  };

  return (
    <>
      <Head>
        <title>Vote</title>
      </Head>
      <Header pageName={"VOTE"} />

      <QuestionFromDb roomID={roomID} />

      <ul>
        {optionsCollection?.map((option) => {
          if (option.id == option.id) {
            //note: option.id is equal firebase.firestore().collection().doc().id
            return (
              <ListItem key={option.id}>
                <button
                  onClick={() => increaseCountNo(option.id, option.countNo)}
                >
                  <img src="/Icon/thumbsDown.svg" height="25px" width="25px" />
                </button>
                <p>{option.value}</p>
                <button
                  onClick={() => increaseCountYes(option.id, option.countYes)}
                >
                  <img src="/Icon/thumbsUp.svg" height="25px" width="25px" />
                </button>
              </ListItem>
            );
          }
        })}
      </ul>
    </>
  );
}
