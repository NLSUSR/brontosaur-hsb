import styled from "styled-components";
import { InfoBox } from "./info-box";
import { TextBox, Subtitle } from "./top-establishment";

const Establishment_ = styled.div`
  width: 1020px;
  height: 304px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 34px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  background: rgb(255, 255, 255);
`;

const Title = styled.h2`
  width: 171px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: rgb(9, 36, 51);
  font-family: Raleway;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0%;
  text-align: left;
`;

const Image = styled.div`
  width: 228px;
  height: 228px;
  border-radius: 10px;
  background: center / 342px no-repeat rgb(231, 239, 244)
    url("/images/chiki=piki.jpeg");
`;

export const Establishment = () => {
  return (
    <Establishment_>
      <div className="flex flex-col gap-8">
        <TextBox>
          <Title>Чики-Пики</Title>
          <Subtitle style={{ width: "569px" }}>
            Мы предлагаем нашим посетителям лучший рамён в городе. Приходите
            попробовать! Тут можно сделать какое-то описание.
          </Subtitle>
        </TextBox>
        <InfoBox></InfoBox>
      </div>
      <Image></Image>
    </Establishment_>
  );
};
