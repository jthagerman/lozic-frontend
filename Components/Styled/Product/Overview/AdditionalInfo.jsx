import styled from "styled-components";

export const Container = styled.div`
  animation: load 0.2s ease-in;

  @keyframes load {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
