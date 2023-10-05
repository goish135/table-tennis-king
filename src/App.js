import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
import { Table, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const columns = [
  {
    key: "sort",
  },
  {
    title: "NO#",
    dataIndex: "no",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
];

const Row = ({ children, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props["data-row-key"],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleY: 1,
      },
    ),
    transition,
    ...(isDragging
      ? {
          position: "relative",
          zIndex: 9999,
        }
      : {}),
  };
  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if (child.key === "sort") {
          return React.cloneElement(child, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{
                  touchAction: "none",
                  cursor: "move",
                }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

const App = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      no: "",
      name: "貝吉塔",
    },
    {
      key: "2",
      no: "",
      name: "表哥",
    },
    {
      key: "3",
      no: "",
      name: "Engine",
    },
    {
      key: "4",
      no: "",
      name: "馬鈴薯",
    },
    {
      key: "5",
      no: "",
      name: "Allen",
    },
    {
      key: "6",
      no: "",
      name: "毅力",
    },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // https://docs.dndkit.com/api-documentation/sensors/pointer#activation-constraints
        distance: 1,
      },
    }),
  );

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Table tennis list - Drag &amp; Drop
        </Header>
      </Layout>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", backgroundColor: "white" }}
      >
        <div style={{ padding: 24, height: "100%" }}>
          <DndContext
            sensors={sensors}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={onDragEnd}
          >
            <SortableContext
              // rowKey array
              items={dataSource.map((i) => i.key)}
              strategy={verticalListSortingStrategy}
            >
              <Table
                components={{
                  body: {
                    row: Row,
                  },
                }}
                rowKey="key"
                columns={columns}
                dataSource={dataSource}
                pagination={false}
              />
            </SortableContext>
          </DndContext>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          height: "100px",
          width: "100%",
        }}
      >
        桌球王 ©2023 Created by 阿瑜
      </Footer>
    </div>
  );
};
export default App;
