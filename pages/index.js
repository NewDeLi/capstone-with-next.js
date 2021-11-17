import Head from "next/head";
import { Header } from "../components/Header";
import styled from "styled-components";

export default function Login({ handleUserNameChange, handleLogin }) {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Header pageName={"Decisions"} />
      <StyledForm onSubmit={handleLogin}>
        <label>
          <p>👤</p>
          <input
            type="text"
            placeholder="enter your username..."
            onChange={handleUserNameChange}
          />
        </label>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  font-size: 3rem;
  margin: 20vh auto;
  padding: 5rem 0.5rem;
  input {
    height: 10vh;
    width: 60vw;
    border-radius: 5px;
  }
`;
const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 1.5rem;
  width: 70%;
  margin: 1rem auto;
  background-color: orange;
  color: white;
`;
