import Head from "next/head";
import { Header } from "../components/Header";
import styled from "styled-components";
import Link from "next/link";
import CreateRoom from "../components/dbFirestore/CreateRoom";
import JoinRoom from "../components/JoinRoom";
import firebase from "../firebase/config.js";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../utils/localStorage";

firebase;

export default function Home({ username, roomName }) {
  const [question, setQuestion] = useLocalStorage([
    { id: uuidv4(), value: "" },
  ]);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header pageName={"Rooms"} />
      <StyledMain>
        <p>
          Welcome <span>{username}</span>!
          <br /> Create or join a room.
        </p>
        <CreateRoom question={question} setQuestion={setQuestion} />
        <JoinRoom />
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

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 2.5vh auto;
`;
