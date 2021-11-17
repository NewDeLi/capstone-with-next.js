import Head from "next/head";
import { Header } from "../components/Header";
import styled from "styled-components";
import Link from "next/link";

export default function Home({
  handleQuestion,
  handleRoomNameChange,
  handleRoomChange,
  username,
  roomName,
}) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header pageName={"Rooms"} />
      <StyledMain>
        <h1>Welcome {username}!</h1>
        <h2>
          Your Room-ID: <br />
          {roomName}
        </h2>

        <StyledForm onSubmit={handleRoomChange}>
          <label>
            <p>🤔</p>
            <input
              type="text"
              name="newQuestion"
              placeholder="add question here"
              onChange={handleQuestion}
            />
          </label>

          <StyledButton type="submit">Create</StyledButton>
        </StyledForm>
        <StyledForm onSubmit={handleRoomChange}>
          <label>
            <p>🤝</p>
            <input
              type="text"
              name="newRoom"
              placeholder="add room id here"
              onChange={handleRoomNameChange}
            />
          </label>
          <StyledButton type="submit">Join</StyledButton>
        </StyledForm>
      </StyledMain>
      <Link href="/">
        <a>
          <img src="/Icon/logout.svg" alt="home" width="50px" height="50px" />
        </a>
      </Link>
    </>
  );
}
const StyledMain = styled.main`
  background-color: white;
  padding: 3vh 1vw;
  h2 {
    border: 1px solid black;
    border-radius: 5px;
    padding: 2vh 0;
    margin: 6vh 6vw;
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
    width: 100%;
  }
`;
const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 1.5rem;
  width: 50%;
  margin: 1rem auto;
  background-color: lightgreen;
`;
