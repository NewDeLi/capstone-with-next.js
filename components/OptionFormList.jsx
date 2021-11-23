import { v4 as uuidv4 } from "uuid";
import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Header } from "./Header";

export const OptionFormList = ({
  question,
  inputs,
  setInputs,
  showCreate,
  setShowCreate,
}) => {
  const handleToggle = () => {
    setShowCreate(!showCreate);
  };
  const handleOnChange = (event, id) => {
    const value = event.target.value;
    const foundInput = inputs.find((input) => input.id === id);
    foundInput.value = value;
    setInputs([...inputs]);
  };
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
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs([...inputs]);
    handleToggle();
  };
  return (
    <>
      <Head>
        <title>Create</title>
      </Head>

      <Header pageName={"CREATE"} />
      <StyledP>{question}</StyledP>
      <StyledForm onSubmit={handleSubmit}>
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
                    name="newVoteItem"
                    placeholder="write option here"
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
      </StyledForm>
    </>
  );
};
const StyledP = styled.p`
  border: 5px solid #56a8e1;
  border-radius: 25px;
  color: #606060;
  background-color: white;
  width: 60%;
  margin: auto;
  margin-bottom: 7.5vh;
  margin-top: 0;
  padding: 1vh 1vw;
`;
const StyledForm = styled.form`
  overflow: auto;
  height: 60vh;
  &:hover,
  &:active {
    visibility: visible;
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
    padding: 1vh 15vw;
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
