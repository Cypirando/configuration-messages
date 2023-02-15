import { StyledContainer, StyledLogo, StyledRoutesApp } from "./styles";
import { useState } from "react";
import { Layout, Menu } from "antd";
import Rating from "../../pages/Rating";
import RatingConfiguration from "../../pages/RatingConfiguration";
import TableConfig from "../TableConfig";
import { Route, Routes, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from "../Title";
import TableRating from "../TableRating";

const { Header, Content, Footer, Sider } = Layout;

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
          path="/rating-configuration"
          element={
            <StyledRoutesApp>
              <RatingConfiguration />
            </StyledRoutesApp>
          }
        />
        <Route element={<Outlet />} />
      </Routes>
    ),
    "2": (
      <Routes>
        <Route
          path="/table-configuration"
          element={
            <StyledRoutesApp>
              <TableConfig />
            </StyledRoutesApp>
          }
        />
        <Route element={<Outlet />} />
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
          path="/rating"
          element={
            <StyledRoutesApp>
              <Rating />
            </StyledRoutesApp>
          }
        />
        <Route element={<Outlet />} />
      </Routes>
    ),
    "4": (
      <Routes>
        <Route
          path="/table-rating"
          element={
            <StyledRoutesApp>
              <TableRating />
            </StyledRoutesApp>
          }
        />
        <Route element={<Outlet />} />
      </Routes>
    ),
  };

  const [selectedKey, setSelectedKey] = useState("3");

  const [selectedComponent, setSelectedComponent] = useState(
    componentsMap[selectedKey]
  );

  const handleMenuClick = (key: string) => {
    setSelectedKey(key);
    setSelectedComponent(componentsMap[key]);

    switch (key) {
      case "1":
        navigate("/rating-configuration");
        break;
      case "2":
        navigate("/table-configuration");
        break;
      case "3":
        navigate("/rating");
        break;
      case "4":
        navigate("/table-rating");
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
          <StyledContainer>
            <StyledLogo>
              <img src="/logo-botdesigner-light.png" alt="Logo" height="32px" />
            </StyledLogo>
            <Menu
              theme="dark"
              onClick={({ key }) => handleMenuClick(key)}
              selectedKeys={[selectedKey]}
              items={[
                { key: "1", label: "Configuração Mensagens" },
                { key: "2", label: "Lista Configuração" },
                { key: "3", label: "Avaliação" },
                { key: "4", label: "Lista Avaliaçao" },
              ]}
            />
          </StyledContainer>
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
