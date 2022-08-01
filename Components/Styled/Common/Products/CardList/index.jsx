import styled from "styled-components";
import breakpoints from "Context/Screen.jsx";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  @media (max-width: ${breakpoints.content + 100}px) {
    margin: 0px 20px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  width: 100%;
  @media (max-width: ${breakpoints.content + 100}px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  justify-content: center;

  gap: 30px;
  padding: 30px 0px;
  max-width: 1175px;
`;
