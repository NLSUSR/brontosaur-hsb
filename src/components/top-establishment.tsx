import styled from "styled-components";
import { InfoBox } from "./info-box";
import photo from "/images/photo.jpeg";

const TopEstablishment_ = styled.div`
  width: 1020px;
  height: 652px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 34px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  background: rgb(255, 255, 255);
  gap: 34px;
`;

const Box = styled.div`
  width: 952px;
  height: 300px;
  border-radius: 10px;
  background: rgb(231, 239, 244);
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleBox = styled.div`
  width: 952px;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: rgb(9, 36, 51);
  font-family: Raleway;
  font-size: 46px;
  font-weight: 600;
  line-height: 54px;
  text-align: left;
`;

const Button = styled.button`
  width: 205px;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgb(95, 105, 109);
  border-radius: 10px;
  background: rgb(255, 255, 255);
  color: rgb(95, 105, 109);
  font-family: Raleway;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

export const TE_TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const TE_Subtitle = styled.p`
  width: 648px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: rgb(95, 105, 109);
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`;

export const TopEstablishment = () => {
  return (
    <TopEstablishment_>
      <Box>
        <Image src={photo} alt="" />
      </Box>
      <Wrapper>
        <TE_TextBox>
          <TitleBox>
            <Title>Бамбук</Title>
            <Button>Brontosaur рекомендует</Button>
          </TitleBox>
          <TE_Subtitle>
            Мы предлагаем нашим посетителям лучший рамён в городе. Приходите
            попробовать! Тут можно сделать какое-то описание.
          </TE_Subtitle>
        </TE_TextBox>
        <InfoBox></InfoBox>
      </Wrapper>
    </TopEstablishment_>
  );
};
