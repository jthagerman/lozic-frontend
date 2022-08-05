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
  position: relative;
  z-index: 100;
  height: 60px;
  left: 0px;
  position: fixed;
  top: 0;
  width: 100%;
  background: ${(props) => (props.switch ? "transparent" : "rgba(4, 4, 4, 1)")};
  transition: all 0.15s linear;
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
  color: ${(props) => (props.switch ? "rgba(4, 4, 4, 1)" : "white")};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  transition: color 0.15s linear;
  @media (max-width: ${breakpoints.largePhone - 50}px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: relative;
  display: flex;
  margin-right: 15px;
  @media (min-width: ${breakpoints.largePhone - 50}px) {
    display: none;
  }
`;

export const Link = styled.a`
  font-size: 16px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  margin: 0px 40px 0px 0px;
  display: flex;
  flex-direction: column;

  transition: color 0.15s linear;
  :hover {
    color: ${(props) => props.theme.orange};
  }
`;
export const DivWrap = styled.div`
  width: 80px;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 17px;
  margin-bottom: 3px;
  position: absolute;
`;
export const Diamond = styled.img`
  background-repeat: no-repeat;
  object-fit: cover;
  height: 8px;
  width: 8px;
  align-self: center;
`;

export const Icon = styled.a`
  mask-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  mask-position: center;
  mask-repeat: no-repeat;
  width: 20px;
  position: relative;
  height: 20px;
  cursor: pointer;
  user-drag: none;
  transition: all 0.15s linear;
  background-color: ${(props) => (props.switch ? "rgba(4, 4, 4, 1)" : "white")};
  margin: 0px 15px 0px 0px;

  transition: background-color 0.15s linear;
  :hover {
    background-color: ${(props) => props.theme.orange};
  }

  object-fit: cover;
`;

export const LogoWrapper = styled.div`
  width: 60.12px;
  height: 18.82px;
  position: relative;
  margin: 0px 0px 0px 20px;
`;

export const Logo = styled.div`
  mask-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  mask-position: center;
  mask-repeat: no-repeat;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  mask-size: contain;

  cursor: pointer;
  user-drag: none;
  background-repeat: no-repeat;

  transition: all 0.15s linear;
  background-color: ${(props) => (props.switch ? "rgba(4, 4, 4, 1)" : "white")};
`;

export const Search = styled.input.attrs({ type: "search" })`
  cursor: pointer;
  width: 280px;
  position: absolute;
  right: 45px;
  top: -3px;
  font-size: 1rem;
  border-radius: 20px;
  width: 30px;
  height: 40px;
  width: 0px;
  opacity: 0;
  border: none;
  padding: 0px 10px 0px 15px;
  z-index: 101;
  height: 30px;
  background-color: transparent;

  opacity: 1;
  :focus {
    width: 400px;
    background-color: white;
    transition: background-color, width 0.15s;
    opacity: 1;
    margin-left: 0px;
  }
  :focus,
  input:focus {
    outline: none;
    outline: 1px solid gray;
  }
`;
