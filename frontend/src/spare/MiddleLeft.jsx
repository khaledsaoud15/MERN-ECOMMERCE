import styled from "styled-components";
import { blog } from "../data";

const Container = styled.div``;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 250px;
  justify-content: center;
  margin-right: 50px;
`;
const Grid = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;
const Img = styled.img`
  width: 20%;
  height: 10vh;
  object-fit: cover;
  margin-right: 20px;
`;
const Content = styled.div``;
const Title = styled.h1`
  font-size: 20px;
`;
const Date = styled.p``;

const MiddleLeft = () => {
  return (
    <Container>
      <Wrapper>
        {blog.slice(0, 4).map((i) => (
          <Grid>
            <Img src={i.img} />
            <Content>
              <Title>{i.title}</Title>
              <Date>
                <span style={{ color: "#ff0f0f", fontWeight: "700" }}>
                  FASHION
                </span>{" "}
                {i.date}
              </Date>
            </Content>
          </Grid>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MiddleLeft;
