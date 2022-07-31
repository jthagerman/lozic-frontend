import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1175px;
  padding: 25px;
  background-color: ${(props) => props.theme.backgroundOffset};
`;

export const Answer = styled.p`
  margin: 15px 0px;
  font-weight: 400;
`;
export const Question = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
export const LargeQ = styled.span`
  font-size: 42px;
  font-weight: 500;
`;
