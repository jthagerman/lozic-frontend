import {
  Container,
  Form,
  InputBoxes,
  Input,
  Select,
  TextArea,
  ButtonWrapper,
  Checkbox,
  Box,
} from "Components/Styled/Contact";
import TextHeader from "../Common/Headers/TextHeader";
import Button from "../Common/Inputs/Button/Button";

const Contact = () => {
  return (
    <Container>
      <TextHeader
        padding="50px 0px 20px 0px"
        title="Contact Us"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros lectus tellus eget massa donec eleifend. Duis quis porta sed erat."
      ></TextHeader>
      <Form>
        <InputBoxes>
          <Input
            type="text"
            placeholder="Full Name"
            onChange={() => {}}
          ></Input>
          <Input type="text" placeholder="Car Name" onChange={() => {}}></Input>
          <Input
            type="text"
            placeholder="Full Name"
            onChange={() => {}}
          ></Input>
          <Select placeholder="x" defaultValue="Select Service">
            <option value="p"></option>
            <option value="x">-</option>
            <option value="y">-</option>
            <option value="z">-</option>
          </Select>
          <Input type="text" placeholder="Phone Number"></Input>
        </InputBoxes>
        <Box>
          <Checkbox
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></Checkbox>
          <label htmlFor="vehicle1">Button</label>
        </Box>
        <Box>
          <Checkbox
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></Checkbox>
          <label htmlFor="vehicle1">Button</label>
        </Box>

        <TextArea value="More Info" onChange={() => {}}></TextArea>
        <ButtonWrapper>
          <Button>Contact</Button>
        </ButtonWrapper>
      </Form>
    </Container>
  );
};

export default Contact;
