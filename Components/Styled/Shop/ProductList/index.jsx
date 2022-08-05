import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  width: 100%;
  gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
    gap: 10px;
  }
`;
