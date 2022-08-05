import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  min-height: 300px;
`;
export const TabBar = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-top: 4px solid #d9d9d9;
  display: flex;
  flex-direction: row;
`;

export const Tab = styled.div`
  border-top: 4px solid
    ${(props) => (props.border ? props.theme.orange : "transparent")};
  margin: -4px 0px 0px 0px;
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;

  transition: border 0.2s ease-in;

  :hover {
    border-top: 4px solid ${(props) => props.theme.orange};
  }

  @media (max-width: ${breakpoints.tablet}px) {
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 14px;
    padding: 5px 10px;
  }
`;
