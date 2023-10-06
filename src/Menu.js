import { Layout } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const Menu = () => {
  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Table tennis list - Menu
        </Header>
      </Layout>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <br />
        <br />
        <Link to="/editrow">Edit Rows</Link>

        <br />
        <br />
        <Link to="/dragdrop">Drag N Drop</Link>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: 0,

          width: "100%",
        }}
      >
        桌球王 ©2023 Created by 阿瑜
      </Footer>
    </div>
  );
};
export default Menu;
