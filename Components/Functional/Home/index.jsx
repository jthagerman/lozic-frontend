import FAQs from "./FAQs";
import Clients from "./Clients.jsx";
import { Container } from "Components/Styled/Home";

const Home = () => {
  return (
    <Container>
      <FAQs />
      <Clients />
    </Container>
  );
};

export default Home;
