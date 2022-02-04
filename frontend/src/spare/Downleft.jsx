import styled from "styled-components";

const Container = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 80px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
const Header = styled.h1``;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const Tag = styled.p`
  margin: 15px 5px;
  padding: 5px 10px;
  border: 1px solid #000;
`;

const Downleft = () => {
  return (
    <Container>
      <Header>Products Tags</Header>
      <Wrapper>
        <Tag>TOWL</Tag>
        <Tag>SHOES</Tag>
        <Tag>COAT</Tag>
        <Tag>DRESSES</Tag>
        <Tag>TROUSER</Tag>
        <Tag>BACKPACK</Tag>
      </Wrapper>
    </Container>
  );
};

export default Downleft;
