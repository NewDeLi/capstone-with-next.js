import React from "react";
import router from "next/router";

export default function JoinRoom() {
  return (
    <>
      <section>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const roomName = event.target.elements.newRoom.value;
            router.push(`/room/${roomName}?id=${roomName}`);
          }}
        >
          <label>
            <img src="/Icon/hände.svg" width="25px" height="25px" />
            <input type="text" name="newRoom" placeholder="add room id here" />
          </label>
          <button type="submit">Join</button>
        </form>
      </section>
    </>
  );
}
