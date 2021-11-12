import Head from "next/head";
import { Header } from "../components/Header";
import styled from "styled-components";

export default function Home({
  handleQuestion,
  handleRoomNameChange,
    handleRoomChange,
    username,
  roomName
}) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header pageName={"Decisionmaker"} />
      <StyledMain>
        <h1>Welcome {username}!</h1>
        <h2>
          Your Room-ID: <br />
          {roomName}
        </h2>

        <StyledForm onSubmit={handleRoomChange}>
          🤔
          <input
            type="text"
            name="newQuestion"
            placeholder="add question here"
            onChange={handleQuestion}
          />
          <StyledButton type="submit">Create</StyledButton>
        </StyledForm>
        <StyledForm onSubmit={handleRoomChange}>
          🤝
          <input
            type="text"
            name="newRoom"
            placeholder="add room id here"
            onChange={handleRoomNameChange}
          />
          <StyledButton type="submit">Join</StyledButton>
        </StyledForm>
      </StyledMain>
    </>
  );
}
const StyledMain = styled.main`
  background-color: white;
  padding: 5rem 0.5rem;
  h2 {
    border: 1px solid black;
    border-radius: 5px;
    padding: 2vh 0;
    margin: 6vh 6vw 6vh 6vw;
    background-color: red;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 2rem;
  input {
    height: 3rem;
    border-radius: 5px;
    width: 50%;
  }
`;
const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 1.5rem;
  width: 50%;
  margin: 1rem auto;
  background-color: lightgreen;
`;
