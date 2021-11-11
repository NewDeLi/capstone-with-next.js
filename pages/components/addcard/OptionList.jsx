import { CreateOptionInput } from "./CreateOptionInput";
import { OptionInput } from "./OptionInput";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../../../utils/localStorage";

export const OptionList = () => {
  const [optionInputs, setOptionsInput] = useLocalStorage("options", []);

  const mapIt = optionInputs.map((option) => {
    return (
      <OptionInput id={option.id} key={option.id}>
        {option}
      </OptionInput>
    );
  });

  return (
    <>
      <OptionInput />
      <ul>
        {mapIt}
        <CreateOptionInput
          onCreate={() => {
            const id = uuidv4();
            const newOptionInput = {
              id,
            };
            setOptionsInput([...optionInputs, newOptionInput]);
          }}
        />
      </ul>
    </>
  );
};
