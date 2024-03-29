import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? props.flex : 1)};
  width: max-content;
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  > * {
    margin: 5px;
  }
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  margin: 0px 0px 10px 0px;
`;
