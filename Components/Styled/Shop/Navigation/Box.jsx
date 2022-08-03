import styled from "styled-components";

export const Container = styled.a`
  user-select: none;
  height: 47px;
  width: 47px;
  display: grid;
  text-decoration: none;
  box-sizing: border-box;
  margin: 0px 10px 0px 0px;
  place-items: center;
  background-color: #ffffff;
  border: ${(props) => {
    if (!props.selected) {
      return `1px solid #dbdbdb;`;
    } else return `1px solid #F26A31`;
  }};
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  transition: transform 0.15s ease-in;

  :hover {
    transform: scale(1.08);
  }
`;
