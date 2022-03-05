import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import styled from "styled-components";
import { useQuestion } from "../../firebase/useQuestion";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    <>
      {questionCollection?.map((questionObject) => {
        if (questionObject.id == roomID) {
          return (
            <StyledSection key={questionObject.id}>
              <p>
                <span>
                  ROOM-ID {questionObject.id}{" "}
                  <CopyToClipboard text={questionObject.id}>
                    <img
                      src="/Icon/copy.svg"
                      alt="copy room id"
                      onClick={() => alert("copied")}
                    />
                  </CopyToClipboard>
                </span>
              </p>

              <p>{questionObject.value}?</p>
            </StyledSection>
          );
        }
      })}
    </>
  );
}

const StyledSection = styled.section`
  border: 1.5px solid var(--fixed-color-one);
  border-radius: 25px;
  color: var(--fixed-color-one);
  background-color: var(--fixed-background);
  width: 60vw;
  margin: 0 auto;
  padding: 1vh 5vw;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fixed-color-two);
  }
`;
