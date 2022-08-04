import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Container } from "Components/Styled/Layout";

const Layout = ({ children, offset }) => {
  return (
    <Container>
      <Header offset={offset} />
      <Content>{children}</Content>

      <Footer></Footer>
    </Container>
  );
};

export default Layout;
