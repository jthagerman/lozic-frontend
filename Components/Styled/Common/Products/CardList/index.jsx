import styled from "styled-components";
import breakpoints from "Context/Screen.jsx";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));

  @media (max-width: ${breakpoints.laptop}px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  justify-content: center;
  grid-auto-flow: row;
  gap: 30px;
  padding: 30px 0px;
  max-width: 1175px;
`;
