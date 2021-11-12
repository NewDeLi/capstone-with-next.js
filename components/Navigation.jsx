import Link from "next/link";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <StyledNav>
      <li>
        <Link href="/">
          <a>
            {" "}
            <img src="/Icon/Home.svg" alt="home" width="50px" height="50px" />
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/addCard"}>
          <a>
            <img src="/Icon/Plus.svg" alt="add" width="50px" height="50px" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/enterVote">
          <a>
            <img src="/Icon/vote.png" alt="vote" width="50px" height="50px" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/showResults">
          <a>
            <img
              src="/Icon/Results.svg"
              alt="results"
              width="50px"
              height="50px"
            />
          </a>
        </Link>
      </li>
    </StyledNav>
  );
};

//styled-components

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  list-style-type: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 0.5px solid black;
  background-color: white;
  padding: 1rem;
`;
