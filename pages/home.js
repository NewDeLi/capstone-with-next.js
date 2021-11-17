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
        <h2>
          {username} Room-ID: <br />
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
      <StyledNav>
        <Link href="/">
          <a>
            <img src="/Icon/logout.svg" alt="home" width="50px" height="50px" />
          </a>
        </Link>
      </StyledNav>
    </>
  );
}
const StyledMain = styled.main`
  padding: 3vh 1vw;
  h2 {
    border: 1px solid black;
    border-radius: 5px;
    padding: 2vh 0;
    margin: 6vh 6vw;
    background-color: white;
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
    width: 50vw;
  }
`;
const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 1.5rem;
  width: 52%;
  margin: 1rem auto;
  background-color: orange;
  color: white;
`;
const StyledNav = styled.nav`
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 0 auto;
  img {
    border: 1px solid black;
    background-color: orange;
    border-radius: 10px;
    padding: 0.5rem;
    margin: 3rem 3.1rem;
  }
`;
