import {
  Container,
  Heading,
  Subheading,
} from "Components/Styled/Common/Headers/TextHeader";

const TextHeader = ({ title, subtitle, padding, titleOrange }) => {
  return (
    <Container padding={padding}>
      {title && (
        <Heading>
          {title}
          {titleOrange && <span>{titleOrange}</span>}
        </Heading>
      )}
      {subtitle && <Subheading>{subtitle}</Subheading>}
    </Container>
  );
};

export default TextHeader;
