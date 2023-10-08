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
const styleCol = { flex: 1, padding: "10px" };
const styleCol2 = {
  flex: 9,
  padding: "10px",
  textAlign: "center",
  lineHeight: "500px",
};

const styleRow = { display: "flex" };
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
        <div style={styleRow}>
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
            <div class="card">
              <h2>Main</h2>
              <p>
                <Link to="/print" style={{ color: "#bae0ff" }}>
                  Print
                </Link>
              </p>
            </div>
          </div>
          <div style={styleCol2}>
            <Card
              style={{
                width: "100%",
                height: "50%",
              }}
              cover={
                <img
                  alt="example"
                  src="https://img.freepik.com/premium-vector/table-tennis-icons-set-outline-style_96318-2839.jpg?size=626&ext=jpg&ga=GA1.2.2103305730.1696757811&semt=ais"
                />
              }
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
            >
              {/* <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              /> */}
            </Card>
          </div>
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
