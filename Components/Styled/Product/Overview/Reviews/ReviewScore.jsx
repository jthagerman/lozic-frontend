import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  flex: 1;
  background: white;
  display: flex;
  flex-direction: column;
  margin: 10px 30px 20px 0px;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 0px 10px 0px;
  max-height: 300px;

  @media (max-width: ${breakpoints.largePhone}px) {
    min-width: 300px;
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    min-width: 200px;
    max-width: 100%;
    width: 100%;
  }
`;

export const Aggregate = styled.div`
  font-weight: 700;
  font-family: "CabinetGrotesk-Bold";
  font-size: 54px;
  align-self: center;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 48px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 38px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 30px;
  }
`;

export const Stars = styled.div`
  flex-direction: row;
  display: flex;
  gap: 0px 3px;
  margin: 0px 0px 0px 0px;
`;

export const Text = styled.div`
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 14px;
    margin: 4px 0px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-auto-rows: 1fr;
  gap: 10px 0px;
  font-weight: 700;
  font-family: "CabinetGrotesk-Bold";
  font-size: 16px;

  @media (max-width: ${breakpoints.largePhone}px) {
    gap: 8px 0px;
    font-size: 14px;
  }
`;
export const Row = styled.div`
  display: contents;
  user-select: none;
`;

export const Header = styled.div``;
export const Number = styled.span``;
export const Percent = styled.span`
  text-align: right;
`;
export const Bar = styled.div`
  width: 220px;
  height: 20px;
  background: #e8e8e8;
  margin: 0px 10px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}px) {
    width: 200px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    width: 150px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    width: 100px;
    height: 16px;
  }
`;
export const Fill = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;

  left: 0px;
  width: ${(props) => (props.percent ? `${props.percent}%` : "0%")};
  background: #f26a31;
`;
