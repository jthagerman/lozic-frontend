import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1175px;
  width: 100%;
  @media (max-width: ${breakpoints.content + 100}px) {
    margin: 0px 25px;
  }
`;
