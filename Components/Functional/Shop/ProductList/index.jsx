import ShopItemCard from "Components/Functional/Common/Prouducts/ShopCard";
import { List } from "Components/Styled/Shop/ProductList";

const ProductList = ({ list }) => {
  return (
    <div>
      <List>
        {list.map((el, index) => (
          <ShopItemCard {...el} key={index} />
        ))}
      </List>
    </div>
  );
};

export default ProductList;
