import Head from "next/head";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

const AddCard = () => {
  return (
    <>
      <Head>
        <title>Create</title>
      </Head>

      <Header pageName={"Create"} />
      <Navigation />
    </>
  );
};
export default AddCard;