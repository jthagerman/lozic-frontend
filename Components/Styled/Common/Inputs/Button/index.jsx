import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.orange};
  height: 48px;
  outline: none;
  border: none;
  color: white;
  padding: 0px 40px;
  width: max-content;
`;
