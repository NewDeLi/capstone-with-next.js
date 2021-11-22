import styled from "styled-components";

export const Header = ({ pageName, onlyIndex }) => {
  return (
    <StyledHeader>
      <h1>{pageName}</h1>
      <h5>{onlyIndex}</h5>
    </StyledHeader>
  );
};

//styled-components

const StyledHeader = styled.header`
  width: 100%;
  margin: 7.5vh auto;
`;
