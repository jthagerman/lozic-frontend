import styled from "styled-components";

export const Image = styled.img`
  /* aspect-ratio: 370 / 287; */
  display: flex;
  width: 100%;
  height: 40.75%;
  background-repeat: no-repeat;
  user-drag: none;
  object-fit: cover;
  transition: filter 0.2s ease-in;

  position: relative;
  max-height: 700px;
  :hover {
    filter: brightness(1.2);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;

  bottom: 0px;
  color: white;
  z-index: 10;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.h1`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  gap: 30px 0px;
  width: 100%;
  max-width: 1175px;
  padding: 20px 0px 40px 0px;
  span {
    max-width: 660px;
  }
`;

export const Orange = styled.span`
  color: ${(props) => props.theme.orange};
`;
export const Sale = styled.div`
  font-weight: 500;
  font-size: 54px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1175px;
  padding: 30px 0px;
  border-bottom: 1px solid #e4e4e4;
`;

export const Message = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  max-width: 550px;
`;