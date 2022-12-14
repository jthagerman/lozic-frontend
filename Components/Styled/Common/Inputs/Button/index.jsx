import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Button = styled.a`
  background-color: ${(props) => props.theme.orange};
  height: ${(props) => (props.height ? props.height : "48px")};
  outline: none;
  border: none;
  color: white;
  margin: ${(props) => (props.margin ? props.margin : "max-content")};
  padding: ${(props) => (props.padding ? props.padding : "0px 40px")};
  width: ${(props) => (props.width ? `${props.width}` : "max-content")};
  font-weight: 500;
  font-size: 16px;
  display: grid;
  place-items: center;
  cursor: pointer;
  background: linear-gradient(98.35deg, #f26a31 85.11%, #a7320a 118.98%);
  box-shadow: 0px 0px 18px rgba(250, 255, 1, 0.32);
  box-sizing: border-box;
  transition: all 0.2s ease-in;
  :hover {
    filter: brightness(1.15);
  }

  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 14px;
    height: 40px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 14px;
    height: 30px;
  }
`;
