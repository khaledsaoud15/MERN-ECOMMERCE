import {
  LocationOnOutlined,
  MailOutlineOutlined,
  PhoneAndroidOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin-top: 50px;
  margin-left: 80px;
  margin-bottom: 80px;
  width: 100%;
`;
const Header = styled.h1`
  font-size: 25px;
`;
const Desc = styled.p`
  width: 60%;
  margin: 20px 0;
  line-height: 25px;
  color: #6e6e6e;
`;
const Grid = styled.div`
  margin: 30px 0;
`;
const G = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 20px;
  width: 50%;
  background: #ffffff;
  -webkit-box-shadow: 0px 4px 19px -2px #b0b0b0;
  box-shadow: 0px 4px 19px -2px #b0b0b0;
`;
const Icon = styled.div``;
const Content = styled.div`
  margin-left: 30px;
`;
const Address = styled.p`
  color: #6e6e6e;
`;
const AC = styled.p``;

const ContactLeft = () => {
  return (
    <Container>
      <Header>CONTACT US</Header>
      <Desc>
        Contrary to popular belief, Lorem Ipsum is simply random text. It has
        roots in a piece of classical Latin literature from 45 BC, maki years
        old.
      </Desc>
      <Grid>
        <G>
          <Icon>
            <LocationOnOutlined
              style={{ fontSize: "40px", color: "#ff0f0f" }}
            />
          </Icon>
          <Content>
            <Address>Address:</Address>
            <AC>60-49 Road 11378 New York</AC>
          </Content>
        </G>
        <G>
          <Icon>
            <PhoneAndroidOutlined
              style={{ fontSize: "40px", color: "#ff0f0f" }}
            />
          </Icon>
          <Content>
            <Address>Phone:</Address>
            <AC>+65 11.188.888</AC>
          </Content>
        </G>
        <G>
          <Icon>
            <MailOutlineOutlined
              style={{ fontSize: "40px", color: "#ff0f0f" }}
            />
          </Icon>
          <Content>
            <Address>Email:</Address>
            <AC>EvelinShop@gmail.com</AC>
          </Content>
        </G>
      </Grid>
    </Container>
  );
};

export default ContactLeft;
