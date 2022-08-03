import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "left" ? "row-reverse" : "row"};
  justify-content: center;
  max-width: 1170px;
  margin-bottom: 60px;
  @media (max-width: ${breakpoints.content + 100}px) {
    margin: 20px;
  }
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.largePhone}px) {
    flex-direction: ${(props) =>
      props.direction === "right" ? "column-reverse" : "column"};
  }
`;
export const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 0px 0px 0px 0px;
`;
export const Image = styled.img`
  height: 485px;
  width: 475px;
  margin: 0px 10px;
  background-repeat: no-repeat;
  user-drag: none;
  object-fit: cover;
  align-self: ${(props) =>
    props.direction === "right" ? "flex-start" : "flex-end"};

  @media (max-width: ${breakpoints.content + 100}px) {
    height: 435px;
    width: 425px;
  }
  @media (max-width: ${breakpoints.laptop}px) {
    height: 385px;
    width: 375px;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    height: 335px;
    width: 325px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    height: 295px;
    width: 285px;
    align-self: center;
    margin: 0px 0px 10px 0px;
  }
`;
export const Title = styled.div`
  font-weight: 400;
  font-size: 54px;

  @media (max-width: ${breakpoints.laptop}px) {
    font-size: 44px;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 38px;
  }
`;
export const Description = styled.div`
  display: flex;

  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding: 10px 0px 20px 0px;

  @media (max-width: ${breakpoints.laptop}px) {
    font-size: 17px;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 16px;
    padding: 8px 0px 20px 0px;
  }
`;
export const Bullets = styled.ul`
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  background-color: white;
  display: grid;
  flex-direction: column;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 10px 0px;
  padding: 12px 0px;

  @media (max-width: ${breakpoints.laptop}px) {
    font-size: 17px;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 16px;
    padding: 8px 0px 0px 0px;
  }
`;
export const Item = styled.li`
  margin: 0px 10px 0px 40px;
`;
