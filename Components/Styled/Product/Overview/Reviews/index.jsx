import styled from "styled-components";

export const ReviewContainer = styled.div`
  animation: load 0.2s ease-in;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @keyframes load {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Comments = styled.div`
  flex: 1;
  display: grid;
  gap: 30px 0px;
`;
