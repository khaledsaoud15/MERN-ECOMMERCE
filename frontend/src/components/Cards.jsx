import {
  LocalShippingOutlined,
  PaymentOutlined,
  WatchLaterOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  margin: 60px 0;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 400px;
  }
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 40px;
  border: 1px solid #000000;
`;
const Icon = styled.div`
  margin-right: 10px;
`;
const Header = styled.div``;
const Title = styled.h1`
  font-size: 20px;
`;
const Desc = styled.p``;

const Cards = () => {
  return (
    <Container>
      <Content>
        <Card>
          <Icon>
            <LocalShippingOutlined
              style={{ fontSize: "40px", color: "#ff0f0f" }}
            />
          </Icon>
          <Header>
            <Title>FREE SHIPPING</Title>
            <Desc>FORL ALL ORDERS OVER 99$</Desc>
          </Header>
        </Card>
        <Card>
          <Icon>
            <WatchLaterOutlined
              style={{ fontSize: "40px", color: "#ff0f0f" }}
            />
          </Icon>
          <Header>
            <Title>DELIVERY ON TIME</Title>
            <Desc>100% DELIVERY </Desc>
          </Header>
        </Card>
        <Card>
          <Icon>
            <PaymentOutlined style={{ fontSize: "40px", color: "#ff0f0f" }} />
          </Icon>
          <Header>
            <Title>SECURE PAYMENT</Title>
            <Desc>100% SECURE </Desc>
          </Header>
        </Card>
      </Content>
    </Container>
  );
};

export default Cards;
