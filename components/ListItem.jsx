import React from "react";
import styled from "styled-components";

export default function ListItem({ children }) {
  return <StyledList>{children}</StyledList>;
}
const StyledList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem;
  font-size: 1.5rem;
`;
