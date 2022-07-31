import {
  Container,
  Image,
  Heading,
  Subheading,
} from "Components/Styled/Common/Images/ImageWithText";

const ImageWithText = ({ heading, subheading, image }) => {
  if (!image) return null;

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
      <Image src={image}></Image>
    </Container>
  );
};

export default ImageWithText;
