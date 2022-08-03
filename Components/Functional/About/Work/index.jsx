import TextHeader from "Components/Functional/Common/Headers/TextHeader";
import {
  Container,
  Wrapper,
  Image,
  ImageWrapper,
  Logo,
  Message,
} from "Components/Styled/About/Work";
import team from "public/images/About/team.png";
import logo from "public/images/icons/LozicBlack.svg";

const Work = () => {
  return (
    <Container>
      <TextHeader
        padding="50px 0px 50px 0px"
        title="Work at "
        titleOrange="LOZIC"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros lectus tellus eget massa donec eleifend. Duis quis porta sed erat."
      ></TextHeader>

      <Wrapper>
        <ImageWrapper>
          <Image src={team.src} />
        </ImageWrapper>
        <Logo src={logo.src} />
        <Message>
          Our technologies connect people all around the world, creating
          opportunities and giving a voice to billions.
        </Message>
      </Wrapper>
    </Container>
  );
};

export default Work;
