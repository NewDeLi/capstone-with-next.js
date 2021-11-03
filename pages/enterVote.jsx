import Head from "next/head";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

const EnterVote = () => {
    return (
        <>
            <Head><title>Vote</title></Head>
            <div>
                <Header pageName="Vote for your Option" />
                <Navigation />
            </div>
        </>
    )
};
export default EnterVote;