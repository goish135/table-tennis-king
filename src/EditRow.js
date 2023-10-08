import React, { useState } from "react";
import {
  Table,
  Layout,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Typography,
  Button,
} from "antd";

import { Link } from "react-router-dom";
import { RollbackOutlined } from "@ant-design/icons";

const originData = [
  {
    key: "1",
    no: "1",
    name: "貝吉塔",
  },
  {
    key: "2",
    no: "1",
    name: "表哥",
  },
  {
    key: "3",
    no: "2",
    name: "Engine",
  },
  {
    key: "4",
    no: "2",
    name: "馬鈴薯",
  },
  {
    key: "5",
    no: "3",
    name: "Allen",
  },
  {
    key: "6",
    no: "3",
    name: "毅力",
  },
];

const { Header, Content, Footer } = Layout;

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const columnsEdit = [
    {
      title: "NO#",
      dataIndex: "no",
      editable: "true",
    },
    {
      title: "Name",
      dataIndex: "name",
      editable: "true",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columnsEdit.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Table tennis list - Edit rows
        </Header>
      </Layout>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", backgroundColor: "white" }}
      >
        <div style={{ padding: 24, height: "100%" }}>
          <Link to="/" style={{ color: "#bae0ff" }}>
            <Button type="primary" icon={<RollbackOutlined />}>
              Home
            </Button>
          </Link>
          <Form form={form} component={false}>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              bordered
              dataSource={data}
              columns={mergedColumns}
              rowClassName="editable-row"
              pagination={{
                onChange: cancel,
              }}
            />
          </Form>
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
export default App;
