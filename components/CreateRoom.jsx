import React from "react";
import router from "next/router";
import styled from "styled-components";

export default function CreateRoom({handleQuestion}) {
  return (
    <>
      <StyledForm
        onSubmit={async (event) => {
          event.preventDefault();
          // use fetch to create new room document (in firebase)
          // const response = await fetch("/api/room", {
          //   method: "POST",
          //   body: JSON.stringify({ question: newQuestion }),
          //   headers: { "Content-Type": "application/json" },
          // });
          // const responseData = await response.json();
          const roomName = "newRandomRoomName"; // responseData.insertedId
          router.push(`/room/${roomName}`);
        }}
      >
        <label>
          <img src="/Icon/pencil-01.svg" width="30px" height="30px" />
          <input
            type="text"
            name="newQuestion"
            placeholder="add question here"
            onChange={handleQuestion}
          />
        </label>
        <StyledButton type="submit">Create</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3vh auto;
  input {
    height: 3rem;
    width: 60vw;
    padding: 1vh 15vw;
    border: 2.5px solid #606060;
    border-radius: 15px;
  }
`;
const StyledButton = styled.button`
  all: unset;
  border-radius: 25px;
  font-size: 2rem;
  width: 50%;
  padding: 1vh 5vw;
  margin: 1rem auto;
  background-color: #56a8e1;
  color: white;
  letter-spacing: 2px;
`;
