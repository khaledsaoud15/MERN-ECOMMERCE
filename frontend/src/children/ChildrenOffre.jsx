import { ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { children } from "../data";

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 100px;
  padding: 40px 0;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  gap: 30px;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 250px);
  }
  @media (max-width: 480px) {
    grid-template-columns: 80%;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  background: ${(props) => props.bg};
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.5;
`;
const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  letter-spacing: 5px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const ChildrenOffre = () => {
  return (
    <Container>
      <Wrapper>
        {children.map((i, index) => (
          <Card key={index} bg={i.bg}>
            <Img src={i.img} />
            <Title>{i.title}</Title>
            <Button>
              Take A Look <ArrowRightOutlined />
            </Button>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ChildrenOffre;
