import { Layout, Result, Button, Image, Avatar, Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./App.css";
import { SmileOutlined, HomeOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const styleCol = { padding: "10px" };
const styleCol2 = {
  flex: 9,
  padding: "10px",
  textAlign: "center",
  lineHeight: "500px",
};

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// const styleRow = { display: "flex" };
const Menu = () => {
  return (
    <div className="App">
      <Header
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        Table tennis list - Menu
      </Header>

      <Content
        style={{
          display: "flex",

          padding: "20px",
        }}
      >
        {/* <div style={styleRow}>
          <div style={styleCol}> */}
        {/* <div style={container}> */}
        <div class="card">
          <h2>Feature</h2>
          <p>
            <Link to="/editrow" style={{ color: "#69b1ff" }}>
              Edit Rows
            </Link>
          </p>
        </div>

        <div class="card">
          <h2>Feature</h2>
          <p>
            <Link to="/dragdrop" style={{ color: "#69b1ff" }}>
              Drag N Drop
            </Link>
          </p>
        </div>
        <div class="card">
          <h2>Main</h2>
          <p>
            <Link to="/print" style={{ color: "#69b1ff" }}>
              Print
            </Link>
          </p>
        </div>
        {/* </div>   */}
        {/* </div>

        </div> */}
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
