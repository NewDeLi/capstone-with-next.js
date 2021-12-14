import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import React from "react";

export default function Write() {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("my_document")
        .set({
          string: "NewDeLi",
          nummber: 4,
          boolean: true,
          map_data: { stringMap: "Hi", numberMap: 5 },
          array: ["text", 3],
          null: null,
        })
        .then(alert("data send to cloud"));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return <button onClick={sendData}>send data to firestore</button>;
}
