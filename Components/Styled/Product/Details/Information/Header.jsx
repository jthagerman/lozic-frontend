import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-weight: 400;
  font-size: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;  


  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 30px;
    width: 100%;
    min-width: 0px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 24px;
  }
`;
export const Description = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;


  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 17px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 16px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
