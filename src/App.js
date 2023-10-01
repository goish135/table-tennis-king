import "./App.css";
import { Table, Button, Layout, Input, ConfigProvider } from "antd";
import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { PrinterOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function App() {
  
  const data = [];
  const [dataSource, setDataSource] = useState(data);
  let componentRef = useRef();

  const handleAdd = () => {

    let initMax = 0

    

    for(let i=0;i<dataSource.length;i++){
      initMax = Math.max(initMax,dataSource[i].no);
    }

    const newData = {
      key: Math.random(),
      no: initMax+1,
      name: ``,
      action: <a>Delete</a>,
    };
    setDataSource([...dataSource, newData]);
    

    
  };

  const handleAdd2 = () => {
    

    let initMax = 0

      for(let i=0;i<dataSource.length;i++){
        initMax = Math.max(initMax,dataSource[i].no);
      }

    var copiedDataSource = dataSource.slice();  
    const newData1 = {
      key: Math.random(),
      no: initMax+1,
      name: ``,
      action: <a>Delete</a>,
    };
    const newData2 = {
      key: Math.random(),
      no: initMax+1,
      name: ``,
      action: <a>Delete</a>,
    };
    
    copiedDataSource.push(newData1, newData2);
    setDataSource(copiedDataSource);

  };

  const handleDelete = (no) => {
    
    
    const newData = dataSource.filter((item) => item.no !== no);

    
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
          <a onClick={() => handleDelete(record.no)}>Delete</a>
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
