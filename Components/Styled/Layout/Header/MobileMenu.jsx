import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: white;
  z-index: 4;
  top: 60px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 0px 15px;

  animation: slide 0.1s ease-in;

  @keyframes slide {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0%);
    }
  }
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  margin: 0px 0px 30px 0px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
`;
export const Input = styled.input`
  height: 36px;
  outline: none;
  border: 1px solid rgba(219, 219, 219, 1);
  padding: 0px 13px;
  margin: 10px 0px 20px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #777777;
  ::placeholder {
    color: color: ${(props) => props.theme.grayText};
    opacity: 1;
  }
`;
