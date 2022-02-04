import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  margin-top: 50px;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  background: #fff;
`;

const Collection = () => {
  return (
    <Container>
      <Cards>
        <Card img="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60">
          <Header>FALL COLLECTION</Header>
        </Card>
        <Card img="https://images.unsplash.com/photo-1569388330292-79cc1ec67270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
          <Header>ACCESSORIES</Header>
        </Card>
        <Card img="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60">
          <Header>SHOE SPRING</Header>
        </Card>
      </Cards>
    </Container>
  );
};

export default Collection;
