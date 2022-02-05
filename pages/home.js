import Head from "next/head";
import { Header } from "../components/Header";
import styled from "styled-components";
import Link from "next/link";
import CreateRoom from "../components/dbFirestore/CreateRoom";
import JoinRoom from "../components/JoinRoom";
import Counter from "../components/dbRealtime/Counter";
import { useUser } from "../firebase/useUser";
import { useState } from "react";

export default function Home({}) {
  const [question, setQuestion] = useState([{ id: "", value: "" }]);
  const { user, logout } = useUser();
  if (user) {
    return (
      <>
        <Head>
          <title>Home</title>
        </Head>
        <Header pageName={"Rooms"} />
        <StyledMain>
          <Counter id={user.id} />
          <section>
            Welcome
            <span>
              {user.email}
              {user.profilePic ? (
                <image src={user.profilePic} height={100} width={100}></image>
              ) : (
                <p>No profile pic</p>
              )}
            </span>
            <br /> Create or join a room.
          </section>
          <CreateRoom question={question} setQuestion={setQuestion} />
          <JoinRoom />
        </StyledMain>
        <StyledNav>
          <Link href="/" onClick={() => logout()}>
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
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header pageName={"Rooms"} />
      <StyledMain>
        <p>
          Welcome <span>no user</span>
          !
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
  section {
    border: 5px solid #56a8e1;
    border-radius: 25px;
    background-color: white;
    width: 60%;
    margin: auto;
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
