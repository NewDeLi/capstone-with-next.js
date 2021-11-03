import Head from "next/head";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

const AddCard = () => {
    return (
        <>
            <Head><title>Add</title></Head>
            <div>
                <Header pageName="Add your Options" />
                <Navigation />
            </div>
        </>
    )
};
export default AddCard;