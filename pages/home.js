import Head from "next/head";
import { Header } from "../components/Header";
import styled from "styled-components";
import CreateRoom from "../components/dbFirestore/CreateRoom";
import JoinRoom from "../components/JoinRoom";
import { useUser } from "../firebase/useUser";
import { useQuestion } from "../firebase/useQuestion";
import { Navigation } from "../components/Navigation";

export default function Home({}) {
  const { questionCollection, updateQuestionCollection } = useQuestion();
  const { user, logout } = useUser();
  console.log(user.email)
  if (user) {
    return (
      <>
        <Head>
          <title>Home</title>
        </Head>
        <Header pageName={"Rooms"} subHeader={`Create/Join a Room`} />
        <StyledMain>
          <section>
            <span>Welcome </span>
            <span className="colorOnSpan">
              {user.email}
              {user.profilePic ? (
                <image src={user.profilePic} height={100} width={100}></image>
              ) : (
                <p>No profile pic</p>
              )}
            </span>
          </section>
          <CreateRoom
            questionCollection={questionCollection}
            updateQuestionCollection={updateQuestionCollection}
            user={user}
          />
          <JoinRoom />
        </StyledMain>
        <Navigation logout={logout} />
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
          Welcome <span>no user</span>!
        </p>
        <CreateRoom />
        <JoinRoom />
      </StyledMain>
      <Navigation />
    </>
  );
}
const StyledMain = styled.main`
  color: var(--fixed-color-one);
  text-align: center;
  height: 100vh;
  section {
    border: 1px solid var(--fixed-color-one);
    box-shadow: 0px 0px 16px white;
    border-radius: 25px;
    background-color: white;
    width: 60%;
    margin: 1vh auto;
    padding: 1vh 1vw;
  }
  .colorOnSpan {
    color: var(--fixed-color-two);
  }
  img {
    display: block;
    width: 100%;
    margin-bottom: 1vh;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3vh auto;
  }
  input {
    height: 4vh;
    width: 50vw;
    border: 1px solid var(--fixed-color-two);
    border-radius: 5px;
  }
  button {
    all: unset;
    border-radius: 5px;
    font-size: 1.25rem;
    width: 50vw;
    margin: 1rem auto;
    background-color: var(--fixed-color-two);
    color: white;
    letter-spacing: 2px;
  }
`;
