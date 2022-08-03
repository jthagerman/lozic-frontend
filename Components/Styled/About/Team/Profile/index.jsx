import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  text-align: center;
  @media (max-width: ${breakpoints.mobile}px) {
    width: 180px;
  }
`;

export const Image = styled.img`
  aspect-ration: 1 / 1;
  background-repeat: no-repeat;
  user-drag: none;
  object-fit: cover;
  border-radius: 200px;
  height: 170px;
  width: 170px;

  @media (max-width: ${breakpoints.tablet}px) {
    height: 150px;
    width: 150px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    height: 120px;
    width: 120px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    height: 100px;
    width: 100px;
    width: max-content;
  }
`;
export const Name = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin: 10px 0px 10px 0px;
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 20px;
    margin: 7px 0px;
  }
`;
export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 14px;
  }
`;
