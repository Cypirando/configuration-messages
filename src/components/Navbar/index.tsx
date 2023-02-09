import { StyledLogo } from "./styles";
import { useState } from "react";
import { Layout, Menu, theme } from "antd";
import Rating from "../../pages/Rating";
import RatingConfiguration from "../../pages/RatingConfiguration";
import TableConfig from "../TableConfig";
import { StyledRoutesApp } from "./styles";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const StateLayout = () => <Outlet />;

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const componentsMap: { [key: string]: React.ReactElement } = {
    "1": (
      <Routes>
        <Route
          index
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
        navigate("/");
        break;
    }
  };
  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }} />
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
          <Content>
            <Routes>
              <Route element={<StateLayout />}></Route>
            </Routes>

            {selectedComponent}
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ padding: 10, textAlign: "center" }}>
        Botdesigner ©2023
      </Footer>
    </>
  );
};

export default App;
