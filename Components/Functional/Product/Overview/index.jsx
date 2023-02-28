import { Container, TabBar, Tab } from "Components/Styled/Product/Overview";
import { useState } from "react";
import Description from "Components/Functional/Product/Overview/Description";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";
const Overview = ({ data }) => {
  const [selected, setSelected] = useState(() => "Description");

  const { description, reviews } = data;
  const reviewsNum = reviews.comments.length ?? 0;

  const Selected = () => {
    switch (selected) {
      case "Description": {
        return <Description {...description} />;
      }
      case "Reviews": {
        return <Reviews {...reviews} />;
      }
      case "Additional Information": {
        return <AdditionalInfo />;
      }
    }
  };
  return (
    <Container>
      <TabBar>
        <Tab
          onClick={() => setSelected("Description")}
          border={selected === "Description"}
        >
          Description
        </Tab>
        <Tab
          border={selected === "Reviews"}
          onClick={() => setSelected("Reviews")}
        >
          Reviews ({reviewsNum})
        </Tab>
        {/*<Tab*/}
        {/*  border={selected === "Additional Information"}*/}
        {/*  onClick={() => setSelected("Additional Information")}*/}
        {/*>*/}
        {/*  Additional Info*/}
        {/*</Tab>*/}
      </TabBar>
      <Selected />
    </Container>
  );
};

export default Overview;
