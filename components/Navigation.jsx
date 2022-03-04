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
              width="50px"
              height="50px"
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
  gap: 30vw;
  position: sticky;
  bottom: 0;
  width: 100vw;
  margin: 2vh auto 0 auto;
  border-radius: 5px;
  box-shadow: 0px 0px 16px var(--fixed-color-one);
  background-color: var(--fixed-background);
  height: 11vh;
  z-index: 2;
`;
