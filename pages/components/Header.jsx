import styled from "styled-components";

export const Header = ({ pageName }) => {
  return (
    <StyledHeader>
      <h1>{pageName}</h1>
      <img
        src="/Icon/scales_hires.png"
        alt="scale"
        width="60px"
        height="60px"
      />
    </StyledHeader>
  );
};

//styled-components

const StyledHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 0.5px solid black;
font-size: 1.2rem;
background-color: white;
`