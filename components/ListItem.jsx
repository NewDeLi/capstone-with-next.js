import React from "react";
import styled from "styled-components";

export default function ListItem({ children }) {
  return <StyledList>{children}</StyledList>;
}
const StyledList = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  button {
    all: unset;
    border-radius: 5px;
    font-size: 1.5rem;
  }
`;
