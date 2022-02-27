import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import styled from "styled-components";

export default function QuestionFromDb() {
  const [roomQuestion, setRoomQuestion] = useState([{ id: "", value: "" }]);
  //fetch question data from firestore
  useEffect(() => {
    try {
      firebase
        .firestore()
        .collection("createRoom")
        .doc("question")
        .onSnapshot((doc) => {
          const fetchedQuestion = {
            id: doc.data().question[0].id, //unique key bug here?
            value: doc.data().question[0].value,
          };
          setRoomQuestion([fetchedQuestion]);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <StyledSection>
      {roomQuestion.map((single) => {
        return (
          <p key={single.id}>
            <span>ROOM</span>
            <a>{single.id}</a>
            <span>{single.value}</span>
          </p>
        );
      })}
    </StyledSection>
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
  a {
    color: #56a8e1;
  }
`;
