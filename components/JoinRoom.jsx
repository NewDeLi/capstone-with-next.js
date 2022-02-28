import React from "react";
import router from "next/router";
import styled from "styled-components";

export default function JoinRoom() {
  return (
    <>
      <StyledForm
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
        <StyledButton type="submit">Join</StyledButton>
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
    height: 2rem;
    width: 60vw;
    padding: 1vh 15vw;
    border: 2.5px solid #606060;
    border-radius: 5px;
  }
`;
const StyledButton = styled.button`
  all: unset;
  border-radius: 15px;
  font-size: 1.5rem;
  width: 60vw;
  margin: 1rem auto;
  background-color: #56a8e1;
  color: white;
  letter-spacing: 2px;
`;
