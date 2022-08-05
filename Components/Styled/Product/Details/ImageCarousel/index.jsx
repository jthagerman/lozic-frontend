import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ImageWrapper = styled.div`
  margin: 20px;
  display: grid;
  place-items: center;
  height: 90%;
  background: white;
  width: 100%;
  user-select: none;

  flex: 1;
  postion: relative;
`;

export const Image = styled.img`
  display: grid;
  place-items: center;
  max-height: 100%;
  max-width: 100%;
  flex: 1;
  padding: 10px;
`;
export const Right = styled.div`
  position: absolute;
  right: 0px;
`;
export const Left = styled.div`
  position: absolute;
  left: 0px;
`;

export const Indicators = styled.div`
  display: flex;

  gap: 0px 7px;
`;
export const Dot = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 10px;
  background-color: #cccccc;
`;
export const Icon = styled.img``;

export const Arrow = styled.div`
  width: 60px;
  height: 40px;
  background: #eeeeee;
  display: grid;
  place-items: center;
  user-select: none;
  user-drag: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  :hover {
    background: #dddddd;
  }

  :hover {
    ${Icon} {
      transform: scale(1.1);
    }
  }
`;
