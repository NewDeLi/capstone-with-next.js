import { GlobalStyle } from "../styles/GlobalStyle";
import { useState } from "react";
import { useRouter } from "next/router";
import { useLocalStorage } from "../utils/localStorage";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("testuser");
  const [question, setQuestion] = useLocalStorage("question", "");
  const [roomName, setRoomName] = useState("12345"); //12345 test
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    router.push("/home");
  };
  const handleRoomChange = (event) => {
    event.preventDefault();
    router.push(`/room/${roomName}`);
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
        handleLogin={handleLogin}
        handleRoomChange={handleRoomChange}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
