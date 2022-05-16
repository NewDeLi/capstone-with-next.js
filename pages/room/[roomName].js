import React, { useState } from "react";
import Head from "next/head";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { OptionFormList } from "../../components/dbFirestore/OptionFormList";
import VoteCard from "../../components/dbFirestore/VoteCard";
import Result from "../../components/dbFirestore/Result";
import { v4 as uuidv4 } from "uuid";
import initFirebase from "../../firebase/config";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";
import { useUser } from "../../firebase/useUser";
import styled from "styled-components";
import { useRoomInputs } from "../../firebase/useQuestion";

initFirebase();

const AddCard = () => {
  const [inputs, setInputs] = useState([{ id: uuidv4(), value: "" }]);

  const [createOrVote, setCreateOrVote] = useState(true);
  const handleToggleBack = () => {
    setCreateOrVote(!createOrVote);
  };
  const [voteOrResult, setVoteOrResult] = useState(true);
  const handleToggleForward = () => setVoteOrResult(!voteOrResult);

  const { user, logout } = useUser();
  const { query } = useRouter();
  const roomID = query.roomName;

  const { roomInputsDb } = useRoomInputs(roomID);
  const [votes] = useCollectionData(firebase.firestore().collection("votes"));

  if (createOrVote) {
    return (
      <>
        <Head>
          <title>Create</title>
        </Head>

        <Main>
          <Section>
            <Header pageName={"CREATE"} subHeader={"Add Vote Card"} />
            <OptionFormList
              inputs={inputs}
              setInputs={setInputs}
              roomID={roomID}
              handleToggleBack={handleToggleBack}
              handleToggleForward={handleToggleForward}
            />
          </Section>
          <Navigation logout={logout} />
        </Main>
      </>
    );
  }
  return (
    <>
      {voteOrResult ? (
        <>
          <Head>
            <title>Vote</title>
          </Head>

          <Main>
            <Header
              pageName={"VOTE"}
              subHeader={"One Vote for each Card"}
              className="stickyHeader"
            />
            <Section>
              <VoteCard
                roomInputsDb={roomInputsDb}
                roomID={roomID}
                handleToggleForward={handleToggleForward}
                user={user}
                handleToggleBack={handleToggleBack}
              />
            </Section>
          </Main>
        </>
      ) : (
        <>
          <Head>
            <title>Results</title>
          </Head>

          <Main>
            <Header
              pageName={"RESULTS"}
              subHeader={"Check the Election Results"}
              className="stickyHeader"
            />
            <Section>
              <Result
                roomInputsDb={roomInputsDb}
                roomID={roomID}
                votes={votes}
                handleToggleForward={handleToggleForward}
                handleToggleBack={handleToggleBack}
              />
            </Section>
          </Main>
        </>
      )}
      <Navigation logout={logout} />
    </>
  );
};
export default AddCard;

const Main = styled.main`
  color: var(--fixed-color-one);
  text-align: center;
  min-height: 100vh;
  background: linear-gradient(var(--fixed-background), var(--fixed-color-two));
  margin: 0 auto 1vh auto;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .buttonGroup {
    width: 60vw;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0vh;
    color: var(--fixed-color-two);
    background-color: var(--fixed-background);
    border-radius: 5px;
    border: 1px solid var(--fixed-color-two);
    box-shadow: 0px 0px 20px 0px var(--fixed-color-two);
    button {
      all: unset;
      font-size: 2vh;
      width: 20vw;
      border-radius: 5px;
      margin: 1rem auto;
      letter-spacing: 2px;
      text-decoration: underline;
    }
  }

  form {
    margin: 10vh auto;
    @media (min-width: 600px) {
      display: flex;
      justify-content: center;
      gap: 10vw;
    }
  }

  .optionFormList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ul {
      padding: 0;
    }
    .inputListitem {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 0 auto 1rem auto;
      padding: 1vh;
      background: white;
      border-radius: 10px;
      border: 1px solid var(--fixed-color-one);
      box-shadow: 0px 0px 16px var(--fixed-background);
      input {
        height: 4vh;
        border: 1px solid var(--fixed-color-two);
        border-radius: 5px;
      }
      img {
        background-color: var(--fixed-color-two);
        border-radius: 100%;
      }
    }
    .screenReaderOnly {
      display: inline-block;
      border: 0;
      clip: rect(0 0 0 0);
      margin: -1px;
      overflow: hidden;
      padding: 0;
      width: 1px;
      font-size: 1px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--fixed-background);
    width: 80vw;
    max-width: 260px;
    min-height: 300px;
    border-radius: 20px;
    border: 1px solid var(--fixed-color-one);
    box-shadow: 0px 0px 16px var(--fixed-background);
    background-size: cover;
    background-position: center;
    margin: 0 auto 2rem auto;
  }

  .cardContent {
    width: 100%;
    height: 100%;
  }
  .cardContent li {
    margin: 1rem auto;
  }
  .voteAnimation {
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .app > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .row {
      flex-direction: row !important;
    }

    .row > * {
      margin: 5px;
    }

    h1 {
      color: var(--fixed-color-one);
    }

    .swipe {
      position: absolute;
    }

    .cardContainer {
      width: 90vw;
      max-width: 260px;
      min-height: 350px;
    }

    .infoText {
      width: 100%;
      height: 28px;
      justify-content: center;
      display: flex;
      color: #fff;
      animation-name: popup;
      animation-duration: 800ms;
    }

    .cardButtons {
      width: 100vw;
      max-width: 260px;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        all: unset;
        border: 5px solid var(--fixed-color-two);
        border-radius: 5px;
        font-size: 1.25rem;
        background-color: var(--fixed-color-two);
        color: var(--fixed-background);
        letter-spacing: 2px;
        margin: 1rem auto;
      }
    }
  }

  @keyframes popup {
    0% {
      transform: scale(1, 1);
    }
    10% {
      transform: scale(1.1, 1.1);
    }
    30% {
      transform: scale(0.9, 0.9);
    }
    50% {
      transform: scale(1, 1);
    }
    57% {
      transform: scale(1, 1);
    }
    64% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .barChart {
    width: 80vw;
    min-height: 100vh;
    margin: 5vh auto 10vh auto;
    border-radius: 10px;
    background: white;
    border-radius: 10px;
    border: 1px solid var(--fixed-color-one);
    box-shadow: 0px 0px 16px var(--fixed-background);
    label {
      font-size: 5vh;
    }
  }
`;
