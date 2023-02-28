import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 500px;
  flex-wrap: wrap;
  max-width: 100%;
  overflow: hidden;
`;

export const Box = styled.div`
  flex: 1;
  margin: 10px;
  @media (max-width: ${breakpoints.largePhone}px) {
    margin: 0px;
    min-width: 250px;
  }
`;
