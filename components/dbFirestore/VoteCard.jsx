import React from "react";
import ListItem from "../ListItem";
import QuestionFromDb from "./QuestionFromDb";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function VoteCard({
  optionsCollection,
  updateCountYes,
  updateCountNo,
  roomID,
  showCreate,
  setShowCreate,
}) {
  const handleToggelBack = () => {
    setShowCreate(!showCreate);
  };

  const sendData2 = (id) => {
    try {
      optionsCollection?.map((optionObject) => {
        if (optionObject.id == id) {
          firebase
            .firestore()
            .collection(`${roomID}`)
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
      <a onClick={handleToggelBack}>toggelback</a>
    </>
  );
}
