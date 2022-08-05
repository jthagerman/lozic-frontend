import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  margin-top: 20px;
  margin: 20px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  max-width: 100%;

  @media (max-width: ${breakpoints.largePhone}px) {
    margin: 10px 10px 0px 0px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  flex: 1;

  justify-content: space-between;
`;
export const Checkout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 0px;
`;
