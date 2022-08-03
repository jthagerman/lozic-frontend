import styled from "styled-components";

export const Container = styled.div`
  aspect-ratio: 1.9 / 2.9;
  background-color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
`;

export const ImageWrapper = styled.div`
  height: 50%;
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  background-repeat: no-repeat;
  user-drag: none;
  object-fit: cover;
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
  font-size: 16px;
  line-height: 20px;
  color: inherit;
  text-decoration: none;
  /* :hover {
    text-decoration: underline;
  } */
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 16px;
`;
export const Sale = styled.s`
  color: rgba(122, 122, 122, 1);
  font-weight: 400;
  opacity: 0.5;
  font-size: 16px;
`;
export const SaleBanner = styled.div`
  position: absolute;
  top: 12px;
  left: 0px;
  color: white;
  padding: 2px 10px;
  background-color: ${(props) => props.theme.orange};
  font-weight: 500;
  font-size: 17.8667px;
`;

export const Icons = styled.div`
  position: absolute;
  top: 12px;
  right: 4px;
`;

export const Heart = styled;

export const Wrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 0px 12px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: max-content;

  margin: 0px 0px 18px 0px;
  flex: 10;
  align-self: flex-end;
  justify-self: flex-end;
`;
