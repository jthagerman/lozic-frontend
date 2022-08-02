import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  width: 100%;
  margin: 0px 0px 30px 0px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundOffset};
  @media (max-width: ${breakpoints.content + 100}px) {
  }
`;

export const Answer = styled.p`
  margin: 15px 0px;
  font-weight: 400;
  margin: 15px 30px 30px 30px;
  @media (max-width: ${breakpoints.largePhone}px) {
    margin: 10px 20px 10px 20px;
  }
`;
export const Question = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin: 30px 30px 0px 30px;
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 22px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 18px;
    margin: 18px 20px 0px 28i lpx;
  }
`;
export const LargeQ = styled.span`
  font-size: 42px;
  font-weight: 500;
  margin-right: 10px;
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 36px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 30px;
    margin-right: 8px;
  }
`;
