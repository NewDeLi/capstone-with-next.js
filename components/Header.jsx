import styled from "styled-components";

export const Header = ({ pageName, subHeader, className }) => {
  return (
    <StyledHeader className={className}>
      <h1>{pageName}</h1>
      <h5>{subHeader}</h5>
    </StyledHeader>
  );
};

//styled-components

const StyledHeader = styled.header`
  width: 100vw;
  height: 15vh;
  background: var(--fixed-background);
  position: sticky;
  top: 0vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2vh auto;
  border-radius: 5px;
  z-index: 2;
  box-shadow: 0px 0px 16px var(--fixed-color-one);
  &.onlyIndex {
    box-shadow: 0 0 0;
  }
  h1 {
    letter-spacing: 2px;
    line-height: 0;
    font-size: 2rem;
  }
  h5 {
    color: var(--fixed-color-two);
    letter-spacing: 1px;
    line-height: 0;
  }
`;
