import styled from "styled-components";
import location from "/images/location_on.svg";
import favorite from "/images/favorite.svg";
import circle from "/images/account_circle.svg";

const Header_ = styled.header`
  width: 1368px;
  height: 68px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  background: rgb(255, 255, 255);
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  width: 128px;
  height: 28px;
  color: rgb(9, 36, 51);
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
`;

const Location = styled.p`
  width: 152px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: rgb(95, 105, 109);
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

export const Header = () => {
  return (
    <Header_>
      <Title>Brontosaur</Title>
      <div className="flex gap-6">
        <div className="flex gap-2.5">
          <img className="w-6 h-6" src={location} alt="" />
          <Location>Санкт-Петербург</Location>
        </div>
        <img className="w-6 h-6" src={favorite} alt="" />
        <img className="w-6 h-6" src={circle} alt="" />
      </div>
    </Header_>
  );
};
