import React from "react";
import router from "next/router";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { v4 as uuidv4 } from "uuid";

export default function CreateRoom({ question, setQuestion }) {
  //write question data to firestore database
  const sendData = async () => {
    try {
      await firebase
        .firestore()
        .collection("createRoom")
        .doc("room_id+question")
        .set({
          question: [{ id: uuidv4(), value: question }],
        })
        .then(alert("data send to cloud"));
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
        .doc("room_id+question")
        .onSnapshot(function (doc) {
          console.log(doc.data().question[0].id);
          const roomName = doc.data().question[0].id;
          router.push(`/room/${roomName}`);
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
          <img src="/Icon/pencil-01.svg" width="30px" height="30px" />
          <input
            type="text"
            name="createRoom"
            placeholder="room id: question here"
            onChange={(event) => setQuestion(event.target.value)}
          />
        </label>
        <StyledButton type="submit">Create</StyledButton>
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
    height: 3rem;
    width: 60vw;
    padding: 1vh auto;
    border: 2.5px solid #606060;
    border-radius: 15px;
  }
`;

const StyledButton = styled.button`
  all: unset;
  border-radius: 25px;
  font-size: 2rem;
  width: 50%;
  padding: 1vh 5vw;
  margin: 1rem auto;
  background-color: #56a8e1;
  color: white;
  letter-spacing: 2px;
`;
