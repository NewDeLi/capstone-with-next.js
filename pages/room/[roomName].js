import { OptionFormList } from "../../components/OptionFormList";
import React from "react";
import VoteCard from "../../components/VoteCard";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "../../components/Header";

const AddCard = ({ question }) => {
  const [inputs, setInputs] = useState([
    { id: uuidv4(), value: "", countYes: 0, countNo: 0 },
  ]);
  const [showCreate, setShowCreate] = useState(true);

  if (showCreate) {
    return (
      <>
        <Header pageName={"CREATE"} />
        <StyledP>{question}</StyledP>
        <StyledMain>
          <OptionFormList
            inputs={inputs}
            setInputs={setInputs}
            question={question}
            showCreate={showCreate}
            setShowCreate={setShowCreate}
          />
        </StyledMain>
        <StyledNav>
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
        </StyledNav>
      </>
    );
  }
  return (
    <>
      <Header pageName={"VOTE"} />
      <StyledP>{question}</StyledP>
      <StyledMain>
        <VoteCard inputs={inputs} setInputs={setInputs} question={question} />
      </StyledMain>
      <StyledNav>
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
const StyledMain = styled.main`
  overflow: scroll;
  height:60vh;
`;
const StyledP = styled.p`
  border: 5px solid #56a8e1;
  border-radius: 25px;
  max-width: 80%;
  margin: 1rem auto;
  padding: 1vh 1vw;
  background-color: white;
`;

