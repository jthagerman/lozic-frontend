import {
  Container,
  Checkout,
  Inputs as InputsWrap,
} from "Components/Styled/Product/Details/Information";
import Button from "Components/Functional/Common/Inputs/Button/Button";
import Quanity from "./Quantity";
import {Options, Title} from "@/components/Styled/Product/Details/Information/Inputs";
import Header from "@/components/Functional/Product/Details/Information/Header";
import Checkbox from "@/components/Functional/Common/Inputs/Checkbox";
import {useState} from "react";
import styled from 'styled-components'

const Select = styled.select`
  height: 38px;
  background: white;
  border: 1px solid #DBDBDB;
  color: black;
  border-radius: 0px;
`



const Dropdown = ({ title, options, defaultValue }) => {
  const [selected, setSelected] = useState(defaultValue)

  return <Container direction={"column"} flex={1}>
    <Title>{title}</Title>
    <Select>
      { options.map((option) => <option key={option} selected={selected === option}>{option}</option>) }
    </Select>
  </Container>
}

const Information = () => {
  const example = {
    title: "Kia Stinger ECU",
    price: 1490,
    description: `The ECU Tune available for the Kia Stinger can increase horsepower up to 520WHP and 630WTQ depending on vehicle modifications while maintaining reliability. To enjoy the full benefits of your ECU Tune please fill out the customization options below.`,
  };
  return (
    <Container>
      <Header {...example} />

      <InputsWrap>
        <Dropdown title={"Aggression"} options={["Low", "Medium", "High", "KILL"]} defaultValue={"Medium"} />
        <Dropdown title={"Fuel Type"} options={["87 AKI", "89 AKI", "91 AKI", "93 AKI", "91 RON", "93 RON", "98 RON", "E30", "E50", "E60+"]} defaultValue={"93 AKI"} />
        <Dropdown title={"Methanol"} options={["Not Installed", "7GPH | 440cc", "10GPH | 630cc", "12 GPH | 750cc", "14 GPH | 900cc", ">14 GPH | 900cc"]} defaultValue={"Not Installed"} />
        <Dropdown title={"RPM Limit"} options={["6000 RPM", "6250 RPM", "6500 RPM", "6750 RPM", "7000 RPM", "7250 RPM"]} defaultValue={"6750 RPM"} />
        <Dropdown title={`Boost Ready?`} options={["OFF - Recommended", "WEAK - 2000+ RPM", "WEAK - 3000+ RPM", "WEAK - 4000+ RPM", "STRONG - 2000+ RPM", "STRONG - 3000+ RPM", "STRONG - 4000+ RPM"]} defaultValue={"OFF - Recommended"}/>
        <Dropdown title={"Boost by Drivemode"} options={["No Difference between Modes", "Eco/Comfort = Stock, Sport = Full Boost", "ECO = Low, Comfort = Stock, Sport = Full Boost"]} defaultValue={"No Difference between Modes"}/>
        <Dropdown title={"Idle Stop & Go"} options={["I do not have ISG and I do not want it", "I do not have ISG and I want it", "I have ISG and I do not want it", "I have ISG and I want to keep it"]} defaultValue={"I have ISG and I do not want it"} />
        <Dropdown title={"Primary Cats"} options={["Stock", "400 Cell", "200 Cell", "100 Cell", "None/Deleted" ]} defaultValue={"Stock"} />
        <Dropdown title={"Secondary Cats"} options={["Stock", "400 Cell", "200 Cell", "100 Cell", "None/Deleted" ]} defaultValue={"Stock"} />
        <Dropdown title={"Exhaust Burbles"} options={["None", "Mild", "Reasonable", "Aggressive", "Flamethrower"]} defaultValue={"None"} />
        <Container>
          <Title>Miscellaneous Options</Title>
          <Options direction={"column"}>
          <Checkbox
              text={"Disable Cold Start?"}
              margin="10px"
              fontSize="16px"
              radioButton={false}
              labelMarginLeft="15px"
          />
          <Checkbox
              text={"I have aftermarket intakes"}
              margin="10px"
              fontSize="16px"
              radioButton={false}
              labelMarginLeft="15px"
          />
          <Checkbox
              text={"I have an aftermarket intercooler"}
              margin="10px"
              fontSize="16px"
              radioButton={false}
              labelMarginLeft="15px"
          />
          <Checkbox
              text={"I have an aftermarket exhaust"}
              margin="10px"
              fontSize="16px"
              radioButton={false}
              labelMarginLeft="15px"
          />
          <Checkbox
              text={"Use stock exhaust valves? (2020+ only)"}
              margin="10px"
              fontSize="16px"
              radioButton={false}
              labelMarginLeft="15px"
          />
          <Checkbox
              text={"Remove speed limiter?"}
              margin="10px"
              fontSize="16px"
              radioButton={false}
              labelMarginLeft="15px"
          />
          </Options>
        </Container>

      </InputsWrap>
      <Checkout>
        <Button width="300px" height="64px">
          Checkout
        </Button>
      </Checkout>
    </Container>
  );
};

export default Information;
