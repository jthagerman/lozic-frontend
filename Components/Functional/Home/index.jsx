import FAQs from "./FAQs";
import Clients from "./Clients/index.jsx";
import { Container } from "Components/Styled/Home";
import Info from "./Info";
import Featured from "./Featured";
import Hero from "./Hero";
const Home = () => {
  return (
    <Container>
      <Hero />
      <Featured />
      <Info />
      <FAQs />
      <Clients />
    </Container>
  );
};

export default Home;
