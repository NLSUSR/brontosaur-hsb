import styled from "styled-components";

const Name = styled.h4`
  width: 96px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  color: rgb(9, 36, 51);
  font-family: Raleway;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;

const Distanse = styled.div`
  color: rgb(95, 105, 109);
  font-family: Raleway;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

const Kitchen = styled.p`
  width: 256px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  color: rgb(95, 105, 109);
  font-family: Raleway;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;

export const NearbyItem = (props: { children: any }) => {
  const e = props.children;
  return (
    <li className="flex flex-col gap-3.5 h-14">
      <div className="flex  justify-between">
        <Name>{e.name}</Name>
        <Distanse>
          <img
            className="w-4 h-4"
            src="/images/location_on.svg"
            alt={e.distance}
          />
          <p>{e.distance}</p>
        </Distanse>
      </div>
      <Kitchen>{e.kitchen}</Kitchen>
    </li>
  );
};
