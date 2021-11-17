import Head from "next/head";
import { Header } from "./Header";
import styled from "styled-components";

export const OptionFormList = ({ question }) => {
  return (
    <div>
      <Head>
        <title>Create</title>
      </Head>

      <Header pageName={"Create"} />
      <StyledP>{question}?</StyledP>
    </div>
  );
};
const StyledP = styled.p`
  font-size: 1.5rem;
  border: 1px solid black;
  border-radius: 15px;
  margin: 1rem auto;
  padding: auto;
  background-color: white;
  height: 100%;
  width: 70%;
`;
