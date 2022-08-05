import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.div`
  max-width: 570px;
  min-width: 300px;
  @media (max-width: ${breakpoints.largePhone}px) {
    min-width: 200px;
    max-width: 100%;
    width: 100%;
  }
`;

export const Icon = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 100px;
  background-repeat: no-repeat;
  background-size: contain, cover;
  margin: 0px 15px 0px 0px;
`;
export const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
export const Stars = styled.div`
  flex-direction: row;
  display: flex;
  gap: 0px 3px;
  margin: 5px 0px 0px 0px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const GrayText = styled.span`
  font-size: 17px;
  color: #8a8a8a;
`;
export const Body = styled.p`
  margin: 10px 0px 0px 0px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;
export const Text = styled.div``;
