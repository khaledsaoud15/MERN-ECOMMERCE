import styled from "styled-components";
import shoes from "../images/vence.png";
import { useState, useRef, useEffect } from "react";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #f7f0cc;
  margin: 80px 0;
  overflow: hidden;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
    padding: 30px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Header = styled.h1`
  font-size: 50px;
  color: #da2828;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const Desc = styled.p`
  margin: 30px 0;
  line-height: 30px;
  font-weight: 700;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Number = styled.p`
  color: #da2828;
  font-size: 20px;
`;
const Title = styled.p`
  font-size: 30px;
`;
const Timer = styled.div`
  display: flex;
  align-items: center;
`;
const Time = styled.div`
  margin-left: 20px;
  padding: 5px;
  background: #fff;
  font-size: 30px;
  text-align: center;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;
const T = styled.p`
  color: #da2828;
`;
const D = styled.p``;
const Img = styled.img`
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    grid-row: 1;
  }
`;

const SpecialOffre = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const starterTime = () => {
    const countDown = new Date("February 10, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    starterTime();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <Container>
      <Content>
        <Header>DEAL OF THE WEAK</Header>
        <Desc>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus
          recusandae est impedit aliquam dolores molestiae nemo pariatur, minima
          earum, modi quo in at autem minus tenetur tempora. Inventore, quo.
        </Desc>
        <Price>
          <Number>$88.00</Number>
          <Title>/VENCE </Title>
        </Price>
        <Timer>
          <Time>
            <T>{timerDays}</T>
            <D>DAYS</D>
          </Time>
          <Time>
            <T>{timerHours}</T>
            <D>HRS</D>
          </Time>
          <Time>
            <T>{timerMinutes}</T>
            <D>MINS</D>
          </Time>
          <Time>
            <T>{timerSeconds}</T>
            <D>SECS</D>
          </Time>
        </Timer>
      </Content>
      <Img src={shoes} />
    </Container>
  );
};

export default SpecialOffre;
