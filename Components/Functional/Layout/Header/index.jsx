import {
  Container,
  Wrapper,
  Links,
  Logo,
  Icon,
  Icons,
  MobileMenu,
  Link,
  Diamond,
  LogoWrapper,
} from "Components/Styled/Layout/Header";
import LozicIcon from "public/images/icons/Lozic.svg";
import ShoppingCart from "public/images/icons/shoppingCart.svg";
import MagGlass from "public/images/icons/mag.svg";
import hamburgerMenu from "public/images/icons/hamburger.svg";
import diamond from "public/images/icons/diamond.svg";
import { useRouter } from "next/router";
import NLink from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({ offset = 20 }) => {
  const pathname = useRouter().pathname;
  const [atTop, setTop] = useState(offset !== 0 ? true : false);

  console.log(offset);

  useEffect(() => {
    if (typeof window !== "undefined" && offset !== 0) {
      window.addEventListener("scroll", () =>
        setTop(window.pageYOffset < offset)
      );
    }
  }, []);

  return (
    <Container switch={atTop}>
      <Wrapper>
        <NLink href="/">
          <LogoWrapper>
            <Logo src={LozicIcon.src} switch={atTop} />
          </LogoWrapper>
        </NLink>
        <Links switch={atTop}>
          <Link href="/blog">
            News
            {pathname.includes("blog") && <Diamond src={diamond.src} />}
          </Link>
          <Link href="/shop">
            Shop {pathname.includes("shop") && <Diamond src={diamond.src} />}
          </Link>
          <Link href="/about">
            About {pathname.includes("about") && <Diamond src={diamond.src} />}
          </Link>
          <Link href="/contact">
            Contact
            {pathname.includes("contact") && <Diamond src={diamond.src} />}
          </Link>
          <Icons>
            <Icon src={MagGlass.src} switch={atTop}></Icon>
            <Icon src={ShoppingCart.src} switch={atTop}></Icon>
          </Icons>
        </Links>
        <MobileMenu>
          <Icon src={hamburgerMenu.src} switch={atTop}></Icon>
        </MobileMenu>
      </Wrapper>
    </Container>
  );
};

export default Header;
