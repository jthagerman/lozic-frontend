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
import Button from "Components/Common/Inputs/Button/Button";

import LozicIcon from "public/images/icons/Lozic.svg";
import React from "react";

const links = [
  {
    columnName: "Page Name",
    pages: [
      { title: "Page Name Here", link: "/" },
      { title: "Page Name Here", link: "/" },
      { title: "Page Name Here", link: "/" },
    ],
  },
  {
    columnName: "Page Name",
    pages: [
      { title: "Page Name Here", link: "/" },
      { title: "Page Name Here", link: "/" },
    ],
  },
  {
    columnName: "Page Name",
    pages: [
      { title: "Page Name Here", link: "/" },
      { title: "Page Name Here", link: "/" },
      { title: "Page Name Here", link: "/" },
      { title: "Page Name Here", link: "/" },
    ],
  },
];

const PageFooter = () => {
  return (
    <Footer>
      <Row>
        <Section>
          <Title>We are Lozic</Title>
          <Subtitle>
            We design and create products with fully backed research ready for
            the world to enjoy and use.
          </Subtitle>
        </Section>
      </Row>

      <Row>
        <Section>
          <Icon src={LozicIcon.src}></Icon>

          <Subtitle>
            We design and create products with fully backed research ready for
            the world to enjoy and use.
          </Subtitle>
          <Wrapper>
            <Input type="text" placeholder="Email" />
            <Button>Read More</Button>
          </Wrapper>
        </Section>
        <Section>
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
        <Copyright>© Lozic 2022</Copyright>
      </Row>
    </Footer>
  );
};

export default PageFooter;
