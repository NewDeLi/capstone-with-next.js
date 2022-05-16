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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  color: var(--fixed-color-one);
  &.onlyIndex {
    margin: 0 auto;
    padding-top: 10vh;
    position: relative;
    background: none;
    color: var(--fixed-color-one);
  }
  &.onlyCreate {
    background: none;
    color: var(--fixed-color-one);
  }
  .stickyHeader {
    position: sticky;
  }

  h1 {
    letter-spacing: 2px;
    line-height: 0;
    font-size: 2rem;
  }
  h5 {
    letter-spacing: 1px;
    line-height: 0;
  }
`;
