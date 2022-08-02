import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  max-width: 1170px;
  position: relative;
  aspect-ratio: 3 / 1.2;

  width: 100vw;
  max-height: 400px;

  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.laptop}px) {
  }
`;

export const Image = styled.div`
  top: 0px;
  bottom: 0px;
  width: 100%;
  right: 0px;
  position: absolute;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: ${breakpoints.largePhone}px) {
    filter: brightnes(70%);
  }
  @media (max-width: ${breakpoints.mobile}px) {
    filter: brightnes(40%);
  }
  /* object-fit: fill; */

  z-index: 0;
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1;

  top: 0px;
  bottom: 0px;
  left: 10%;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Heading = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  max-width: 500px;
  color: white;
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 17px;
    line-height: 25px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
export const Subheading = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  padding: 5% 0px;
  max-width: 500px;

  color: #d6d5d8;
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
