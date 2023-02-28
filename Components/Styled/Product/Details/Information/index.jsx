import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  margin: 20px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  padding: 5px;
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
  overflow: hidden;
  justify-content: space-between;
`;
export const Checkout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 0px;
  margin: 10px 0;

  @media (max-width: ${breakpoints.largePhone}px) {
    justify-content: center;
  }
`;
