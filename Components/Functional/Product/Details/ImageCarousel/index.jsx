import {
  Container,
  ImageWrapper,
  Image,
  Indicators,
  Dot,
  Right,
  Left,
  Arrow,
  Icon,
} from "Components/Styled/Product/Details/ImageCarousel";
import product from "public/images/Shop/product.png";
import left from "public/images/icons/leftArrow2.svg";
import right from "public/images/icons/rightArrow2.svg";

const ImageCarousel = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={product.src} draggable="false" />
        <Left>
          <Arrow>
            <Icon src={left.src} draggable="false" />
          </Arrow>
        </Left>
        <Right>
          <Arrow>
            <Icon src={right.src} draggable="false" />
          </Arrow>
        </Right>
      </ImageWrapper>

      <Indicators>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
      </Indicators>
    </Container>
  );
};

export default ImageCarousel;
