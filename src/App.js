import "./App.css";
import { Table, Button, Layout, Input, ConfigProvider, Radio } from "antd";
import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { PrinterOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function App() {
  const data = [];
  const [dataSource, setDataSource] = useState(data);
  const [hideAction, setHideAction] = useState(false);
  const [hideShowText, setHideShowText] = useState("Hide");
  const [headOfRowSpan, setHeadOfRowSpan] = useState([]);
  const [customStyle, setCustomStyle] = useState("py-style-2");
  const [size, setSize] = useState("small");

  let componentRef = useRef();

  const handleSizeChange = (e) => {
    setSize(e.target.value);
    if (e.target.value === "small") {
      setCustomStyle("py-style-2");
    } else {
      setCustomStyle("py-style-1");
    }
  };

  const onHide = () => {
    console.log("click Hide");
    if (hideAction) {
      setHideShowText("Hide");
    } else {
      setHideShowText("Show");
    }
    setHideAction(!hideAction);
  };

  const handleAdd = () => {
    let initMax = 0;

    for (let i = 0; i < dataSource.length; i++) {
      initMax = Math.max(initMax, dataSource[i].no);
    }

    const newData = {
      key: Math.random(),
      no: initMax + 1,
      name: ``,
      action: <a>Delete</a>,
    };
    setDataSource([...dataSource, newData]);
  };

  const handleAdd2 = () => {
    let initMax = 0;

    for (let i = 0; i < dataSource.length; i++) {
      initMax = Math.max(initMax, dataSource[i].no);
    }

    var copiedDataSource = dataSource.slice();
    const newData1 = {
      key: Math.random(),
      no: initMax + 1,
      name: ``,
      action: <a>Delete</a>,
    };
    const newData2 = {
      key: Math.random(),
      no: initMax + 1,
      name: ``,
      action: <a>Delete</a>,
    };

    copiedDataSource.push(newData1, newData2);
    console.log("copiedDataSource length:", copiedDataSource.length);

    setHeadOfRowSpan([...headOfRowSpan, copiedDataSource.length - 2]);
    console.log("headOfRowSpan:", [
      ...headOfRowSpan,
      copiedDataSource.length - 2,
    ]);
    setDataSource(copiedDataSource);
  };

  const handleDelete = (no, index) => {
    console.log("delete Index:", index);
    if (headOfRowSpan.includes(index)) {
      const elementToRemove = index;
      const newArray = headOfRowSpan.filter((item) => item !== elementToRemove);
      console.log("new HeadOfRowSpan#1:", newArray);
      setHeadOfRowSpan(newArray);
    }

    if (headOfRowSpan.includes(index - 1)) {
      const elementToRemove = index - 1;
      const newArray = headOfRowSpan.filter((item) => item !== elementToRemove);
      console.log("new HeadOfRowSpan#2:", newArray);
      setHeadOfRowSpan(newArray);
    }

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
      onCell: (_, index) => {
        if (headOfRowSpan.includes(index)) {
          return {
            rowSpan: 2,
          };
        }
        // These two are merged into above cell
        if (headOfRowSpan.includes(index - 1)) {
          return {
            rowSpan: 0,
          };
        }
        return {};
      },
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
      render: (_, record, index) =>
        dataSource.length >= 1 ? (
          <a onClick={() => handleDelete(record.no, index)}>Delete</a>
        ) : null,
      hidden: hideAction,
    },
  ].filter((item) => !item.hidden);

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
                <Radio.Group value={size} onChange={handleSizeChange}>
                  <Radio.Button value="large">Large</Radio.Button>
                  <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <Button
                  type="dashed"
                  onClick={onHide}
                  style={{ marginLeft: 6 }}
                >
                  {hideShowText}
                </Button>
                <ReactToPrint
                  trigger={() => (
                    <Button
                      style={{ marginLeft: 6 }}
                      icon={<PrinterOutlined />}
                    >
                      Print
                    </Button>
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
              <Table
                columns={columns}
                dataSource={dataSource}
                className={customStyle}
              />
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
