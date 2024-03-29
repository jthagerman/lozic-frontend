import styled from "styled-components";
import breakpoints from "Context/Screen";

export const Footer = styled.footer`
  background-color: #060809;
  color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1166px;
  display: flex;
  min-width: 275px;
  flex: 1;
  flex-direction: column;
  align-items: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
  @media (max-width: ${breakpoints.content + 100}px) {
    padding: 0px 25px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    padding: 0px 5%;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0px 20px;
  flex: 1;
  width: 100%;
  max-width: 1166px;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: ${(props) => (props.padding ? props.padding : "40px")};
  border-bottom: ${(props) => (!props.border ? "1px solid #4b4b4b" : "none")};
  border-top: ${(props) => (!props.border ? "1px solid #4b4b4b" : "none")};
  @media (max-width: ${breakpoints.tablet}px) {
    padding-bottom: ${(props) => (props.padding ? props.padding : "30px")};
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    padding-bottom: ${(props) => (props.padding ? props.padding : "20px")};
  }
`;

export const Title = styled.div`
  font-size: 50.78px;
  font-weight: 500;
  margin: 45px 0px 0px 0px;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 40px;
    margin: 30px 0px 0px 0px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 24px;
  }
`;
export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.095em;
  max-width: 550px;

  margin: 15px 0px 20px 0px;
  padding: 0px;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 16px;
    margin: 12px 0px 15px 0px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 14px;
    margin: 10px 0px 10px 0px;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 13px;
  }
`;

export const Copyright = styled.div`
  font-family: "RedHatDisplay-Regular" serif;
  font-weight: 400;
  display: flex;

  font-size: 16px;

  max-width: 1166px;
  padding: 7px 0px;

  @media (max-width: ${breakpoints.content + 100}px) {
    padding: 7px 20px;
  }
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 14px;
  }
`;

export const Icon = styled.img`
  height: 36px;
  width: 117;
  margin: 40px 0px 0px 0px;
  align-self: flex-start;

  @media (max-width: ${breakpoints.mobile}px) {
    height: 18px;
    width: 60;
  }
`;

export const Links = styled.div`
  display: flex;

  flex-direction: row;

  flex-wrap: wrap;
  margin-top: 70px;
`;
export const LinkColumn = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  padding: 0px;
  min-width: 120px;
`;
export const LinkLabel = styled.label`
  font-family: "CabinetGrotesk-Bold";
  font-size: 16px;
  font-weight: 700;
  font-family: "CabinetGrotesk-Bold";
  margin: 0px 0px 10px 0px;
`;
export const LinkItem = styled.a`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin: 0px 0px 10px 0px;
  font-family: "RedHatDisplay-Regular" serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;

  :hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0px 10px;
  margin: 0px 0px 20px 0px;
  color: #4b4b4b;
  letter-spacing: 0.095em;
  font-size: 18px;
  height: 48px;
  min-width: 280px;
  @media (max-width: ${breakpoints.largePhone}px) {
    font-size: 16px;
    height: 40px;
    width: 80%;
    min-width: 200px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  flex-wrap: wrap;

  overfow: hidden;

  @media (max-width: ${breakpoints.laptop}px) {
    flex-direction: column;
  }
`;
