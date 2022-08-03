import {
  Container,
  Image,
  Name,
  Description,
} from "Components/Styled/About/Team/Profile";

const Profile = ({ image, name, description }) => {
  return (
    <Container>
      {image && <Image src={image} />}
      {name && <Name>{name}</Name>}
      {description && <Description>{description}</Description>}
    </Container>
  );
};

export default Profile;
