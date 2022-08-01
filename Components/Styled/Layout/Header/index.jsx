import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-centent: center;
  user-select: none;
  user-drag: none;
  top: 0px;

  z-index: 100;
  height: 80px;
  left: 0px;
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(4, 4, 4, 1) 70%,
    rgba(4, 4, 4, 0) 71%
  );
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${breakpoints.maxWidth}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 20px;
`;

export const Links = styled.div`
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  @media (max-width: ${breakpoints.largePhone}px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  margin-right: 15px;
  @media (min-width: ${breakpoints.largePhone}px) {
    display: none;
  }
`;
export const Logo = styled.img`
  width: 60.12px;
  height: 18.82px;
  cursor: pointer;
  user-drag: none;
  margin: 0px 0px 0px 20px;
`;
export const Link = styled.a`
  font-size: 16px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin: 0px 40px 0px 0px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 15px;
`;

export const Icon = styled.a`
  mask-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  mask-position: center;
  mask-repeat: no-repeat;
  width: 20px;
  cursor: pointer;
  user-drag: none;
  background-color: white;
  margin: 0px 15px 0px 0px;

  object-fit: cover;
`;
