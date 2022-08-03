import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  padding: 30px 0px;
  display: grid;
  place-items: center;
`;

export const List = styled.div`
  padding: 2% 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 30px 30px;
  max-width: 1175px;
  @media (max-width: ${breakpoints.laptop}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: ${breakpoints.largePhone + 100}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.mobile - 70}px) {
    grid-template-columns: 1fr;
  }
`;
