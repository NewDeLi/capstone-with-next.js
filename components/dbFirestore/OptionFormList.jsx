import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import QuestionFromDb from "./QuestionFromDb";
import firebase from "firebase/compat/app";

export const OptionFormList = ({
  inputs,
  setInputs,
  showCreate,
  setShowCreate,
  roomID,
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
            .collection(`${roomID}`)
            .doc(`${optionObject.id}`)
            .set({ optionObject: optionObject });
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
      <QuestionFromDb roomID={roomID} />
      <StyledSection>
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
      </StyledSection>
    </>
  );
};
const StyledSection = styled.section`
  height: 100vh;
  overflow-y: scroll;
  ul {
    padding: 0;
  }
`;
const StyledList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  input {
    height: 2rem;
    width: 50vw;
    border: 2.5px solid var(--fixed-color-two);
    border-radius: 5px;
  }
  img {
    background-color: var(--fixed-color-two);
    border-radius: 100%;
  }
`;
const StyledButton = styled.button`
  all: unset;
  border-radius: 5px;
  border: 5px solid var(--fixed-color-two);
  box-shadow: 0px 0px 8px var(--fixed-color-two);
  font-size: 1.25rem;
  width: 50vw;
  margin: 1rem auto;
  background-color: var(--fixed-color-two);
  color: var(--fixed-background);
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
