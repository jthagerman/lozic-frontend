import {
  Container,
  Wrapper,
  Links,
  Logo,
  Icon,
  Icons,
  MobileMenu,
  Link,
} from "Components/Styled/Layout/Header";
import LozicIcon from "public/images/icons/Lozic.svg";
import ShoppingCart from "public/images/icons/shoppingCart.svg";
import MagGlass from "public/images/icons/mag.svg";
import hamburgerMenu from "public/images/icons/hamburger.svg";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <a href="/">
          <Logo src={LozicIcon.src} />
        </a>
        <Links>
          <Link href="/">News</Link>
          <Link href="/">Shop</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
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
