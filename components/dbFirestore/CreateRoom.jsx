import React from "react";
import router from "next/router";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useUser } from "../../firebase/useUser";

export default function CreateRoom({ question, setQuestion }) {
  const { user } = useUser();
  //write question data to firestore database
  const sendData = async () => {
    try {
      await firebase
        .firestore()
        .collection("createRoom")
        .doc("question")
        .set({
          question: [{ id: user.id, value: `${question}` }],
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
        .doc("question")
        .onSnapshot(function (doc) {
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
          <img src="/Icon/pencil-01.svg" width="25px" height="25px" />
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
