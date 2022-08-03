import {
  Container,
  Title,
  Input,
  RangeSlider,
} from "Components/Styled/Shop/Sidebar";
import Category from "./Category";
import { useState } from "react";
import Slider from "react-rangeslider";

import { Title as RangeTitle } from "Components/Styled/Shop/Sidebar/Category";
const Sidebar = () => {
  const [query, setQuery] = useState(() => "");
  const [slider, setSlide] = useState(10);
  const min = 0;
  const max = 1000;
  const handleChange = (e) => {
    if (!isNaN(Number(e))) {
      setSlide(e);
    }
  };

  const sidebar = [
    {
      category: "By Vehicle",
      items: [
        { name: "Accent", quanity: 80, callback: () => {} },
        { name: "Elantra", quanity: 144, callback: () => {} },
        { name: "Forte", quanity: 30, callback: () => {} },
        { name: "Genesis", quanity: 8, callback: () => {} },
        { name: "Kona", quanity: 100, callback: () => {} },
      ],
    },
    {
      category: "By Parts",
      items: [
        { name: "Accessories", quanity: 80, callback: () => {} },
        { name: "BOV/WGA/FMIC/TURBO", quanity: 144, callback: () => {} },
        { name: "Brakes", quanity: 30, callback: () => {} },
        { name: "Cleaning Kits", quanity: 8, callback: () => {} },
        { name: "Engine", quanity: 100, callback: () => {} },
      ],
    },
    {
      category: "By Brand",
      items: [
        { name: "Accent", quanity: 80, callback: () => {} },
        { name: "Elantra", quanity: 144, callback: () => {} },
        { name: "Accessories", quanity: 80, callback: () => {} },
        { name: "BOV/WGA/FMIC/TURBO", quanity: 144, callback: () => {} },
        { name: "Forte", quanity: 30, callback: () => {} },
        { name: "Genesis", quanity: 8, callback: () => {} },
        { name: "Kona", quanity: 100, callback: () => {} },
      ],
    },
  ];
  return (
    <Container>
      <Title>Filter Products</Title>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type={"text"}
        placeholder="Search Item"
      />
      {sidebar.map((element, index) => {
        return (
          <Category
            key={index}
            items={element.items}
            title={element.category}
          />
        );
      })}
      <RangeTitle>Price Range</RangeTitle>
      <RangeSlider>
        <Slider
          min={min}
          max={max}
          step={50}
          tooltip={false}
          value={slider.toString()}
          onChangeStart={(e) => handleChange(e)}
          onChange={(e) => handleChange(e)}
          onChangeComplete={(e) => handleChange(e)}
        />
        <div>
          Price: ${slider.toString()} - ${max}
        </div>
      </RangeSlider>
    </Container>
  );
};
export default Sidebar;
