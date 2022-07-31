import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Container } from "Components/Styled/Layout";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header></Header>
      <Content>{children}</Content>

      <Footer></Footer>
    </Container>
  );
};

export default Layout;
