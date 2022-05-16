import React from "react";
import router from "next/router";

export default function JoinRoom({}) {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const roomId = event.target.elements.newRoom.value;
          router.push(`/room/${roomId}?id=${roomId}`);
        }}
      >
        <label>
          <img src="/Icon/hände.svg" width="25px" height="25px" />
          <input type="text" name="newRoom" placeholder="add room id here" />
        </label>
        <button type="submit" className="buttonAnimation">
          Join
        </button>
      </form>
    </>
  );
}
