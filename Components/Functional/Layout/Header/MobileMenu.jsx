import {
  Container,
  Input,
  Link,
  Links,
} from "Components/Styled/Layout/Header/MobileMenu";

const MobileMenu = () => {
  return (
    <Container>
      <Links>
        <Input placeholder="search"></Input>
        <Link href="/chart">Chart</Link>
        <Link href="/blog">News</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </Links>
    </Container>
  );
};

export default MobileMenu;
