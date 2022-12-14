import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  margin: 50px 20px;
`;

export const Sidebar = styled.div`
  min-width: 270px;
  width: 270px;

  height: 100%;
  min-height: 100%;
  height: 1000px;
  display: flex;
  flex: 1;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const List = styled.div`
  width: 100%;
  padding: 60px 0px 50px 30px;
  @media (max-width: 800px) {
    padding: 30px 0px;
  }
`;

export const Navigation = styled.div`
  margin: 30px 0px;
  height: 47px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
