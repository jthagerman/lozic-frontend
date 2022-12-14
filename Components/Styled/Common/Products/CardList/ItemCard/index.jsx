import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 370 / 497;
  cursor: point;
  background-color: ${(props) => props.theme.backgroundOffset};
`;

export const Image = styled.img`
  /* aspect-ratio: 370 / 287; */
  display: flex;
  width: 100%;
  height: 57.75%;
  background-repeat: no-repeat;
  user-drag: none;
  object-fit: cover;
  transition: filter 0.2s ease-in;
  :hover {
    filter: brightness(1.05);
  }
`;

export const ItemList = styled.div`
  list-style-type: none;
  flex: 1;
  margin: 17px 19px;
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
  align-self: flex-start;
`;
export const Category = styled.div`
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  margin: 0px 0px 8px 0px;
  color: ${(props) => props.theme.grayText};

  @media (max-width: ${breakpoints.largePhone}px) {
    margin: 0px 0px 6px 0px;
  }
`;
export const Item = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  flex-direction: row;
  margin: 5px 0px;

  align-items: center;

  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 14px;
  }
`;
export const ItemText = styled.div`
  margin: 0px 0px 0px 8px;
`;
export const Arrow = styled.div`
  height: 10px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  object-fit: cover;
  width: 6px;
  margin-bottom: 3px;
`;
