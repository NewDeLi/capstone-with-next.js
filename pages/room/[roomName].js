import { OptionFormList } from "../../components/OptionFormList";
import VoteCard from "../../components/VoteCard";
import Result from "../../components/Result";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const AddCard = ({}) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <StyledDiv>
        <OptionFormList />
      </StyledDiv>

      <StyledDiv>
        <VoteCard />
      </StyledDiv>

      <StyledDiv>
        <Result />
      </StyledDiv>

      <StyledNav>
        <Link href="/home">
          <a>
            <img src="/Icon/Home.svg" alt="home" width="50px" height="50px" />
          </a>
        </Link>
      </StyledNav>
    </>
  );
};
export default AddCard;

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 0 auto;
  img {
    border: 1px solid black;
    background-color: orange;
    border-radius: 10px;
    padding: 0.5rem;
    margin: 3rem 3.1rem;
  }
`;
const StyledDiv = styled.div`
  overflow: auto;
  height: 60vh;
`;
