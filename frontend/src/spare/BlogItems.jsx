import { blog } from "../data";
import styled from "styled-components";
import { CalendarViewDaySharp, DateRange } from "@material-ui/icons";

const Container = styled.div`
  margin: 80px 0;
  flex: 3;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  gap: 20px;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 300px;
  }
`;
const Grid = styled.div``;
const Img = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;
const Content = styled.div`
  padding: 0 10px;
`;
const Date = styled.p`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 25px;
  margin: 10px 0;
  font-weight: 400;
  :first-letter {
    font-size: 35px;
    font-weight: 700;
    color: #ff0f0f;
  }
`;
const Desc = styled.p``;

const BlogItems = () => {
  return (
    <Container>
      <Wrapper>
        {blog.slice(0, 8).map((i) => (
          <Grid key={i.id}>
            <Img src={i.img} />
            <Content>
              <Date>
                {" "}
                <DateRange style={{ marginRight: "10px", color: "#ff0f0f" }} />
                {i.date}
              </Date>
              <Title>{i.title}</Title>
              <Desc>{i.desc}</Desc>
            </Content>
          </Grid>
        ))}
      </Wrapper>
    </Container>
  );
};

export default BlogItems;
