import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 54px;
  padding: 0px;
  margin: 0px;
  font-weight: 500;
  text-align: center;
  margin: 0px 15px;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 48px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 38px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 28px;
  }
`;
export const Subheading = styled.h2`
  font-size: 18px;
  font-weight: 400;
  padding: 0px;
  margin: 0px;
  max-width: 750px;
  text-align: center;
  margin: 0px 15px;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 17px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 15px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 13px;
  }
`;
