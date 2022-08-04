import {
  Container,
  Title,
  Description,
} from "Components/Styled/Product/Details/Information/Header";

const Header = ({ title, description, price }) => {
  return (
    <Container>
      <Title>
        <div>{title}</div>
        <div>${price}</div>
      </Title>
      <Description>{description}</Description>
    </Container>
  );
};
export default Header;
