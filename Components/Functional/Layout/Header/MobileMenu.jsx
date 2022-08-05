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
        <Input placeholder="Search Lozic.com"></Input>
        <Link href="/chart">Cart</Link>
        <Link href="/blog">News</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </Links>
    </Container>
  );
};

export default MobileMenu;
