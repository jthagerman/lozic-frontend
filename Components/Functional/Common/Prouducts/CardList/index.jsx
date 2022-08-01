import ShopCard from "./ItemCard";

import { Container, List } from "Components/Styled/Common/Products/CardList";

const CardList = () => {
  let products = [
    {
      category: "CAR PARTS",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500whp kia stinger",
        " Lap 3 stage 2.5 ecu tune ",
        "10 second 1/4 mile record",
      ],
    },
    {
      category: "CAR PARTS",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500whp kia stinger",
        " Lap 3 stage 2.5 ecu tune ",
        "10 second 1/4 mile record",
      ],
    },
    {
      category: "CAR PARTS",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500whp kia stinger",
        " Lap 3 stage 2.5 ecu tune ",
        "10 second 1/4 mile record",
      ],
    },
    {
      category: "CAR PARTS",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500whp kia stinger",
        " Lap 3 stage 2.5 ecu tune ",
        "10 second 1/4 mile record",
      ],
    },
    {
      category: "CAR PARTS",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500whp kia stinger",
        " Lap 3 stage 2.5 ecu tune ",
        "10 second 1/4 mile record",
      ],
    },
    {
      category: "CAR PARTS",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500whp kia stinger",
        " Lap 3 stage 2.5 ecu tune ",
        "10 second 1/4 mile record",
      ],
    },
  ];

  return (
    <Container>
      <List>
        {products.map((element, index) => {
          return <ShopCard key={index} {...element} />;
        })}
      </List>
    </Container>
  );
};
export default CardList;
