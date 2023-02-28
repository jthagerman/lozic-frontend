import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;

  flex-grow: 1;
  margin: auto;

  max-width: 760px;
`;

export const InputBoxes = styled.div`
  display: grid;
  min-width: 100%;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 30px;
  margin: 30px 0px 10px 0px;

  @media (max-width: ${breakpoints.largePhone}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: -10px 0px 5px 0px;
  }
`;

export const Input = styled.input`
  height: 36px;
  outline: none;
  border: 1px solid rgba(219, 219, 219, 1);
  padding: 0px 15px;
  margin: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #777777;
  ::placeholder {
    color: #777777;
    opacity: 1;
  }
`;

export const Select = styled.select`
  height: 36px;
  outline: none;
  border: 1px solid rgba(219, 219, 219, 1);
  padding: 0px 10px;
  margin: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #777777;
  ::placeholder {
    color: #777777;
    opacity: 1;
  }
`;

export const TextArea = styled.textarea`
  font-family: inherit;
  resize: none;
  height: 200px;
  outline: none;
  border: 1px solid rgba(219, 219, 219, 1);
  padding: 15px;
  margin: 5px 0px 0px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #777777;
  ::placeholder {
    color: #777777;
    opacity: 1;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    height: 150px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 20px 4px 0px 0px;
  align-self: flex-end;
`;

export const Checkbox = styled.input`
  height: 18px;
  width: 18px;
  border: 1px solid rgba(219, 219, 219, 1);
`;

export const Box = styled.div`
  color: #777777;
  flex-direction: row;
  display: flex;
  margin: 5px 0px;
  align-items: center;
  label {
    margin-left: 3px;
  }
`;
