import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useState } from "react";

export const OptionList = () => {
  const [inputs, setInputs] = useState([{ id: uuidv4(), value: "" }]);

  const handleOnChange = (event, id) => {
    const value = event.target.value;
    const foundInput = inputs.find((input) => input.id === id);
    foundInput.value = value;
    setInputs([...inputs]);
  };
  const handleCreate = () => {
    const id = uuidv4();
    const newOptionInput = {
      id,
      value: "",
    };
    setInputs([...inputs, newOptionInput]);
  };
  const handleRemove = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  return (
    <div>
      <form>
        <ul>
          {inputs.map((input) => {
            return (
              <StyledList key={input.id}>
                <img
                  src="/Icon/minus.svg"
                  alt="delete option"
                  width="35px"
                  height="35px"
                  onClick={() => handleRemove(input.id)}
                />
                <label>
                  <ScreenReaderOnly>New option</ScreenReaderOnly>
                  <input
                    type="text"
                    name="newOption"
                    placeholder="      write option here"
                    onChange={(event) => handleOnChange(event, input.id)}
                    value={input.value}
                  />
                </label>
                <img
                  src="/Icon/Plus.svg"
                  alt="add option"
                  width="35px"
                  height="35px"
                  onClick={handleCreate}
                />
              </StyledList>
            );
          })}
        </ul>
        <StyledButton type="submit">Vote</StyledButton>
      </form>
    </div>
  );
};
const StyledList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem;
  font-size: 1.5rem;
  z-index: 2;
  input {
    height: 6vh;
    width: 100%;
    border-radius: 5px;
  }
  img {
    background-color: orange;
    border: 1px solid black;
    border-radius: 100%;
  }
`;
const StyledButton = styled.button`
  border-radius: 15px;
  width: 50%;
  background-color: orange;
  height: 5vh;
  font-size: 2rem;
  font-weight: bolder;
  color: white;
`;
const ScreenReaderOnly = styled.span`
  display: inline-block;
  border: 0;
  clip: rect(0 0 0 0);
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
  font-size: 1px;
  background-color: blue;
`;
/*bug to fix when I have time: if there is only one input and the
user presses minus there is no way to create a new input*/
