import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import React from "react";

export default function Read() {
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("my_document")
        .onSnapshot(function (doc) {
          console.log(doc.data());
        });
      alert("data fetched from firestore");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return <button onClick={readData}>read data from firestore</button>;
}
