import {
  Container,
  Header,
  Body,
  Icon,
  Name,
  GrayText,
  Text,
  Stars,
} from "Components/Styled/Product/Overview/Reviews/ReviewCard";
import userIcon from "public/images/icons/user.png";
import Star from "Components/Functional/Common/Star";

const ReviewCard = ({ name, rating, verified, date, review }) => {
  return (
    <Container>
      <Header>
        <Icon src={userIcon.src} draggable={false} />
        <Text>
          <Name>
            {name}
            {verified && <GrayText> (verified owner)</GrayText>}
            <GrayText> - {date}</GrayText>
          </Name>
          <Stars>
            {new Array(rating).fill("*").map((el, index) => {
              return <Star key={index} filled={true} />;
            })}
          </Stars>
        </Text>
      </Header>
      <Body>{review}</Body>
    </Container>
  );
};

export default ReviewCard;
