import styled from "styled-components";

export const OptionInput = ({ children }) => {
  console.log(children);
  return (
    <>
      <StyledList>
        <img
          src="/Icon/minusCircle.svg"
          alt="delete option"
          width="30px"
          height="30px"
        />
        <StyledForm>
          <input type="text" name="newQption" placeholder="write option here" />
        </StyledForm>
      </StyledList>
    </>
  );
};

const StyledList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  font-size: 1.5rem;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 1.5rem;
  input {
    height: 2rem;
    border-radius: 5px;
  }
`;
