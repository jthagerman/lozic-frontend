import styled from "styled-components";

export const Container = styled.img`
  height: ${(props) => (props.height ? props.height : "18px")};
  width: ${(props) => (props.width ? props.width : "18px")};

  transition: transform 0.2s ease-in;
  :hover {
    transform: scale(1.1);
  }
`;
