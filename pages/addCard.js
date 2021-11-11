import Head from "next/head";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { OptionList } from "./components/addcard/OptionList";
//import Pusher from "pusher-js";
import styled from "styled-components";

const AddCard = ({ /*username,*/ question }) => {
  /*const pusher = new Pusher(process.env.NEXT_PUBLIC_key, {
    cluster: "eu",
    authEndpoint: "api/pusher/auth",
    auth: { params: { username } },
  });*/

  return (
    <>
      <Head>
        <title>Create</title>
      </Head>

      <Header pageName={"Create"} />

      <StyledH3>{question}❓</StyledH3>

      <OptionList />

      <Navigation />
    </>
  );
};
export default AddCard;

const StyledH3 = styled.h3`
  border: 1px solid black;
  border-radius: 15px;
  margin: 1rem 2rem;
  background-color: white;
`;
