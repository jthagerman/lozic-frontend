import { PriceWrapper } from "Components/Styled/Common/Products/CardList/ShopItemCard";
import {
  Container,
  Image,
  Category,
  Description,
  Price,
  Sale,
  SaleBanner,
  ImageWrapper,
  Icons,
  Wrapper,
} from "Components/Styled/Common/Products/CardList/ShopItemCard";
import image1 from "public/images/Shop/1.png";

const ShopItemCard = ({
  like,
  image,
  price,
  originalPrice,
  category,
  salePercent,
  description,
  link,
}) => {
  return (
    <Container>
      <ImageWrapper>
        {image && <Image loading="lazy" alt="description" src={image} />}
        {salePercent && <SaleBanner>-{salePercent}%</SaleBanner>}
        <Icons>
          <div>s</div>
          <div>h</div>
        </Icons>
      </ImageWrapper>
      <Wrapper>
        {category && <Category>{category.toUpperCase()}</Category>}
        {description && <Description href={link}>{description}</Description>}

        <PriceWrapper>
          <Price>${price}</Price>
          {originalPrice && <Sale>${originalPrice}</Sale>}
        </PriceWrapper>
      </Wrapper>
    </Container>
  );
};

export default ShopItemCard;
