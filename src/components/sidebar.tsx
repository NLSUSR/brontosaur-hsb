import styled from "styled-components";
import { NearbyItem } from "./nearby-item";
import search from "/images/search.svg";
import { EstablishmentsNewThings } from "./establishments-new-things";

const Sidebar_ = styled.section`
  width: 324px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 34px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  background: rgb(255, 255, 255);
`;

const Search = styled.div`
  width: 256px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px 10px 16px;
  border-radius: 10px;
  background: rgb(231, 239, 244);
`;

const Text = styled.p`
  width: 117px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: rgb(9, 36, 51);
  font-family: Raleway;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: left;
`;

const EstablishmentsNearby = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 50px 0;
  padding: 50px 0;
  border-top: 2px solid rgb(210, 221, 228);
  border-bottom: 2px solid rgb(210, 221, 228);
  gap: 34px;
`;

export const SB_Title = styled.h3`
  width: 256px;
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  color: rgb(9, 36, 51);
  font-family: Raleway;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
`;

const NearbyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-height: 506px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const nearby = [
  { name: "Чики-Пики", kitchen: "Азиатская кухня", distance: "0.5 км" },
  { name: "Чики-Пики", kitchen: "Азиатская кухня", distance: "0.5 км" },
  {
    name: "Бамбук",
    kitchen: "Паназиатская/Европейская кухня",
    distance: "1.1 км",
  },
  { name: "Соул", kitchen: "Европейская кухня", distance: "10 мин" },
  { name: "Соул", kitchen: "Европейская кухня", distance: "10 мин" },
  {
    name: "Теремок",
    kitchen: "Паназиатская/Европейская кухня",
    distance: "20 мин",
  },
  { name: "Чики-Пики", kitchen: "Азиатская кухня", distance: "0.5 км" },
  { name: "Чики-Пики", kitchen: "Азиатская кухня", distance: "0.5 км" },
  {
    name: "Бамбук",
    kitchen: "Паназиатская/Европейская кухня",
    distance: "1.1 км",
  },
  { name: "Соул", kitchen: "Европейская кухня", distance: "10 мин" },
  { name: "Соул", kitchen: "Европейская кухня", distance: "10 мин" },
  {
    name: "Теремок",
    kitchen: "Паназиатская/Европейская кухня",
    distance: "20 мин",
  },
];

export const Sidebar = () => {
  return (
    <Sidebar_>
      <Search>
        <Text>Поиск заведения</Text>
        <div className=" w-6 h-6">
          <img src={search} alt="Поиск заведения" />
        </div>
      </Search>
      <EstablishmentsNearby>
        <SB_Title>Заведения рядом</SB_Title>
        <NearbyList>
          {nearby.map((e: any, i) => {
            return <NearbyItem key={i}>{e}</NearbyItem>;
          })}
        </NearbyList>
      </EstablishmentsNearby>
      <EstablishmentsNewThings></EstablishmentsNewThings>
    </Sidebar_>
  );
};
