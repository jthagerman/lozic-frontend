import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  max-width: 1175px;
  margin: auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 50px 0px;

  @media (max-width: ${breakpoints.content + 100}px) {
    padding: 0px 25px;
  }
`;
