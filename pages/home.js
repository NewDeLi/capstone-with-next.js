import Head from "next/head";
import { Header } from "../components/Header";
import styled from "styled-components";
import Link from "next/link";
import router from "next/router";

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
        <p>
          {username} Room-ID: <br />
          <span>{roomName}</span>
        </p>

        <StyledForm
          onSubmit={async (event) => {
            event.preventDefault();
            // use fetch to create new room document (in firebase)
            // const response = await fetch("/api/room", {
            //   method: "POST",
            //   body: JSON.stringify({ question: newQuestion }),
            //   headers: { "Content-Type": "application/json" },
            // });
            // const responseData = await response.json();
            const roomName = "newRandomRoomName"; // responseData.insertedId
            router.push(`/room/${roomName}`);
          }}
        >
          <label>
            <img src="/Icon/pencil-01.svg" width="30px" height="30px" />
            <input
              type="text"
              name="newQuestion"
              placeholder="add question here"
              onChange={handleQuestion}
            />
          </label>
          <StyledButton type="submit">Create</StyledButton>
        </StyledForm>
        <StyledForm
          onSubmit={(event) => {
            event.preventDefault();
            const roomName = event.target.elements.newRoom.value;
            router.push(`/room/${roomName}`);
          }}
        >
          <label>
            <img src="/Icon/hände.svg" width="30px" height="30px" />
            <input type="text" name="newRoom" placeholder="add room id here" />
          </label>
          <StyledButton type="submit">Join</StyledButton>
        </StyledForm>
      </StyledMain>
      <StyledNav>
        <Link href="/">
          <a>
            <img
              src="/Icon/Logout-01.svg"
              alt="home"
              width="50px"
              height="50px"
            />
          </a>
        </Link>
      </StyledNav>
    </>
  );
}
const StyledMain = styled.main`
  color: #606060;
  p {
    border: 5px solid #56a8e1;
    border-radius: 25px;
    background-color: white;
    width: 60%;
    margin: auto;
    margin-bottom: 7.5vh;
    margin-top: 0;
    padding: 1vh 1vw;
  }
  span {
    color: #56a8e1;
  }
  img {
    display: block;
    width: 100%;
    margin-bottom: 1vh;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3vh auto;
  input {
    height: 3rem;
    width: 60vw;
    padding: 1vh 15vw;
    border: 2.5px solid #606060;
    border-radius: 15px;
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
const StyledNav = styled.nav`
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 2.5vh auto;
`;
