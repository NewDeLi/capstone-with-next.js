import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import firebase from "../firebase/config.js";
import SignInScreen from "../components/Authentication/SignInScreen";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { async } from "@firebase/util";
import styled from "styled-components";

firebase;

export default function Index({}) {
  /*const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const firestoreDB = firebase.firestore();
  const [votes, votesLoading] = useCollection(
    firestoreDB.collection("votes"),
    {}
  );
  if (!votesLoading && votes) {
    votes.docs.map((doc) => console.log(doc.data()));
  }*/
  /*create document function
  const addVoteDocument = async (vote) => {
    await firestoreDB.collection("votes").doc(user.uid).set({
      vote,
    });
  };*/
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header pageName={"DECISIONS"} onlyIndex={"VOTE WITH ME"} />
      <StyleSection>
        <img src="/Icon/Waage-01.svg" width="150px" height="150px" />
      </StyleSection>
      <SignInScreen />
    </>
  );
}
const StyleSection = styled.section`
  margin-bottom: 20vh;
`;
/** <button onClick={() => addVoteDocument("yes")}>yeah</button>
      <h3>
        yeah-people:
        {votes?.docs?.filter((doc) => doc.data().vote === "yes").length}
      </h3>
      <button onClick={() => addVoteDocument("no")}>neeee</button>
      <h3>
        nooo-people:
        {votes?.docs?.filter((doc)=>doc.data().vote==="no").length}
      </h3> */
