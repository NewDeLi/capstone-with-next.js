import { GlobalStyle } from "../styles/GlobalStyle";
import { useRouter } from "next/router";
import { useLocalStorage } from "../utils/localStorage";
import { v4 as uuidv4 } from "uuid";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useLocalStorage("testuser");
  const [question, setQuestion] = useLocalStorage([
    { id: uuidv4(), value: "" },
  ]);
  const [roomName, setRoomName] = useLocalStorage("12345");
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    router.push("/home");
  };

  return (
    <>
      <GlobalStyle />
      <Component
        handleUserNameChange={(event) => setUsername(event.target.value)}
        username={username}
        question={question}
        setQuestion={setQuestion}
        roomName={roomName}
        handleLogin={handleLogin}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
