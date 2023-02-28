import {
  Footer,
  Title,
  Section,
  Subtitle,
  Copyright,
  Icon,
  Row,
  LinkColumn,
  LinkLabel,
  LinkItem,
  Links,
  Input,
  Wrapper,
} from "Components/Styled/Layout/Footer";
import Button from "Components/Functional/Common/Inputs/Button/Button";

import LozicIcon from "public/images/icons/Lozic.svg";
import React from "react";

const links = [
  {
    columnName: "Shopping",
    pages: [
      { title: "ECU Tunes", link: "/shop" },
      { title: "TCU Tunes", link: "/shop" },
      { title: "Performance Parts", link: "/shop" },
    ],
  },
  {
    columnName: "Company",
    pages: [
      { title: "About US", link: "/about" },
      { title: "News", link: "/blog" },
      { title: "Contact", link: "/contact" },
    ],
  },
];

const PageFooter = () => {
  return (
    <Footer>
      {/*<Row border={true}>*/}
      {/*  <Section>*/}
      {/*    <Title>We are Lozic</Title>*/}
      {/*    <Subtitle>*/}
      {/*      We design and create products with fully backed research ready for*/}
      {/*      the world to enjoy and use.*/}
      {/*    </Subtitle>*/}
      {/*  </Section>*/}
      {/*</Row>*/}

      <Row>
        <Section>
          <Icon src={LozicIcon.src}></Icon>

          <Subtitle>
            We design and create products with fully backed research ready for
            the world to enjoy and use.
          </Subtitle>
          <Wrapper>
            <Input type="text" placeholder="Email" />
            <Button>Stay Informed</Button>
          </Wrapper>
        </Section>
        <Section alignRight>
          <Links>
            {links.map((element, index) => {
              return (
                <LinkColumn key={index}>
                  <LinkLabel>{element.columnName}</LinkLabel>
                  {element.pages.map((el, index) => {
                    return (
                      <LinkItem key={index} href={el.link}>
                        {el.title}
                      </LinkItem>
                    );
                  })}
                </LinkColumn>
              );
            })}
          </Links>
        </Section>
      </Row>
      <Row border={true} padding={"0px"}>
        <Copyright>© Lozic {new Date().getFullYear()}</Copyright>
      </Row>
    </Footer>
  );
};

export default PageFooter;
