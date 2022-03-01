import React from "react";
import router from "next/router";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function CreateRoom({
  questionCollection,
  updateQuestionCollection,
  user,
}) {
  //delete options data from firestore
  const [options] = useCollectionData(
    firebase.firestore().collection(`${user.id}`)
  );

  const optionsCollection = options?.map((optionList) => {
    return optionList.optionObject;
  });

  const deleteDocsFromDb = () => {
    try {
      optionsCollection?.map((optionObject) => {
        firebase
          .firestore()
          .collection(`${user.id}`)
          .doc(`${optionObject.id}`)
          .delete();
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  //write question data to firestore database
  const sendData = () => {
    try {
      questionCollection.map((questionObject) => {
        if (questionObject.id == user.id) {
          firebase
            .firestore()
            .collection("createRoom")
            .doc(`${user.id}`)
            .set({
              question: { id: user.id, value: questionObject.value },
            })
            .then(alert("data send to cloud"));
        }
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  //read question data id from firestore database and add to dynamic routing
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection("createRoom")
        .doc(`${user.id}`)
        .onSnapshot(function (doc) {
          const roomName = doc.data()?.question.id;
          router.push(`/room/${roomName}?id=${roomName}`);
        });
      alert("data fetched from firestore");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          sendData();
          readData();
        }}
      >
        <label>
          <img src="/Icon/pencil-01.svg" width="25px" height="25px" />
          <input
            type="text"
            name="createRoom"
            placeholder="room id: question here"
            onChange={(event) =>
              updateQuestionCollection(user.id, event.target.value)
            }
          />
        </label>
        <StyledButton type="submit" onClick={deleteDocsFromDb}>
          Create
        </StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3vh auto;
  input {
    height: 2rem;
    width: 60vw;
    border: 2.5px solid #606060;
    border-radius: 5px;
  }
`;

const StyledButton = styled.button`
  all: unset;
  border-radius: 15px;
  font-size: 1.5rem;
  width: 60vw;
  margin: 1rem auto;
  background-color: #56a8e1;
  color: white;
  letter-spacing: 2px;
`;
