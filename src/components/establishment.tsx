import styled from "styled-components";
import { InfoBox } from "./info-box";
import {
  TE_TextBox,
  TE_Subtitle,
} from "./top-establishment";
import chikipiki from "/images/chiki=piki.jpeg";

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

const Box = styled.div`
  width: 228px;
  height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  scale: 1.5;
`;

export const Establishment = () => {
  return (
    <Establishment_>
      <div className="flex flex-col gap-8">
        <TE_TextBox>
          <Title>Чики-Пики</Title>
          <TE_Subtitle style={{ width: "569px" }}>
            Мы предлагаем нашим посетителям лучший рамён в городе. Приходите
            попробовать! Тут можно сделать какое-то описание.
          </TE_Subtitle>
        </TE_TextBox>
        <InfoBox></InfoBox>
      </div>
      <Box>
        <Image src={chikipiki}></Image>
      </Box>
    </Establishment_>
  );
};
