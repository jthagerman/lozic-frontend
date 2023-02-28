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
        subtitle="Interested in discussing with us further? Leave your information below and we will get back to you as soon as possible."
      ></TextHeader>
      <Form>
        <InputBoxes>
          <Input
            type="text"
            placeholder="First Name"
            onChange={() => {}}
          ></Input>
          <Input type="text" placeholder="Car Name" onChange={() => {}}></Input>
          <Input
            type="text"
            placeholder="Vehicle"
            onChange={() => {}}
          ></Input>
          <Select placeholder="x" defaultValue="Select Service">
            <option value="Select Service">Select Service</option>
            <option value="tuning">Tuning Questions</option>
            <option value="parts">Part Inquiries</option>
            <option value="shipping">Shipping & Refunds</option>
            <option value="other">Other</option>
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
          <label htmlFor="vehicle1">You may call or text me</label>
        </Box>

        <TextArea value="Please provide detailed information on why you are contacting us." onChange={() => {}}></TextArea>
        <ButtonWrapper>
          <Button>Contact</Button>
        </ButtonWrapper>
      </Form>
    </Container>
  );
};

export default Contact;
