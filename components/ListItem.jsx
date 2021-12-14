import React from "react";
import styled from "styled-components";

export default function ListItem({ children }) {
  return <StyledList>{children}</StyledList>;
}
const StyledList = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  max-width: 80%;
  margin: 2rem auto;
  padding: 1vh 1vw;
  background-color: white;
  border: 2px solid #606060;
  border-radius: 15px;
  button {
    all: unset;
    border-radius: 5px;
    font-size: 1.5rem;
  }
`;
