import Head from "next/head";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import styled from "styled-components";
import CreateRoom from "../components/dbFirestore/CreateRoom";
import JoinRoom from "../components/JoinRoom";
import { useUser } from "../firebase/useUser";
import { useRoomInputs } from "../firebase/useQuestion";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Home({}) {
  const { user, logout } = useUser();
  const { roomInputsDb } = useRoomInputs(user.id);

  const [nameOfRoom, setNameOfRoom] = useState([{ id: user.id, value: "" }]);

  const [isClicked, setIsClicked] = useState(true);
  const handleClicked = () => {
    setIsClicked(true);
  };
  const [alignment, setAlignment] = useState("create");
  const handleToggelButtons = (Mouseevent, newAlignment) => {
    setAlignment(newAlignment);
  };

  if (user) {
    return (
      <>
        <Head>
          <title>Home</title>
        </Head>

        <StyledMain>
          <Header
            pageName={"Rooms"}
            subHeader={`Create/Join a Room`}
            className="onlyCreate"
          />
          <section>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleToggelButtons}
              className="toggleButtonGroup"
            >
              <ToggleButton value="create" onClick={handleClicked}>
                Create
              </ToggleButton>
              <ToggleButton value="join" onClick={() => setIsClicked(false)}>
                Join
              </ToggleButton>
            </ToggleButtonGroup>
            {isClicked ? (
              <CreateRoom
                user={user}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                nameOfRoom={nameOfRoom}
                setNameOfRoom={setNameOfRoom}
                roomInputsDb={roomInputsDb}
              />
            ) : (
              <JoinRoom isClicked={isClicked} setIsClicked={setIsClicked} />
            )}
          </section>
        </StyledMain>
        <Navigation logout={logout} />
      </>
    );
  }
}
const StyledMain = styled.main`
  color: var(--fixed-color-one);
  text-align: center;
  min-height: 100vh;
  background: linear-gradient(var(--fixed-background), var(--fixed-color-two));
  display: grid;
  place-items: center;
  section {
    border: 1px solid var(--fixed-color-one);
    box-shadow: 0px 0px 16px var(--fixed-background);
    border-radius: 25px;
    background-color: white;
    width: 80vw;
    height: 50vh;
    padding: 1vh 1vw;
    position: sticky;
    top: 0;
    margin: 0 auto 2rem auto;
  }

  img {
    display: block;
    width: 100%;
    margin-bottom: 1vh;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10vh auto;
  }
  input {
    height: 4vh;
    width: 40vw;
    height: 5vh;
    border: 1px solid var(--fixed-color-two);
    border-radius: 5px;
    margin: 0 auto 2.5vh auto;
  }
  .toggleButtonGroup {
    button {
      font-size: 1.25rem;
      width: 30vw;
      letter-spacing: 2px;
      padding: 0;
      border-radius: 5px;
      border: 5px solid var(--fixed-color-two);
    }
  }
  button {
    background-color: var(--fixed-color-two);
    color: var(--fixed-background);
    font-size: 1.25rem;
    padding: 1vh 5vw;
    margin: 1rem auto;
  }
`;
