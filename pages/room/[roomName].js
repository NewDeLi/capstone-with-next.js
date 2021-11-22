import { OptionFormList } from "../../components/OptionFormList";
import VoteCard from "../../components/VoteCard";
import Result from "../../components/Result";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddCard = ({ question }) => {
  const [inputs, setInputs] = useState([
    { id: uuidv4(), value: "", countYes: 0, countNo: 0 },
  ]);
  const [showCreate, setShowCreate] = useState(true);

  if (showCreate) {
    return (
      <>
        <StyledDiv>
          <OptionFormList
            inputs={inputs}
            setInputs={setInputs}
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
        <VoteCard inputs={inputs} setInputs={setInputs} question={question} />
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
  margin: 2.5vh auto;
`;
const StyledDiv = styled.div`
  overflow: scroll;
  height: 80%;
`;

/* <StyledDiv>
        <Result />
      </StyledDiv>*/
