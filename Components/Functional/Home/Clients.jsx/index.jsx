import TextHeader from "Components/Functional/Common/Headers/TextHeader";
import ImageWithText from "Components/Functional/Common/Images/ImageWithText";
import clientImage from "public/images/icons/Home/clients.png";
import { Container } from "Components/Styled/Home/Clients";

const Clients = () => {
  return (
    <Container>
      <TextHeader
        title="Our clients speak for themselves"
        subtitle="Our clients speak for themselves"
      ></TextHeader>
      <ImageWithText
        image={clientImage.src}
        subheading={"Mark McLane Head of Diversity, Inclusion and Well-being"}
        heading="Lozic has been a critical partner in M&G’s successful implementation of initiatives to drive business performance."
      ></ImageWithText>
    </Container>
  );
};

export default Clients;
