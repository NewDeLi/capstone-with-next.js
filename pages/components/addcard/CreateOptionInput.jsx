import styled from "styled-components";

export const CreateOptionInput = ({ onCreate }) => {
  return (
    <>
      <StyledForm
        onSubmit={(event) => {
          onCreate();
          event.preventDefault();
        }}
      >
        <StyledButton type="submit">Add Option</StyledButton>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  input {
    height: 2rem;
  }
`;

const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 1.5rem;
  width: 50%;
`;
