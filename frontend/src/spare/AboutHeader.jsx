import styled from "styled-components";

const Header = styled.div``;
const Header_Container = styled.div`
  width: 90%;
  height: 80vh;
  margin: 0 auto;
  padding: 40px 0;
`;
const Img = styled.img`
  width: 100%;
`;
const Header_Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 568px) {
    flex-direction: column;
  }
`;
const Header_Cart = styled.div`
  margin-top: 10px;
`;
const Header_title = styled.h1`
  margin-bottom: 10px;
`;
const Header_Desc = styled.p`
  line-height: 25px;
`;

const AboutHeader = () => {
  return (
    <Header>
      <Header_Container>
        <Img src="https://preview.colorlib.com/theme/malefashion/img/about/xabout-us.jpg.pagespeed.ic.JCJ2z0LRmk.webp" />
        <Header_Content>
          <Header_Cart>
            <Header_title>Who We Are ?</Header_title>
            <Header_Desc>
              Contextual advertising programs sometimes have strict policies
              that need to be adhered too. Let’s take Google as an example.
            </Header_Desc>
          </Header_Cart>
          <Header_Cart>
            <Header_title>Who We Do ?</Header_title>
            <Header_Desc>
              In this digital generation where information can be easily
              obtained within seconds, business cards still have retained their
              importance.
            </Header_Desc>
          </Header_Cart>
          <Header_Cart>
            <Header_title>Why Choose Us</Header_title>
            <Header_Desc>
              A two or three storey house is the ideal way to maximise the piece
              of earth on which our home sits, but for older or infirm people.
            </Header_Desc>
          </Header_Cart>
        </Header_Content>
      </Header_Container>
    </Header>
  );
};

export default AboutHeader;
