import styled from "styled-components";

const Container = styled.div`
  margin: 150px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 80vh;
  gap: 20px;
  @media (max-width: 999px) {
    grid-template-columns: 1fr;
    height: 100vh;
    gap: 50px;
  }
`;
const Img = styled.img`
  width: 80%;
  margin: 0 auto;
`;
const Content = styled.div`
  width: 80%;
  @media (max-width: 999px) {
    margin: 0 auto;
  }
`;
const Header = styled.h1`
  font-size: 45px;
  font-weight: 400;
`;
const Desc = styled.p`
  line-height: 25px;
  margin: 20px 0;
`;
const Button = styled.button`
  border: 1px solid #000;
  background: transparent;
  padding: 10px 20px;
  font-weight: 700;
  cursor: pointer;
`;

const Offre = () => {
  return (
    <Container>
      <Img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      <Content>
        <Header>
          Great Discount <b>60%</b> OFF
        </Header>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque ab
          doloribus, laborum voluptas commodi deserunt rerum voluptatem tempora
          adipisci molestias ipsam ipsa vitae enim. Minima molestias temporibus
          eum. Enim nihil, porro veritatis reiciendis facere optio quas
          consectetur aperiam odio pariatur ad nobis aliquam suscipit rem at
          fugiat quisquam dolorum.
        </Desc>
        <Button>BUY NOW</Button>
      </Content>
    </Container>
  );
};

export default Offre;
