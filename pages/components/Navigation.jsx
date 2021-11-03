import Link from "next/link";


export const Navigation = () => {
    return (
        <div>
            <li>
                <Link href="/">
                    <a>home</a>
                </Link>
            </li>
            <li>
                <Link href="/addCard">
                    <a>create</a>
                </Link>
            </li>
            <li>
                <Link href="/enterVote">
                    <a>vote</a>
                </Link>
            </li>
            <li>
                <Link href="/showResults">
                    <a>results</a>
                </Link>
            </li>
        </div>
    )
};
