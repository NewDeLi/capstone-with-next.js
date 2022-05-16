import React from "react";
import { v4 as uuidv4 } from "uuid";
import QuestionFromDb from "./QuestionFromDb";
import firebase from "firebase/compat/app";

export const OptionFormList = ({
  inputs,
  setInputs,
  roomID,
  handleToggleBack,
  handleToggleForward,
}) => {
  const sendInputValueToDb = async () => {
    try {
      await inputs.map((input) => {
        if (input.value !== "") {
          firebase
            .firestore()
            .collection(`roomInputs: ${roomID}`)
            .doc(`${input.id}`)
            .set({ input });
        }
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleOnChange = (event, id) => {
    event.preventDefault();
    const value = event.target.value;
    const foundInput = inputs.find((input) => input.id === id);
    foundInput.value = value;
    setInputs([...inputs]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendInputValueToDb();
    setInputs([{ id: uuidv4(), value: "" }]);
  };

  const handleAdd = () => {
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
    <>
      <div className="buttonGroup">
        <QuestionFromDb roomID={roomID} />
        <div>
          <button onClick={handleToggleBack}>Vote</button>

          <button
            onClick={() => {
              handleToggleForward();
              handleToggleBack();
            }}
          >
            Result
          </button>
        </div>
      </div>
      <div className="optionFormList">
        <form>
          <div className="card">
            <div className="cardContent">
              <ul>
                {inputs.map((input) => (
                  <li key={input.id}>{input.value}</li>
                ))}
              </ul>
            </div>

            <button
              className="buttonAnimation"
              onClick={(event) => handleSubmit(event)}
            >
              Submit
            </button>
          </div>
          <ul>
            {inputs.map((input) => {
              return (
                <li key={input.id} className="inputListitem">
                  <img
                    src="/Icon/remove_white.svg"
                    alt="delete option"
                    width="25px"
                    height="25px"
                    onClick={() => handleRemove(input.id)}
                  />
                  <label>
                    <span className="screenReaderOnly">New option</span>
                    <input
                      type="text"
                      placeholder="write Option here"
                      onChange={(event) => handleOnChange(event, input.id)}
                      value={input.value}
                    />
                  </label>
                  <img
                    src="/Icon/add_white.svg"
                    alt="add option"
                    width="25px"
                    height="25px"
                    onClick={handleAdd}
                  />
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    </>
  );
};
