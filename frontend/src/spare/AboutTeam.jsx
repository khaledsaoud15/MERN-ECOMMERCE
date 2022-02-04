import styled from "styled-components";

const Meet = styled.div`
  margin-top: 80px;
  text-align: center;
`;
const M = styled.p`
  color: #ad2020;
  font-size: 20px;
  letter-spacing: 3px;
  margin-bottom: 10px;
  font-weight: 700;
`;
const T = styled.h1``;
const Team = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Team_Content = styled.div`
  margin-bottom: 35px;
`;
const Img = styled.img``;
const Team_Name = styled.h1``;
const Team_Job = styled.p`
  margin-top: 8px;
  color: #999;
  font-size: 20px;
  letter-spacing: 5px;
`;

const AboutTeam = () => {
  return (
    <>
      <Meet>
        <M>OUR TEAM</M>
        <T>Meet Our Team</T>
      </Meet>
      <Team>
        <Team_Content>
          <Img src="https://preview.colorlib.com/theme/malefashion/img/about/xteam-1.jpg.pagespeed.ic.yUtf_cncsJ.webp" />
          <Team_Name>John Smith</Team_Name>
          <Team_Job>Fashion Design</Team_Job>
        </Team_Content>
        <Team_Content>
          <Img src="https://preview.colorlib.com/theme/malefashion/img/about/xteam-2.jpg.pagespeed.ic.ZSR4GaQ8uG.webp" />
          <Team_Name>Christine Wise</Team_Name>
          <Team_Job>C.E.O</Team_Job>
        </Team_Content>
        <Team_Content>
          <Img src="https://preview.colorlib.com/theme/malefashion/img/about/xteam-3.jpg.pagespeed.ic.yUtf_cncsJ.webp" />
          <Team_Name>Sean Robbins</Team_Name>
          <Team_Job>Manager</Team_Job>
        </Team_Content>
        <Team_Content>
          <Img src="https://preview.colorlib.com/theme/malefashion/img/about/xteam-4.jpg.pagespeed.ic.yUtf_cncsJ.webp" />
          <Team_Name>Lucy Myers</Team_Name>
          <Team_Job>Delivery</Team_Job>
        </Team_Content>
      </Team>
    </>
  );
};

export default AboutTeam;
