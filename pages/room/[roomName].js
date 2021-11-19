import { OptionFormList } from "../../components/OptionFormList";
import VoteCard from "../../components/VoteCard";
import Result from "../../components/Result";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddCard = ({ question }) => {
  const [inputs, setInputs] = useState([{ id: uuidv4(), value: "" }]);
  const [voteList, setVoteList] = useState([{ id: uuidv4(), value: "" }]);

  const [showCreate, setShowCreate] = useState(true);
  if (showCreate) {
    return (
      <>
        <StyledDiv>
          <OptionFormList
            inputs={inputs}
            setInputs={setInputs}
            voteList={voteList}
            setVoteList={setVoteList}
            question={question}
            showCreate={showCreate}
            setShowCreate={setShowCreate}
          />
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
  }
  return (
    <>
      <StyledDiv>
        <VoteCard inputs={inputs} voteList={voteList} question={question} />
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
  height: 20%;
  img {
    border: 1px solid black;
    background-color: orange;
    border-radius: 10px;
    padding: 0.5rem;
    margin: 3rem 3.1rem;
  }
`;
const StyledDiv = styled.div`
  overflow: scroll;
  height: 80%;
`;

/* <StyledDiv>
        <Result />
      </StyledDiv>*/
