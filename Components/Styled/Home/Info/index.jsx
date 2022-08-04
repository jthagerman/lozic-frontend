import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  color: white;
  padding: 70px 100px;
  background-color: ${(props) => props.theme.blackBG};
  @media (max-width: ${breakpoints.laptop}px) {
    padding: 60px 3.25%;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    padding: 20px 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  margin: 0px 0px 10px 0px;

  flex: 1;
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  min-width: 400px;
  width: 400px;
  flex-direction: column;
  margin: 5px 10px;
  @media (max-width: ${breakpoints.mobile}px) {
    min-width: 250px;
    width: 100%;
  }
`;

export const BigText = styled.div`
  font-size: 54px;
  font-weight: 700px;
  font-family: "CabinetGrotesk-Bold";

  @media (max-width: ${breakpoints.laptop}px) {
    font-size: 48px;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 30px;
  }
`;

export const Number = styled.div`
  font-size: 54px;
  font-weight: 700px;
  font-family: "CabinetGrotesk-Bold";
  @media (max-width: ${breakpoints.laptop}px) {
    font-size: 48px;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 30px;
  }
`;
export const Plus = styled.span`
  margin-right: 5px;
  color: ${(props) => props.theme.orange};
`;
export const SubRow = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  justify-content: space-between;
  margin: 10px 20px 20px 20px;
  padding: 0px 0px 5px 0px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.grayLine};

  @media (max-width: ${breakpoints.mobile}px) {
    min-width: 250px;
    width: 100%;
    margin: 10px 20px 20px 0px;
  }
`;
export const Text = styled.div`
  max-width: 240px;
  font-size: 18px;
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 14px;
    margin: 0px 0px 0px 10px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  max-width: 480px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.095em;
`;

export const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: white;
  text-decoration: none;
  width: 188px;
  height: 40px;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      rgba(242, 106, 49, 0.2),
      rgba(228, 101, 47, 255)
    )
    1;

  filter: drop-shadow(0px 0px 18px rgba(250, 255, 1, 0.42));
`;

export const Explore = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.095em;
  margin: 0px 0px 20px 0px;
`;
