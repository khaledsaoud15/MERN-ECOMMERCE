import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import google from "../images/google.png";
import ContactLeft from "../spare/ContactLeft";
import ContactRight from "../spare/ContactRight";

const Container = styled.div`
  overflow: hidden;
`;
const GoogleImage = styled.div`
  width: 80%;
  padding: 30px;
  margin: 0 auto;
`;
const Img = styled.img`
  width: 100%;
`;

const ContactGrid = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Contact = () => {
  return (
    <>
      <Navbar />
      <Container>
        <GoogleImage>
          <Img src={google} />
        </GoogleImage>
        <ContactGrid>
          <ContactLeft />
          <ContactRight />
        </ContactGrid>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
