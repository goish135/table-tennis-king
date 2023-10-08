import { Layout, Result, Button } from "antd";
import { Link } from "react-router-dom";
import "./App.css";
import { SmileOutlined, HomeOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const styleCol = { marginLeft: "0px", width: "25%", display: "inline-block" };
const styleCol2 = {
  width: "50%",
  display: "inline-block",
  textAlign: "center",
};
const styleRow = { width: "100%" };
const Menu = () => {
  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          Table tennis list - Menu
        </Header>
      </Layout>

      <Content>
        <div style={styleCol}>
          <div class="card">
            <h2>Feature</h2>
            <p>
              <Link to="/editrow" style={{ color: "#bae0ff" }}>
                Edit Rows
              </Link>
            </p>
          </div>

          <div class="card">
            <h2>Feature</h2>
            <p>
              <Link to="/dragdrop" style={{ color: "#bae0ff" }}>
                Drag N Drop
              </Link>
            </p>
          </div>
        </div>
        <div style={styleCol2}>
          <Result
            icon={<HomeOutlined />}
            title="Home Page"
            // extra={<Button type="primary">Next</Button>}
            style={{ display: "inline-block" }}
          />
        </div>
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
