import styled from "styled-components";
import children from "../images/child.png";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;
const Content = styled.div`
  width: 80%;
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
  font-size: 60px;
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
  height: 100vh;
  grid-row: 1;
  @media (max-width: 768px) {
    grid-row: 1;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: 0;
  }
`;
const SubHeader = styled.p`
  color: #df1111;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const Offre = () => {
  return (
    <Container>
      <Content>
        <SubHeader>A SPECIAL OFFRE</SubHeader>
        <Header>For our little angels </Header>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus et
          modi error ex perspiciatis. Sed nemo, deserunt debitis repudiandae
          corrupti obcaecati veritatis nisi mollitia veniam commodi, a
          voluptatum possimus fugiat?
        </Desc>
        <Button>SHOP NOW</Button>
      </Content>
      <Img src={children} />
    </Container>
  );
};

export default Offre;
