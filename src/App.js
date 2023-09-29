import "./App.css";
import { Table, Button, Layout, Input, ConfigProvider } from "antd";
import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { PrinterOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function App() {
  const [count, setCount] = useState(0);
  const data = [];
  const [dataSource, setDataSource] = useState(data);
  let componentRef = useRef();

  const handleAdd = () => {
    const newData = {
      key: count,
      no: ``,
      name: ``,
      action: <a>Delete</a>,
    };
    setDataSource([...dataSource, newData]);

    setCount(count + 1);
  };

  const handleAdd2 = () => {
    const newData1 = {
      key: count,
      no: ``,
      name: ``,
      action: <a>Delete</a>,
    };
    const newData2 = {
      key: count + 1,
      no: ``,
      name: ``,
      action: <a>Delete</a>,
    };
    var copiedDataSource = dataSource.slice();
    copiedDataSource.push(newData1, newData2);
    setDataSource(copiedDataSource);

    setCount(count + 1);
  };

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);

    setDataSource(newData);
  };

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const columns = [
    {
      title: "No#",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <a onClick={() => handleDelete(record.key)}>Delete</a>
        ) : null,
    },
  ];

  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "fantasy",
            fontSize: 20,
          },
        }}
      >
        <Layout ref={(el) => (componentRef = el)}>
          <Header
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Table tennis list
          </Header>
          <Content className="site-layout" style={{ padding: "0 50px" }}>
            <div style={{ padding: 24, height: "100%" }}>
              <div style={{ display: "block", textAlign: "right" }}>
                <ReactToPrint
                  trigger={() => (
                    <Button icon={<PrinterOutlined />}>Print</Button>
                  )}
                  content={() => componentRef}
                />
              </div>

              <div style={{ width: "100%" }}>
                <div style={{ display: "inline-block" }}>Team Name:&nbsp;</div>
                <div style={{ display: "inline-block" }}>
                  <Input showCount maxLength={20} onChange={onChange} />
                </div>
                <br />
                <br />
                <div style={{ display: "inline-block" }}>Team Lead:&nbsp;</div>
                <div style={{ display: "inline-block" }}>
                  <Input showCount maxLength={20} onChange={onChange} />
                </div>
                <br />
                <br />
                <Button type="primary" onClick={handleAdd}>
                  +1 Player
                </Button>
                <Button style={{ marginLeft: 6 }} onClick={handleAdd2}>
                  +2 Player
                </Button>
              </div>
              <br />
              <Table columns={columns} dataSource={dataSource} />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            桌球王 ©2023 Created by 阿瑜
          </Footer>
        </Layout>
      </ConfigProvider>
    </div>
  );
}

export default App;
