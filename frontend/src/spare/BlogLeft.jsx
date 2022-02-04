import styled from "styled-components";
import Downleft from "./Downleft";
import MiddleLeft from "./MiddleLeft";
import TopLeft from "./TopLeft";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  margin-top: 150px;
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 80px;
  }
`;

const BlogLeft = () => {
  return (
    <Container>
      <TopLeft />
      <MiddleLeft />
      <Downleft />
    </Container>
  );
};

export default BlogLeft;
