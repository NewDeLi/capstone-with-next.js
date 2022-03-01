import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import styled from "styled-components";
import { useQuestion } from "../../firebase/useQuestion";


export default function QuestionFromDb({ roomID }) {
  const { questionCollection, updateQuestionCollection } = useQuestion();

  useEffect(() => {
    try {
      questionCollection?.map((questionObject) => {
        firebase
          .firestore()
          .collection("createRoom")
          .doc(`${questionObject.id}`)
          .onSnapshot((doc) => {
            const fetchedQuestion = doc.data()?.question.value;
            updateQuestionCollection(questionObject.id, fetchedQuestion);
          });
      });
    } catch (error) {
      console.log(error);
    }
  }, [roomID]);
  return (
    <StyledSection>
      {questionCollection?.map((questionObject) => {
        if (questionObject.id == roomID) {
          return (
            <p key={questionObject.id}>
              <span>ROOM</span>
              <a>{questionObject.id}</a>
              <span>{questionObject.value}</span>
            </p>
          );
        }
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
