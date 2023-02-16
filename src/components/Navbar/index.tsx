import { StyledLogo, StyledRoutesApp } from "./styles";
import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Rating from "../../pages/Rating";
import RatingConfiguration from "../../pages/RatingConfiguration";
import TableConfig from "../TableConfig";
import { Route, Routes, Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import TableRating from "../TableRating";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const componentsMap: { [key: string]: React.ReactElement } = {
    "rating-configuration": (
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
    "table-configuration": (
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
    rating: (
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
    "table-rating": (
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

  const [selectedKey, setSelectedKey] = useState("rating");

  const [selectedComponent, setSelectedComponent] = useState(
    componentsMap[selectedKey]
  );

  const handleMenuClick = (key: string) => {
    setSelectedKey(key);
    setSelectedComponent(componentsMap[key]);

    switch (key) {
      case "rating-configuration":
        navigate("/rating-configuration");
        break;
      case "table-configuration":
        navigate("/table-configuration");
        break;
      case "rating":
        navigate("/rating");
        break;
      case "table-rating":
        navigate("/table-rating");
        break;
    }
  };

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/rating-configuration")) {
      setSelectedKey("rating-configuration");
      setSelectedComponent(componentsMap["rating-configuration"]);
    } else if (path.startsWith("/table-configuration")) {
      setSelectedKey("table-configuration");
      setSelectedComponent(componentsMap["table-configuration"]);
    } else if (path.startsWith("/rating")) {
      setSelectedKey("rating");
      setSelectedComponent(componentsMap["rating"]);
    } else if (path.startsWith("/table-rating")) {
    } else if (path.startsWith("/table-rating")) {
      setSelectedKey("table-rating");
      setSelectedComponent(componentsMap["table-rating"]);
    }
  }, [location.pathname]);

  return (
    
    <Layout  style={{ minHeight: "100vh" }}>
      <Sider >
        <StyledLogo>
          <img src="/logo-botdesigner-light.png" alt="Logo" height="32px" />
        </StyledLogo>
        <Menu theme="dark" selectedKeys={[selectedKey]} mode="inline">
          <Menu.Item key="rating" onClick={() => handleMenuClick("rating")}>
            Avaliação
          </Menu.Item>
          <Menu.Item
            key="rating-configuration"
            onClick={() => handleMenuClick("rating-configuration")}
          >
            Avaliação de Configuração
          </Menu.Item>
          <Menu.Item
            key="table-configuration"
            onClick={() => handleMenuClick("table-configuration")}
          >
            Tabela de Configurações
          </Menu.Item>
          <Menu.Item
            key="table-rating"
            onClick={() => handleMenuClick("table-rating")}
          >
            Tabela de Avaliações
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>{selectedComponent}</Content>
        <Footer style={{ textAlign: "center" }}>Botdesigner ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
