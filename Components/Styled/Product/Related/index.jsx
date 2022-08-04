import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  width: 100%;
  gap: 30px;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  place-item: center;
  width: 100%;
  justify-content: center;

  margin: 30px 0px 100px 0px;
`;
