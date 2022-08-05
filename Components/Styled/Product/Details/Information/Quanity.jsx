import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: grid;
  place-items: center;
  background-color: white;
  padding: 0px 24px;
`;

export const Input = styled.input`
  height: 36px;
  outline: none;
  width: 60px;
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
