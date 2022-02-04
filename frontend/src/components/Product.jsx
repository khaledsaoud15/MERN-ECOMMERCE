import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  Star,
  StarOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.2); */
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Image = styled.img`
  height: 50vh;
  z-index: 1;
  width: 100%;
  object-fit: cover;
  background: #e9e7b1;
`;

const Container = styled.div`
  margin-top: 50px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  flex-direction: column;
  &:hover ${Info} {
    opacity: 1;
  }
  z-index: 999;
`;

const Icon = styled.div`
  width: 30px;
  padding: 5px;
  height: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Content = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  margin-right: auto;
  z-index: 3;
`;
const Title = styled.h1`
  margin: 10px 0;
`;
const Price = styled.del`
  margin: 8px 0;
  font-weight: 700;
`;
const Stars = styled.div``;
const Disc = styled.div`
  padding: 20px 15px;
  border-radius: 50%;
  background: #ff0f0f;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 999;
  font-size: 20px;
`;
const Change = styled.div`
  display: flex;
  align-items: center;
`;

const NewPrice = styled.p`
  margin-left: 10px;
  font-weight: 700;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <Content>
        <Title>{item.title}</Title>
        <NewPrice>{item.price}$</NewPrice>
        <Stars>
          <Star style={{ color: "yellow" }} />
          <Star style={{ color: "yellow" }} />
          <Star style={{ color: "yellow" }} />
          <StarOutline />
          <StarOutline />
        </Stars>
      </Content>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Link to={`/product/${item._id}`} style={{color:"black"}}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
