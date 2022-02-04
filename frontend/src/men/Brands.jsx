import { Instagram } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { brands } from "../data";

const Container = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Img = styled.img`
  width: 30%;
  position: relative;
  height: 50vh;
  object-fit: cover;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }
`;

const Brands = () => {
  return (
    <Container>
      {brands.map((i) => (
        <>
          <Img src={i.img} />
        </>
      ))}
    </Container>
  );
};

export default Brands;
