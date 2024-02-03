import styled from "styled-components";

const Box = styled.div`
  width: 522px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: space-between;
`;

const Right = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Left = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const Text = styled.p`
  width: fit-content;
  display: flex;
  flex-direction: row;
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

const Item = styled.li`
  display: flex;
  gap: 10px;
`;

const right = [
  { image: "/images/restaurant.svg", text: "Кафе" },
  { image: "/images/account_balance_wallet.svg", text: "₽ ₽" },
  { image: "/images/kid_star.svg", text: "4.5" },
];

const left = [
  { image: "/images/menu_book.svg", text: "Европейская, азиатская кухня" },
  { image: "/images/av_timer.svg", text: "10:00-23:00" },
  { image: "/images/location_on.svg", text: "ул. Томшевского 12-34" },
];

export const InfoBox = () => {
  return (
    <Box>
      <Right>
        {right.map((e, i) => {
          return (
            <Item key={i}>
              <Image src={e.image} alt={e.text} />
              <Text>{e.text}</Text>
            </Item>
          );
        })}
      </Right>
      <Left>
        {left.map((e, i) => {
          return (
            <Item className="flex" key={i}>
              <Image src={e.image} alt={e.text} />
              <Text>{e.text}</Text>
            </Item>
          );
        })}
      </Left>
    </Box>
  );
};
