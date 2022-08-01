import {
  Container,
  Image,
  Heading,
  Subheading,
  Wrapper,
} from "Components/Styled/Common/Images/ImageWithText";

const ImageWithText = ({ heading, subheading, image, author }) => {
  if (!image) return null;

  return (
    <Container>
      <Wrapper>
        <Heading>{heading}</Heading>
        <Subheading>
          <div>{author}</div>
          {subheading}
        </Subheading>
      </Wrapper>

      <Image src={image}></Image>
    </Container>
  );
};

export default ImageWithText;
