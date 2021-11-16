import { OptionInput, OptionListItem } from "./OptionListItem";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../../utils/localStorage";
import styled from "styled-components";
import { useState } from "react";
import { CreateOptionInput } from "./CreateOptionInput";

export const OptionList = () => {
  const [optionInputs, setOptionsInput] = useLocalStorage("optionInputs", []);
  const [inputs, setInputs] = useState([{ id: uuidv4(), value: "" }]);
  
  

  return (
    <>
      <form>
        <ul>
            <OptionListItem
              optionInputs={optionInputs.id}
              onCreate={() => {
                const id = uuidv4();
                const newOptionInput = {
                  id,
                  name: "optionInput",
                };
                setOptionsInput([...optionInputs, newOptionInput]);
              }}
            />
            
            {optionInputs.map((option) => {
              return (
                <>
                  <OptionListItem
                    //handle delte option input here
                    id={option.id}
                    key={option.id}
                    handleRemoveInput={() => {
                      const id = option.id;
                      setOptionsInput(
                        optionInputs.filter(
                          (optionInputs) => optionInputs.id !== id
                        )
                      );
                    }}
                    optionInputs={optionInputs.id}
                    //handle add option input here
                    onCreate={() => {
                      const id = uuidv4();
                      const newOptionInput = {
                        id,
                        name: "optionInput",
                      };
                      setOptionsInput([...optionInputs, newOptionInput]);
                    }}
                  >
                    {option}
                  </OptionListItem>
                </>
              );
            })}
          <StyledButton type="submit">Submit</StyledButton>
        </ul>
      </form>
    </>
  );
};
const StyledButton = styled.button`
  border-radius: 15px;
  width: 50%;
  background-color: orange;
  height: 5vh;
  font-size: 2rem;
  font-weight: bolder;
  color: white;
`;
      