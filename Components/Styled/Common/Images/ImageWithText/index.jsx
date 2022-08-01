import styled from "styled-components";

export const Container = styled.div`
  max-width: 1170px;
  position: relative;
  aspect-ratio: 3 / 1.2;
  height: 493px;
`;

export const Image = styled.div`
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: absolute;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  object-fit: cover;
  z-index: 0;
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1;

  top: 0px;
  bottom: 0px;
  left: 10%;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Heading = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  max-width: 500px;
  color: white;
`;
export const Subheading = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  padding: 5% 0px;
  max-width: 500px;

  color: #d6d5d8;
`;
