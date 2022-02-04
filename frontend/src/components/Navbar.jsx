import { Badge } from "@material-ui/core";
import { Close, Menu, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  padding: 0 80px;
  z-index: 9999;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  @media (max-width: 480px) {
    padding: 0 40px;
  }
  @media (max-width: 999px) {
    padding: 0 40px;
  }
  border-bottom: 1px solid #ccc;
`;
const Logo = styled.h1`
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-right: auto;
    position: absolute;
    top: 80px;
    left: 0%;
    transition: max-height 0.5s ease;
    max-height: ${(props) => (props.isOpen ? "400px" : "0")};
    overflow: hidden;
    width: 100%;
    background: #fff;
  }
`;
const Buttons = styled.div`
  margin-right: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
const Button = styled.button`
  margin-right: 8px;
  padding: 10px 20px;
  border: 1px solid #000;
  background: none;
  font-weight: 700;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;
const LinkTo = styled(Link)`
  margin-right: 8px;
  text-decoration: none;
  padding: 10px 20px;
  color: #000;
  border: 1px solid #000;
  background: none;
  font-weight: 700;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;
const MenuLinks = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  margin-right: 15px;
  font-weight: 700;
  color: #000;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;
const Blank = styled.p`
  margin-right: 15px;
  font-weight: 700;
  color: #000;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;
const Icon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
  }
`;

const LinkToCart = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #000;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handlLogout = () => {
    dispatch(logout());
  };
  console.log(user);
  return (
    <Container>
      <Logo>EVELIN SHOP</Logo>
      <Icon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <Close /> : <Menu />}
      </Icon>
      <Content isOpen={isOpen}>
        <MenuLinks>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/men">Men</MenuLink>
          <MenuLink to="/women">Women</MenuLink>
          <MenuLink to="/blog">Blog</MenuLink>
          <MenuLink to="/about">About us</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
        </MenuLinks>
        <Buttons>
          {user ? (
            <Button onClick={() => handlLogout()}>logout</Button>
          ) : (
            <>
              <LinkTo to="/login">LOGIN</LinkTo>
              <LinkTo to="/register">REGISTER</LinkTo>
            </>
          )}
        </Buttons>
        <LinkToCart to="/cart">
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </LinkToCart>
      </Content>
    </Container>
  );
};

export default Navbar;
