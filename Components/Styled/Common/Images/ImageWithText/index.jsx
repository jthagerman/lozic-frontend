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
`;

export const Heading = styled.div``;
export const Subheading = styled.div``;
