import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  display: flex;
  padding: 50px 20px;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Header_Content = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
const Img = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  margin: auto 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Header_Title = styled.p`
  width: 60%;
  margin: 20px auto;
  text-align: center;
  line-height: 35px;
  font-size: 25px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Header_User = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  @media (max-width: 568px) {
    width: 90%;
  }
`;
const User = styled.div``;
const User_Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;
const User_Name = styled.h1`
  font-size: 25px;
  margin-bottom: 10px;
`;
const User_Desc = styled.p`
  color: #999;
  font-weight: 700;
`;
const Count = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 10%;
    width: 70%;
    height: 1px;
    background: #000;
    @media (max-width: 768px) {
      height: 0;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Count_Card = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin: 30px 0;
  }
`;
const Num = styled.h1`
  font-size: 45px;
  margin-right: 8px;
`;
const P = styled.p`
  font-size: 20px;
  color: #999;
`;

const AboutSection = () => {
  return (
    <>
      <Container>
        <Header_Content>
          <Header_Title>
            “Going out after work? Take your butane curling iron with you to the
            office, heat it up, style your hair before you leave the office and
            you won’t have to make a trip back home.”
          </Header_Title>
          <Header_User>
            <User_Img src="https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg" />
            <User>
              <User_Name>Augusta Schultz</User_Name>
              <User_Desc>Fashion Design</User_Desc>
            </User>
          </Header_User>
        </Header_Content>
        <Img src="https://i.natgeofe.com/n/8f633a47-1da9-4873-b851-0ed1bdd93e9a/hiking-survival-day-hike-alone_4x3.jpg" />
      </Container>
      <Count>
        <Count_Card>
          <Num>102</Num>
          <P>Our Clients</P>
        </Count_Card>
        <Count_Card>
          <Num>30</Num>
          <P>Total Categories</P>
        </Count_Card>
        <Count_Card>
          <Num>102</Num>
          <P>In Country</P>
        </Count_Card>
        <Count_Card>
          <Num>98%</Num>
          <P>Happy Customer</P>
        </Count_Card>
      </Count>
    </>
  );
};

export default AboutSection;
