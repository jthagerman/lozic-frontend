import {
  Container,
  Heading,
  Subheading,
} from "Components/Styled/Common/Headers/TextHeader";

const TextHeader = ({ title, subtitle }) => {
  return (
    <Container>
      {title && <Heading>{title}</Heading>}
      {subtitle && <Subheading>{subtitle}</Subheading>}
    </Container>
  );
};

export default TextHeader;
