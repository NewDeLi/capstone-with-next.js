import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import styled from "styled-components";

export default function Login({ handleUserNameChange, handleLogin }) {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Header pageName={"DECISIONS"} onlyIndex={"VOTE WITH ME"} />
      <img src="/Icon/Waage-01.svg" width="150px" height="150px" />
      <StyledForm onSubmit={handleLogin}>
        <label>
          <p>
            <img src="/Icon/Username.svg" width="30px" height="30px" />
          </p>
          <input
            type="text"
            placeholder="enter your username..."
            onChange={handleUserNameChange}
          />
        </label>
        <StyledButton type="submit">Start</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 13vh;
  input {
    padding: 1vh 5vw;
    border-radius: 15px;
    border: 2.5px solid #606060;
    margin-bottom: 13vh;
  }
`;
const StyledButton = styled.button`
  all: unset;
  border-radius: 25px;
  font-size: 2rem;
  padding: 1vh 15vw;
  margin: 1rem auto;
  background-color: #56a8e1;
  color: white;
  letter-spacing: 2px;
`;
