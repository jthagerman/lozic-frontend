import {
  Container,
  Title,
  List,
} from "Components/Styled/Shop/Sidebar/Category";
import Checkbox from "Components/Functional/Common/Inputs/Checkbox";
const Category = ({ title, items }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {items.map((el, index) => {
          return (
            <Checkbox
              key={index}
              text={el.name}
              labelMarginLeft="17px"
              callback={el.callback}
              quanity={el.quanity}
            />
          );
        })}
      </List>
    </Container>
  );
};

export default Category;
