import { Container, TabBar, Tab } from "Components/Styled/Product/Overview";
import { useState } from "react";
import Description from "Components/Styled/Product/Overview/Description";

const Overview = () => {
  const [selected, setSelected] = useState(() => "Description");

  const Selected = () => {
    switch (selected) {
      case "Description": {
        return <Description />;
      }
      case "Reviews": {
        return <div>reviews</div>;
      }
      case "Additional Information": {
        return <div>add info</div>;
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
          Reviews
        </Tab>
        <Tab
          border={selected === "Additional Information"}
          onClick={() => setSelected("Additional Information")}
        >
          Additional Information
        </Tab>
      </TabBar>
      <Selected />
    </Container>
  );
};

export default Overview;
