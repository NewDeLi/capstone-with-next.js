import Link from "next/link";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <StyledNav>
      <li>
        <Link href="/home">
          <a>
            <img
              src="/Icon/Home_grey.svg"
              alt="home"
              width="30vh"
              height="30vh"
            />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/" onClick={() => logout()}>
          <a>
            <img
              src="/Icon/Logout-01.svg"
              alt="home"
              width="30vw"
              height="30vh"
            />
          </a>
        </Link>
      </li>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30vw;
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 1vh;
  margin: 1vh auto;
  z-index: 2;
  a {
    background: var(--fixed-background);
    border-radius: 5px;
    border: 1.5px solid var(--fixed-color-two);
    padding: 1vh;
    box-shadow: 0px 0px 20px 0px var(--fixed-background);
    display: flex;
    align-items: center;
  }
`;
