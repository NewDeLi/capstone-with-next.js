import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const OptionListItem = ({ handleRemoveInput, onCreate}) => {
  const [inputs, setInputs] = useState([{ id: uuidv4(), value: "" }]);
    const handleOnChange=(event, id) => {
                const value = event.target.value;
                const foundInput = inputs.find((input) => input.id === id);
                foundInput.value = value;
                setInputs([...inputs]);
                console.log(inputs);
              }
  return (
    <>
          {inputs.map((input) => {
            return (
              <>
                <StyledList>
                  <img
                    src="/Icon/minus.svg"
                    alt="delete option"
                    width="35px"
                    height="35px"
                    onClick={handleRemoveInput}
                  />
                  <input
                    type="text"
                    placeholder="      write option here"
                    onChange={(event) => handleOnChange(event, input.id)}
                    value={input.value}
                    key={input.id}
                  />
                  <img
                    src="/Icon/Plus.svg"
                    alt="add option"
                    width="35px"
                    height="35px"
                    onClick={(event) => {
                      onCreate();
                      event.preventDefault();
                    }}
                  />
                </StyledList>
              </>
            );
          })}
          
    </>
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
    width: 60%;
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
  font-size: 1.5rem;
  width: 50%;
  z-index:1;
`;
