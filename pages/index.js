import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import Home from "./home";
import Login from "./login";
import SignInScreen from "../components/Auth";
import firebase from "@firebase/app-compat";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { async } from "@firebase/util";

export default function Index({}) {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const firestoreDB = firebase.firestore();
  const [votes, votesLoading, votesError] = useCollection(
    firestoreDB.collection("votes"),
    {}
  );
  if (!votesLoading && votes) {
    votes.docs.map((doc) => console.log(doc.data()));
  }
  //create document function
  const addVoteDocument = async (vote) => {
    await firestoreDB.collection("votes").doc(user.uid).set({
      vote,
    });
  };
  return (
    <>
      <Header pageName={"DECISIONS"} onlyIndex={"VOTE WITH ME"} />
      <section>{user ? <Login /> : <SignInScreen />}</section>
    </>
  );
}
