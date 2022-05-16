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
            const fetchedQuestion = doc.data()?.value;
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
              <span>
                Room: {questionObject?.value}
                <CopyToClipboard text={questionObject.id}>
                  <img
                    src="/Icon/copy.svg"
                    alt="copy room id"
                    onClick={() => alert("copied")}
                  />
                </CopyToClipboard>
              </span>
            </StyledSection>
          );
        }
      })}
    </>
  );
}

const StyledSection = styled.p`
  font-size: 2vh;
  margin: 0 auto;
  padding: 1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: var(--fixed-color-one);
  }
`;
