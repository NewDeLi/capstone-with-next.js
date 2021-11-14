import styled from "styled-components";
import { useForm } from "react-hook-form";

export const OptionInput = ({ handleRemoveInput}) => {
  const { register, handleSubmit } = useForm();
  let userOptions = [];
  const onSubmit = (data) => {
    const userOption= JSON.stringify(data);
    userOptions.push(userOption);
    console.log(userOptions);
  };
  
  return (
    <>
      <StyledList>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label>
            <img
              src="/Icon/minusCircle.svg"
              alt="delete option"
              width="30px"
              height="30px"
              onClick={handleRemoveInput}
            />
          </label>
          <input
            type="text"
            {...register("OptionInputs")}
            placeholder="write option here"
          />
          <input type="submit" />
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
