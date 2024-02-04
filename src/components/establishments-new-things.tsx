import styled from "styled-components";
import { SB_Title } from "./sidebar";
import pizza from "/images/pizza.png";
import pizza2 from "/images/pizza2.png";

const Box = styled.div`
  width: 256px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Dish = styled.h4`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
  color: #092433;
  line-height: 24px;
`;

const Establishment = styled.p`
  font-size: 14px;
  font-family: Raleway;
  font-weight: 400;
  color: #5f696d;
  line-height: 18px;
`;

const Desctiption = styled.p`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
  color: #5f696d;
  line-height: 24px;
`;

const List = styled.ul`
  height: 964px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const newThings = [
  {
    image: pizza,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza2,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza2,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza2,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
  {
    image: pizza,
    dish: "Новогодняя пицца",
    establishment: "Кафе “Чики-Пики”",
    desctiption: "Новая новогодняя пицца с мандаринами и запеченым цыплёнком",
  },
];

export const EstablishmentsNewThings = () => {
  return (
    <div className=" flex flex-col gap-8">
      <SB_Title>Новинки заведений</SB_Title>
      <List className="flex flex-col gap-8">
        {newThings.map((e, i: number) => {
          return (
            <li key={i} className="flex flex-col gap-3.5">
              <Dish>{e.dish}</Dish>
              <>
                {e.image && (
                  <Box>
                    <Image src={e.image}></Image>
                  </Box>
                )}
              </>
              <Desctiption>{e.desctiption}</Desctiption>
              <Establishment>{e.establishment}</Establishment>
            </li>
          );
        })}
      </List>
    </div>
  );
};
