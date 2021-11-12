import Head from "next/head";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";

const EnterVote = () => {
  return (
    <>
      <Head>
        <title>Vote</title>
      </Head>

      <Header pageName={"Vote"} />
      <Navigation />
    </>
  );
};
export default EnterVote;