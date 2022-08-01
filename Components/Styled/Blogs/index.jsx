import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 30px 0px 30px 0px;
  @media (min-width: ${breakpoints.tablet}px) {
    padding: 50px 0px 90px 0px;
  }
`;
