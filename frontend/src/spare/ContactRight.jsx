import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin-top: 50px;
  margin-right: 80px;
  margin-bottom: 80px;
  width: 100%;
  @media (max-width: 768px) {
    margin-right: auto;
    margin-left: 20px;
  }
`;
const Header = styled.h1`
  font-size: 25px;
`;
const Desc = styled.p`
  margin: 20px 0;
  color: #6e6e6e;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputsUp = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    width: 85%;
  }
`;
const Input = styled.input`
  width: 50%;
  padding: 15px;
`;
const InputDown = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 15px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Button = styled.button`
  padding: 15px;
  width: 30%;
  margin-top: 35px;
  border: none;
  outline: none;
  background: #ff0f0f;
  color: #fff;
  -webkit-box-shadow: 0px 4px 19px -2px #b0b0b0;
  box-shadow: 0px 4px 19px -2px #b0b0b0;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ContactRight = () => {
  return (
    <Container>
      <Header>LEAVE A COMMENT</Header>
      <Desc>Our staff will call back later and answer your questions.</Desc>
      <Inputs>
        <InputsUp>
          <Input type="text" placeholder="Your Name" />
          <Input type="text" placeholder="Your Email" />
        </InputsUp>
        <InputDown rows="15" cols="50">
          Your Message
        </InputDown>
        <Button>Send the Comment</Button>
      </Inputs>
    </Container>
  );
};

export default ContactRight;
