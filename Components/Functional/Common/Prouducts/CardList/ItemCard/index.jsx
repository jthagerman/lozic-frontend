import {
  Container,
  Image,
  Category,
  Arrow,
  Item,
  ItemList,
  ItemText,
} from "Components/Styled/Common/Products/CardList/ItemCard";
import arrowIcon from "public/images/icons/itemArrow.svg";
import Button from "Components/Functional/Common/Inputs/Button/Button";

const ShopCard = ({ image, category, labels, link }) => {
  return (
    <Container>
      <Image loading="lazy" src={image} alt={category}></Image>

      <ItemList>
        <Category>{category?.toUpperCase()}</Category>
        {labels &&
          labels.map((label, index) => {
            return (
              <Item key={index}>
                <Arrow src={arrowIcon.src} />
                <ItemText>{label}</ItemText>
              </Item>
            );
          })}
      </ItemList>
      <Button href={link} width="90%" padding="0px" margin="5px 10px 19px 10px">
        Read More
      </Button>
    </Container>
  );
};

export default ShopCard;
