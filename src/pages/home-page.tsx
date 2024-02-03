import styled from "styled-components";
import { Establishment } from "../components/establishment";
import { TopEstablishment } from "../components/top-establishment";
import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header";

const Container = styled.div`
  width: 1440px;
  padding: 24px 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = styled.main`
  display: flex;
  gap: 24px;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HomePage = () => {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Sidebar></Sidebar>
        <Content>
          <TopEstablishment></TopEstablishment>
          <List>
            {Array.from({ length: 5 }).map((_e, i) => {
              return (
                <li key={i}>
                  <Establishment></Establishment>
                </li>
              );
            })}
          </List>
        </Content>
      </Main>
    </Container>
  );
};
