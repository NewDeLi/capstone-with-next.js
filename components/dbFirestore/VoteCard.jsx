import React, { useState } from "react";
import QuestionFromDb from "./QuestionFromDb";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import styled from "styled-components";
import ListItem from "../ListItem";

export default function VoteCard({
  optionsCollection,
  updateCountYes,
  updateCountNo,
  roomID,
  showCreate,
  setShowCreate,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const boxClassName = isClicked ? "opacityLow" : "opacityHigh";
  const handleToggelBack = () => {
    setShowCreate(!showCreate);
  };
  const handleToggelClass = () => {
    setIsClicked(!isClicked);
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
    handleToggelClass();
  };

  const increaseCountNo = (id, count) => {
    const newCount = count + 1;
    updateCountNo(id, newCount);
    sendData2(id);
    handleToggelClass();
  };

  return (
    <>
      <QuestionFromDb roomID={roomID} />

      <Section>
        <ul>
          <span>
            <a onClick={handleToggelBack}>
              <img
                src="/icon/reply.svg"
                alt="go back to create section"
                height="25px"
                width="25px"
              />
              Create
            </a>
          </span>
          {optionsCollection?.map((option) => {
            if (option.id == option.id) {
              //note: option.id is equal firebase.firestore().collection().doc().id
              return (
                <>
                  <ListItem></ListItem>
                  <li key={option.id}>
                    <button
                      onClick={() => {
                        console.log(isClicked);
                        return increaseCountNo(option.id, option.countNo);
                      }}
                    >
                      <img
                        src="/Icon/thumbsDown.svg"
                        height="25px"
                        width="25px"
                        className={boxClassName}
                        onClick={() => {
                          console.log(isClicked);
                          return increaseCountNo(option.id, option.countNo);
                        }}
                      />
                    </button>
                    <p>{option.value}</p>
                    <button
                      onClick={() =>
                        increaseCountYes(option.id, option.countYes)
                      }
                    >
                      <img
                        src="/Icon/thumbsUp.svg"
                        height="25px"
                        width="25px"
                        className={boxClassName}
                      />
                    </button>
                  </li>
                </>
              );
            }
          })}
        </ul>
      </Section>
    </>
  );
}
const Section = styled.section`
  span {
    margin: 0 auto 2rem auto;
    display: inline-block;
  }
  ul {
    padding: 0;
  }
  li {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    max-width: 80vw;
    margin: 1rem auto;
    padding: 1vh 1vw;
    background-color: var(--fixed-background);
    border: 1.5px solid var(--fixed-color-two);
    border-radius: 15px;
  }
  img {
    &.opacityLow {
      opacity: 0.5;
    }
    &.opacityHigh {
      opacity: 1;
    }
  }
  button {
    all: unset;
  }
`;
