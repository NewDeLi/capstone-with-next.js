import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Head from "next/head";
import { Header } from "../Header";
import QuestionFromDb from "./QuestionFromDb";
import firebase from "firebase/compat/app";

export const OptionFormList = ({
  inputs,
  setInputs,
  showCreate,
  setShowCreate,
}) => {
  //handle value changes
  const handleToggle = () => {
    setShowCreate(!showCreate);
  };

  const sendInputValueToDb = async (id) => {
    try {
      await inputs.map((optionObject) => {
        if (optionObject.id == id) {
          firebase
            .firestore()
            .collection("optionObjects")
            .doc(`${optionObject.id}`)
            .set({ optionObject });
        }
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleOnChange = (event, id) => {
    event.preventDefault();
    const value = event.target.value;
    const foundInput = inputs.find((input) => input.id === id);
    foundInput.value = value;
    setInputs([...inputs]);
    sendInputValueToDb(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleToggle();
  };

  //handle form changes
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
      <QuestionFromDb />
      <form onSubmit={handleSubmit}>
        <ul>
          {inputs.map((input) => {
            return (
              <StyledList key={input.id}>
                <img
                  src="/Icon/remove_white.svg"
                  alt="delete option"
                  width="25px"
                  height="25px"
                  onClick={() => handleRemove(input.id)}
                />
                <label>
                  <ScreenReaderOnly>New option</ScreenReaderOnly>
                  <input
                    type="text"
                    placeholder="write Option here"
                    onChange={(event) => handleOnChange(event, input.id)}
                    value={input.value}
                  />
                </label>
                <img
                  src="/Icon/add_white.svg"
                  alt="add option"
                  width="25px"
                  height="25px"
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

const StyledList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem;
  font-size: 1.5rem;
  input {
    height: 2rem;
    width: 60vw;
    padding: 1vh auto;
    border: 2.5px solid #606060;
    border-radius: 5px;
  }
  img {
    background-color: #56a8e1;
    border-radius: 100%;
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
