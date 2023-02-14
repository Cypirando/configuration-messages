import { StyledLogo, StyledRoutesApp } from "./styles";
import { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import Rating from "../../pages/Rating";
import RatingConfiguration from "../../pages/RatingConfiguration";
import TableConfig from "../TableConfig";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from "../Title";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const StateLayout = () => <Outlet />;
const App: React.FC = () => {
  const navigate = useNavigate();

  const componentsMap: { [key: string]: React.ReactElement } = {
    "1": (
      <Routes>
        <Route
          path="/rating-configuration/:id"
          element={
            <StyledRoutesApp>
              <RatingConfiguration />
            </StyledRoutesApp>
          }
        />
        <Route
          index
          path="/rating-configuration"
          element={
            <StyledRoutesApp>
              <RatingConfiguration />
            </StyledRoutesApp>
          }
        />
      </Routes>
    ),
    "2": (
      <Routes>
        <Route
          path="/table"
          element={
            <StyledRoutesApp>
              <TableConfig />
            </StyledRoutesApp>
          }
        />
      </Routes>
    ),
    "3": (
      <Routes>
        <Route
          path="/rating/:id"
          element={
            <StyledRoutesApp>
              <Rating />
            </StyledRoutesApp>
          }
        />
        <Route
        index
          path="/rating"
          element={
            <StyledRoutesApp>
              <Rating />
            </StyledRoutesApp>
          }
        />
      </Routes>
    ),
  };

  const [selectedKey, setSelectedKey] = useState("1");
  const [selectedComponent, setSelectedComponent] = useState(
    componentsMap[selectedKey]
  );

  const handleMenuClick = (key: string) => {
    setSelectedKey(key);
    setSelectedComponent(componentsMap[key]);

    switch (key) {
      case "2":
        navigate("/table");
        break;
      case "3":
        navigate("/rating");
        break;
      default:
        navigate("/rating-configuration");
        break;
    }
  };

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: "#001529",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Title>Configuração de mensagens</Title>
      </Header>
      <Layout>
        <Sider>
          <StyledLogo>
            <img src="/logo-botdesigner-light.png" alt="Logo" height="32px" />
          </StyledLogo>
          <Menu
            theme="dark"
            onClick={({ key }) => handleMenuClick(key)}
            selectedKeys={[selectedKey]}
            items={[
              { key: "1", label: "Config Mensagens" },
              { key: "2", label: "Tabela" },
              { key: "3", label: "Avaliação" },
            ]}
          />
        </Sider>
        <Layout>
          <Content>{selectedComponent}</Content>
        </Layout>
      </Layout>
      <Footer style={{ padding: 10, textAlign: "center" }}>
        Botdesigner ©2023
      </Footer>
    </>
  );
};

export default App;
