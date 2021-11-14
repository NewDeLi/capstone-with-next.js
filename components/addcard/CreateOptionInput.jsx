import styled from "styled-components";

export const CreateOptionInput = ({ onCreate }) => {
  return (
    <>
      <StyledButton
        onClick={(event) => {
          onCreate();
          event.preventDefault();
        }}
        type="add"
      >
        Add Option
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 1.5rem;
  width: 50%;
`;
