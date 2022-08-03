import styled from "styled-components";

export const Container = styled.button`
  height: 47px;
  width: 47px;
  display: grid;
  user-select: none;
  text-decoration: none;
  box-sizing: border-box;
  margin: 0px 10px 0px 0px;
  place-items: center;
  background-color: ${(props) => {
    if (props.locked) {
      return `#ffffff;`;
    } else return `#F26A31`;
  }};
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

export const Icon = styled.div`
  mask-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  mask-position: center;
  mask-repeat: no-repeat;
  object-fit: cover;
  width: 10px;
  height: 12px;
  cursor: pointer;
  user-drag: none;
  background-color: ${(props) => {
    if (props.locked) {
      return `#000000;`;
    } else return `#ffffff`;
  }};
`;
