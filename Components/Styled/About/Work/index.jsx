import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  margin: auto;
`;

export const Wrapper = styled.div`
  max-width: 1175px;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  background-repeat: no-repeat;
  user-drag: none;

  padding: 0px 20px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: filter 0.2s ease-in;
`;
export const ImageWrapper = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
`;

export const Logo = styled.img`
  mask-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  mask-position: center;
  mask-repeat: no-repeat;
  width: 87.88px;
  height: 27.51px;

  cursor: pointer;
  user-drag: none;
  background-color: #000000;
  color: pink;
  margin: 38px 0px 23px 0px;

  @media (max-width: ${breakpoints.largePhone}px) {
    margin: 15px 0px 10px 0px;
  }
`;

export const Message = styled.p`
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  max-width: 850px;
  margin: 15px 10px 50px 10px;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 22px;
    line-height: 1.2;
    margin: 15px 10px 40px 10px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 18px;
    line-height: 1;
    margin: 15px 10px 20px 10px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 16px;
  }
`;
