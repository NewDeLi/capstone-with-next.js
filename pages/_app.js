import { GlobalStyle } from "../styles/GlobalStyle";
import { useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const [question, setQuestion] = useState("");
  const [roomName, setRoomName] = useState("");
  const router = useRouter();

  const handleRoomChange = (event) => {
    event.preventDefault();
    router.push("/addCard");
  };

  return (
    <>
      <GlobalStyle />
      <Component
        handleUserNameChange={(event) => setUsername(event.target.value)}
        username={username}
        handleQuestion={(event) => setQuestion(event.target.value)}
        question={question}
        handleRoomNameChange={(event) => setRoomName(event.target.value)}
        roomName={roomName}
        handleRoomChange={handleRoomChange}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
