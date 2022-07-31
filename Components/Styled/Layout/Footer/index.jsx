import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #060809;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1166px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  margin: 0px 20px;
  flex: 1;
  width: 100%;
  max-width: 1166px;
  flex-direction: row;
  padding-bottom: ${(props) => (props.padding ? props.padding : "40px")};
  border-bottom: ${(props) => (!props.border ? "1px solid #4b4b4b" : "none")};
  border-top: ${(props) => (!props.border ? "1px solid #4b4b4b" : "none")};
`;

export const Title = styled.div`
  font-size: 50.78px;
  font-weight: 500;
  margin: 45px 0px 0px 0px;
`;
export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.095em;
  max-width: 550px;

  margin: 15px 0px 20px 0px;
  padding: 0px;
`;

export const Copyright = styled.div`
  font-family: "RedHatDisplay-Regular" serif;
  font-weight: 400;
  display: flex;
  flex;
  font-size: 16px;
  
  max-width: 1166px;
  padding: 7px 0px;
`;

export const Icon = styled.img`
  height: 36.8194580078125px;
  width: 117.63021850585938px;
  margin: 40px 0px 0px 0px;
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
  gap: 10px 0px;
`;
export const LinkLabel = styled.label`
  font-family: "RedHatDisplay-Bold" serif;
  font-size: 16px;
  font-weight: 700;
`;
export const LinkItem = styled.a`
  list-style-type: none;
  padding: 0;
  margin: 0;
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
  margin: 0px 0px;
  color: #4b4b4b;
  letter-spacing: 0.095em;
  font-size: 18px;
  height: 48px;
  min-width: 300px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  flex-wrap: wrap;
  gap: 0px 20px
  overfow: hidden;
`;
