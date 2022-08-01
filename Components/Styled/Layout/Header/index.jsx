import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-centent: center;
  max-width: 1440px;
  top: 0px;

  z-index: 100;
  height: 80px;

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
  max-width: 1175px;
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
  gap: 0px 40px;
`;
export const Logo = styled.img`
  width: 60.12px;
  height: 18.82px;
  cursor: pointer;
  user-drag: none;
`;
export const Link = styled.a`
  font-size: 16px;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 18px;
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

  object-fit: cover;
`;
