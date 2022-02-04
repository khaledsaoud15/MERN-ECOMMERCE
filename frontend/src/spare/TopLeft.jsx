import { Search } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  @media (max-width: 768px) {
      margin-bottom: 30px;
  })
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.h1`
  font-size: 35px;
  margin-left: 20px;
`;
const Inputs = styled.div`
  width: 80%;
  display: flex;
  border: 1px solid #000;
  margin-bottom: 35px;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
`;
const Button = styled.button`
  border: none;
  outline: none;
  background: #000;
  color: #fff;
`;
const Cat = styled.p`
  margin-top: 20px;
  font-weight: 700;
  color: #747474;
`;

const TopLeft = () => {
  return (
    <Container>
      <SearchBar>
        <Head>Search</Head>
        <Inputs>
          <Input type="text" placeholder="Search..." />
          <Button>
            <Search />
          </Button>
        </Inputs>
      </SearchBar>
      <Head>Ctegories</Head>
      <Cat>Fashion</Cat>
      <Cat>Travel</Cat>
      <Cat>Picnic</Cat>
      <Cat>Model</Cat>
    </Container>
  );
};

export default TopLeft;
