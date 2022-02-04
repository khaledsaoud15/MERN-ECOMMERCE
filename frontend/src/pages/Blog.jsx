import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlogItems from "../spare/BlogItems";
import BlogLeft from "../spare/BlogLeft";

const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Blog = () => {
  return (
    <>
      <Navbar />
      <Container>
        <BlogItems />
        <BlogLeft />
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
