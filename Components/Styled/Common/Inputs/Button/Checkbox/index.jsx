import styled from "styled-components";

export const Check = styled.div`
  height: 18px;
  width: 18px;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  box-shadow: inset 0px 0px 0px 3px ${(props) => props.theme.background};
  background-color: ${(props) =>
    props.checked ? props.theme.orange : "transparent"};
  border-radius: ${(props) => (props.radioButton ? "100px" : "0px")};
  opacity: ${(props) => (props.checked ? 0.9 : 1)};
`;

export const Box = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "0px 0px")};

  color: ${(props) => props.theme.grayText};
  flex-direction: row;
  display: flex;
  margin: 5px 0px;
  align-items: center;
  cursor: pointer;

  label {
    fontsize: ${(props) => (props.fontSize ? props.fontSize : "16px")};
    margin-left: ${(props) =>
      props.labelMarginLeft ? props.labelMarginLeft : "3px"};
    color: inherit;
  }
  span {
    margin-left: 5px;
  }
`;
