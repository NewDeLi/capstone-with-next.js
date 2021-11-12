import Head from "next/head";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import styled from "styled-components";

export default function Home({
  handleUserNameChange,
  handleQuestion,
  handleRoomNameChange,
  handleRoomChange,
}) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header pageName={"Decisionmaker"} />

      <StyledForm onSubmit={handleRoomChange}>
        <div>
          👤
          <input
            type="text"
            placeholder="enter your username..."
            onChange={handleUserNameChange}
          />
        </div>
        <div>
          🤔
          <input
            type="text"
            name="newQuestion"
            placeholder="add question here"
            onChange={handleQuestion}
          />
        </div>
        <StyledButton type="submit">Create</StyledButton>
      </StyledForm>
      <StyledForm onSubmit={handleRoomChange}>
        <div>
          👤
          <input
            type="text"
            placeholder="enter your username..."
            onChange={handleUserNameChange}
          />
        </div>
        <div>
          🤝
          <input
            type="text"
            name="newRoom"
            placeholder="add room id here"
            onChange={handleRoomNameChange}
          />
        </div>
        <StyledButton type="submit">Join</StyledButton>
      </StyledForm>
      <Navigation />
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 2rem;
  margin-top: 1rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    height: 3rem;
    border-radius: 5px;
  }
`;
const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 1.5rem;
  width: 50%;
  margin: 1rem auto;
`;
