import { GlobalStyle } from "../styles/GlobalStyle";
import { useRouter } from "next/router";
import { useLocalStorage } from "../utils/localStorage";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useLocalStorage("testuser");

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
        handleLogin={handleLogin}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
