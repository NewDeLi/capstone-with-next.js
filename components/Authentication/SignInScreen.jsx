import firebase from "../../firebase/config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styled from "styled-components";
const uiConfig = {
  signInSuccessUrl: "/home",
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen({ handleUserNameChange, handleLogin }) {
  return (
    <>
      <section>
        <StyledForm onSubmit={handleLogin}>
          <label>
            <p>
              <img src="/Icon/Username.svg" width="30px" height="30px" />
            </p>
            <input
              type="text"
              placeholder="enter your username..."
              onChange={handleUserNameChange}
            />
          </label>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <StyledButton type="submit">Start</StyledButton>
        </StyledForm>
      </section>
    </>
  );
}

export default SignInScreen;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 13vh;
  input {
    padding: 1vh 5vw;
    border-radius: 5px;
    border: 2.5px solid #606060;
  }
`;
const StyledButton = styled.button`
  all: unset;
  border-radius: 25px;
  font-size: 2rem;
  padding: 1vh 15vw;
  margin: 1rem auto;
  background-color: #56a8e1;
  color: white;
  letter-spacing: 2px;
`;
