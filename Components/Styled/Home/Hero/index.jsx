import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Image = styled.img`
  /* aspect-ratio: 370 / 287; */
  display: flex;
  width: 100%;
  height: 40.75%;
  background-repeat: no-repeat;
  user-drag: none;
  object-fit: cover;
  transition: filter 0.2s ease-in;

  position: relative;
  max-height: 700px;
  :hover {
    filter: brightness(1.2);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0px;
  rihgt: 15px;
  color: white;
  z-index: 10;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  @media (max-width: ${breakpoints.largePhone}px) {
    padding: 4%;
  }
`;

export const Text = styled.h1`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  justify-content: flex-end;

  width: 100%;
  max-width: 1175px;
  padding: 20px 0px 40px 0px;
  span {
    max-width: 660px;
  }
  a {
    margin: 20px 0px 0px 0px;
  }
  @media (max-width: ${breakpoints.content + 100}px) {
    min-width: 0px;
    maxwidth: 500px;
    padding: 0px;
    margin: 0px;
    a {
      margin: 2% 0px 0px 0px;
    }
    span {
      margin-right: 15px;
    }
  }
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 28px;
    line-height: 25px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 22px;
    line-height: 25px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 18px;
    line-height: 18px;
  }
`;

export const Orange = styled.span`
  color: ${(props) => props.theme.orange};
  margin: 0px 10px 0px 0px;
`;
export const Sale = styled.div`
  font-weight: 500;
  font-size: 54px;
  display: flex;
  flex-direction: row;
  flex: 1;
  min-width: 400px;
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 38px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 28px;
    min-width: 200px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
  width: 100%;
  padding: 30px 0px;
  border-bottom: 1px solid #e4e4e4;

  @media (max-width: ${breakpoints.content + 200}px) {
    width: 90vw;
  }
`;

export const Message = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: row;
  flex: 1;
  font-size: 18px;
  line-height: 28px;
  max-width: 550px;
  min-width: 400px;

  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 16px;
    min-width: 200px;
  }
`;
