// import React, { useState } from "react";
// import { Layout, Menu, theme } from "antd";
// import { StyledLogo } from "./styles";
// import Rating from "../../pages/Rating";
// import RatingConfiguration from "../../pages/RatingConfiguration";
// import TableConfig from "../TableConfig";
// import Title from "../../components/Title";

// const { Header, Content, Footer, Sider } = Layout;

// const App: React.FC = () => {
//   const componentsMap: { [key: string]: React.ReactElement } = {
//     "1": <RatingConfiguration />,
//     "2": <TableConfig />,
//     "3": <Rating />,
//   };
//   const [selectedKey, setSelectedKey] = useState("4");
//   const [selectedComponent, setSelectedComponent] = useState(
//     componentsMap[selectedKey]
//   );
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   const handleMenuClick = (key: string) => {
//     setSelectedKey(key);
//     setSelectedComponent(componentsMap[key]);
//   };
//   return (
//     <Layout>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <StyledLogo>
//           <img src="/logo-botdesigner-light.png" alt="Logo" height="32px" />
//         </StyledLogo>
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={[selectedKey]}
//           onClick={({ key }) => handleMenuClick(key)}
//           items={[
//             {
//               key: "1",
//               icon: "",
//               label: "Config Mensagens",
//             },
//             { key: "2", icon: "", label: "Tabela" },
//             { key: "3", icon: "", label: "Avaliação" },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header style={{ padding: 0, background: colorBgContainer }} />
//         <Content style={{ margin: "24px 16px 0" }}>
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//             }}
//           >
//            <Title>Configurações de Mensagens</Title>
//             {selectedComponent}
//           </div>
//         </Content>
//         <Footer style={{ textAlign: "center" }}>Botdesigner ©2023</Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;
import { StyledLogo } from "./styles";
import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import Rating from "../../pages/Rating";
import RatingConfiguration from "../../pages/RatingConfiguration";
import TableConfig from "../TableConfig";
import { StyledRoutesApp } from "./styles";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const stateLayout = () => <Outlet />;

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
          path="/"
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
