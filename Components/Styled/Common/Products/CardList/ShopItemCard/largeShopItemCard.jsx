import styled from "styled-components";

export const Container = styled.div`
  aspect-ratio: 37 / 43;
  background-color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
`;

export const ImageWrapper = styled.div`
  height: 60%;
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  background-repeat: no-repeat;
  user-drag: none;
  object-fit: cover;

  overflow: hidden;
`;
export const Image = styled.img``;
export const Category = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin: 2px 0px 7px 0px;
`;
export const Description = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: inherit;
  text-decoration: none;
  /* :hover {
    text-decoration: underline;
  } */
`;
export const Price = styled.div`
  font-weight: 700;
  font-family: "CabinetGrotesk-Bold";
  font-size: 18px;
  color: ${(props) => props.theme.orange};
`;
export const Sale = styled.s`
  color: rgba(122, 122, 122, 1);
  font-weight: 400;
  opacity: 0.5;
  font-size: 16px;

  margin: 0px 0px 0px 10px;
`;
export const SaleBanner = styled.div`
  position: absolute;
  top: 15px;
  left: 0px;
  color: white;
  padding: 4px 10px;
  background-color: ${(props) => props.theme.orange};
  font-weight: 500;
  font-size: 17.8667px;
`;

export const Icons = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  bottom: 12px;
`;

export const Cart = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

export const Wrapper = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  padding: 0px 12px;
  position: relative;
`;

export const Pi = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PriceWrapper = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: row;
  /* align-items: flex-end; */
  justify-contents: flex-start;
  width: 100%;
  height: max-content;
  margin: 0px 0px 15px 0px;
  flex: 10;
  border: 1px solid pink;
`;
