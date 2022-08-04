import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background: white;
  display: flex;
  flex-direction: column;
  margin: 0px 30px 0px 0px;
  justify-content: space-evenly;
  align-items: center;
`;

export const Aggregate = styled.div`
  font-weight: 700;
  font-size: 54px;
`;

export const Stars = styled.div`
  flex-direction: row;
  display: flex;
  gap: 0px 3px;
  margin: 0px 0px 0px 0px;
`;

export const Text = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-auto-rows: 1fr;
  gap: 10px 0px;
  font-weight: 700;
  font-size: 16px;
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
`;
export const Fill = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;

  left: 0px;
  width: ${(props) => (props.percent ? `${props.percent}%` : "0%")};
  background: #f26a31;
`;
