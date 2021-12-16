import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Head from "next/head";
import { Header } from "../Header";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export const OptionFormList = ({
  inputs,
  setInputs,
  showCreate,
  setShowCreate,
  roomQuestion,
  setRoomQuestion,
}) => {
  //fetch question data from firestore
  useEffect(() => {
    try {
      firebase
        .firestore()
        .collection("createRoom")
        .doc("room_id+question")
        .onSnapshot((doc) => {
          console.log(doc.data().question[0].value);
          const fetchedQuestion = {
            id: doc.data().question[0].id,//unique key bug here?
            value: doc.data().question[0].value,
          };
          setRoomQuestion([fetchedQuestion]);
          console.log(fetchedQuestion);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //handle conditional rendering and input value changes
  const handleToggle = () => {
    setShowCreate(!showCreate);
  };
  const handleOnChange = (event, id) => {
    event.preventDefault();
    const value = event.target.value;
    const foundInput = inputs.find((input) => input.id === id);
    foundInput.value = value;
    setInputs([...inputs]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs([...inputs]);
    handleToggle();
  };

  //handle number of input fields with create and remove
  const handleCreate = () => {
    const id = uuidv4();
    const newOptionInput = {
      id,
      value: "",
      countYes: 0,
      countNo: 0,
    };
    setInputs([...inputs, newOptionInput]);
  };
  const handleRemove = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  return (
    <>
      <Head>
        <title>Create</title>
      </Head>

      <Header pageName={"CREATE"} />
      <StyledSection>
        {roomQuestion.map((single, index) => {
          return (
            <>
              <p key={index}>
                <span className="highlight">room-id:{single.id}</span>
                <span>question:{single.value}</span>
              </p>
            </>
          );
        })}
      </StyledSection>
      <form onSubmit={handleSubmit}>
        <ul>
          {inputs.map((input) => {
            return (
              <StyledList key={input.id}>
                <img
                  src="/Icon/remove_white.svg"
                  alt="delete option"
                  width="35px"
                  height="35px"
                  onClick={() => handleRemove(input.id)}
                />
                <label>
                  <ScreenReaderOnly>New option</ScreenReaderOnly>
                  <input
                    type="text"
                    placeholder="write Question here"
                    onChange={(event) => handleOnChange(event, input.id)}
                    value={input.value}
                  />
                </label>
                <img
                  src="/Icon/add_white.svg"
                  alt="add option"
                  width="35px"
                  height="35px"
                  onClick={handleCreate}
                />
              </StyledList>
            );
          })}
        </ul>
        <StyledButton type="submit">Vote</StyledButton>
      </form>
    </>
  );
};
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
  .highlight {
    color: #56a8e1;
  }
`;

const StyledList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem;
  font-size: 1.5rem;
  input {
    height: 3rem;
    width: 60vw;
    padding: 1vh auto;
    border: 2.5px solid #606060;
    border-radius: 15px;
  }
  img {
    background-color: #56a8e1;
    border-radius: 100%;
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
const ScreenReaderOnly = styled.span`
  display: inline-block;
  border: 0;
  clip: rect(0 0 0 0);
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
  font-size: 1px;
`;
/*bug to fix when I have time: if there is only one input and the
user presses minus there is no way to create a new input*/
