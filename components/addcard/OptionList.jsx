import { CreateOptionInput } from "./CreateOptionInput";
import { OptionInput } from "./OptionInput";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../../utils/localStorage";

export const OptionList = () => {
  const [optionInputs, setOptionsInput] = useLocalStorage("optionInputs", []);

  const mapIt = optionInputs.map((option) => {
    return (
      <OptionInput
        id={option.id}
        key={option.id}
        handleRemoveInput={() => {
          const id = option.id;
          setOptionsInput(
            optionInputs.filter((optionInputs) => optionInputs.id !== id)
          );
        }}
        optionInputs={optionInputs.id}
      >
        {option}
      </OptionInput>
    );
  });

  return (
    <>
      <ul>
        {mapIt}
        <CreateOptionInput
          onCreate={() => {
            const id = uuidv4();
            const newOptionInput = {
              id,
              name: "optionInput",
            };
            setOptionsInput([...optionInputs, newOptionInput]);
          }}
        />
      </ul>
    </>
  );
};
