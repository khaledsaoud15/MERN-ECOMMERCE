import styled from "styled-components";
import header from "../images/header-img.png";
const Container = styled.div`
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
    gap: 10px;
  }
`;
const Content = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  ::after {
    content: "";
    width: 20%;
    height: 2px;
    position: absolute;
    top: -10%;
    left: 0;
    background: #df1111;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 90%;
  }
`;
const Header = styled.h1`
  font-size: 45px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const Subheader = styled.p`
  color: #df1111;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  line-height: 25px;
  margin: 20px 0;
`;
const Button = styled.button`
  padding: 20px 30px;
  cursor: pointer;
  background: #000;
  color: #fff;
  outline: none;
  border: none;
`;
const Img = styled.img`
  margin-top: auto;
  height: 100%;
  @media (max-width: 768px) {
    grid-row: 1;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: 0;
  }
`;

const SpecialOffre = () => {
  return (
    <Container>
      <Content>
        <Subheader>SUMMER COLLECTION</Subheader>
        <Header>FALL-LATEST COLLECTION 2022</Header>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus
          recusandae est impedit aliquam dolores molestiae nemo pariatur, minima
          earum, modi quo in at autem minus tenetur tempora. Inventore, quo.
        </Desc>
        <Button>SHOP NOW</Button>
      </Content>
      <Img src={header} />
    </Container>
  );
};

export default SpecialOffre;
