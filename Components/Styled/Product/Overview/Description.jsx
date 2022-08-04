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
export const Wrapper = styled.div`
  max-width: 850px;
`;
export const Paragraph = styled.p`
  ont-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
`;
