import Head from "next/head";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

const ShowResults = () => {
    return (
        <>
            <Head><title>Results</title></Head>
            <div>
                <Header pageName="Results" />
                <Navigation />
            </div>
        </>
    )
};
export default ShowResults;