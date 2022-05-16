import React from "react";
import router from "next/router";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function CreateRoom({
  user,
  nameOfRoom,
  setNameOfRoom,
  roomInputsDb,
}) {
  //delete options data from firestore

  const deleteCurrentRoomInputsDb = () => {
    try {
      roomInputsDb?.map((optionObject) => {
        firebase
          .firestore()
          .collection(`roomInputs: ${user.id}`)
          .doc(`${optionObject.id}`)
          .delete();
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  //write question data to firestore database
  const addNewRoomDocument = () => {
    try {
      nameOfRoom?.map((nameOfRoomObject) => {
        firebase
          .firestore()
          .collection("createRoom")
          .doc(`${user.id}`)
          .set({ id: user.id, value: nameOfRoomObject?.value });
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  //read question data id from firestore database and add to dynamic routing
  const readRoomDocument = () => {
    try {
      firebase
        .firestore()
        .collection("createRoom")
        .doc(`${user.id}`)
        .onSnapshot(function (doc) {
          const roomID = doc.data()?.id;
          router.push(`/room/${roomID}?id=${roomID}`);
        });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addNewRoomDocument();
          readRoomDocument();
          deleteCurrentRoomInputsDb();
        }}
      >
        <label>
          <img src="/Icon/pencil-01.svg" width="25px" height="25px" />
          <input
            type="text"
            name="createRoom"
            placeholder="add a name or message for your room"
            onChange={(event) => {
              event.preventDefault();
              nameOfRoom[0].value = event.target.value;
              setNameOfRoom(nameOfRoom);
            }}
          />
        </label>
        <button type="submit" className="buttonAnimation">
          Create
        </button>
      </form>
    </>
  );
}
