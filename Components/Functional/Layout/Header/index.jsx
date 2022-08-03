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
} from "Components/Styled/Layout/Header";
import LozicIcon from "public/images/icons/Lozic.svg";
import ShoppingCart from "public/images/icons/shoppingCart.svg";
import MagGlass from "public/images/icons/mag.svg";
import hamburgerMenu from "public/images/icons/hamburger.svg";
import diamond from "public/images/icons/diamond.svg";
import { useRouter } from "next/router";

const Header = () => {
  const pathname = useRouter().pathname;

  console.log(pathname);
  return (
    <Container>
      <Wrapper>
        <a href="/">
          <Logo src={LozicIcon.src} />
        </a>
        <Links>
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
            <Icon src={MagGlass.src}></Icon>
            <Icon src={ShoppingCart.src}></Icon>
          </Icons>
        </Links>
        <MobileMenu>
          <Icon src={hamburgerMenu.src}></Icon>
        </MobileMenu>
      </Wrapper>
    </Container>
  );
};

export default Header;
