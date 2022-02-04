import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import DiscountProduct from "./DiscountProduct";
import { ArrowDownwardSharp, ArrowUpwardSharp } from "@material-ui/icons";

const Container = styled.div`
  margin-top: 80px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
  gap: 50px;
  width: 100%;
  height: 100%;
  @media (max-width: 999px) {
    grid-template-columns: 300px 300px;
  }
  @media (max-width: 560px) {
    grid-template-columns: 80%;
  }
  margin: 20px auto;
`;

const Header = styled.h1`
  flex: 1;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Content = styled.div`
  width: 65%;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 5px;
    padding: 5px;
  }
`;
const Option = styled.option``;

const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const ArrowDownCmp = styled.div`
  text-align: center;
  margin: 80px;
  cursor: pointer;
`;
const Discount = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/products?category=discount"
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [products, filters]);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Content>
        <Header>Discount</Header>
        <Filters>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>brown</Option>
            <Option>purple</Option>
            <Option>orange</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filters>
      </Content>
      <Wrapper>
        {seeAll
          ? filteredProducts.map((item) => (
              <DiscountProduct item={item} key={item.id} />
            ))
          : filteredProducts
              .slice(0, 6)
              .map((item) => <DiscountProduct item={item} key={item.id} />)}
      </Wrapper>
      <ArrowDownCmp onClick={() => setSeeAll(!seeAll)}>
        {seeAll ? <ArrowUpwardSharp /> : <ArrowDownwardSharp />}
      </ArrowDownCmp>
    </Container>
  );
};

export default Discount;
