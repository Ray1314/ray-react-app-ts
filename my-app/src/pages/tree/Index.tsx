/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Table, Checkbox } from "antd";
import React, { useEffect, useState } from "react";
const CheckboxGroup = Checkbox.Group;
interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
  list?: any[];
}

const data: DataType[] = [
  {
    key: 1,
    name: "John Brown sr.",
    age: 60,
    address: "New York No. 1 Lake Park",
    children: [
      {
        key: 11,
        name: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park",
        list: [
          {
            label: "name1",
            value: "1",
          },
          {
            label: "name2",
            value: "2",
          },
        ],
      },
      {
        key: 12,
        name: "John Brown jr.",
        age: 30,
        address: "New York No. 3 Lake Park",
        children: [
          {
            key: 121,
            name: "Jimmy Brown",
            age: 16,
            address: "New York No. 3 Lake Park",
            list: [
              {
                label: "name1",
                value: "1",
              },
              {
                label: "name2",
                value: "2",
              },
              {
                label: "name3",
                value: "3",
              },
            ],
          },
        ],
      },
      {
        key: 13,
        name: "Jim Green sr.",
        age: 72,
        address: "London No. 1 Lake Park",
        children: [
          {
            key: "appManager-app",
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park",
            children: [
              {
                key: 'appManager-app-menu',
                name: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park",
                list: [
                  {
                    label: "删除",
                    value: "appManager-app-menu-delete",
                  },
                  {
                    label: "编辑",
                    value: "appManager-app-menu-edit",
                  },
                ],
              },
              {
                key: 1312,
                name: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park",
                list: [
                  {
                    label: "name1",
                    value: "1",
                  },
                  {
                    label: "name2",
                    value: "2",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

let relation: any = {};
let upkeys: any = {};
let downkeys: any = {};
let childrenkeys: any = {};
let up: any = "";
let upIndex = "";

const App: React.FC = () => {
  const [checked, setChecked] = useState<any>({});
  const [indeterminate, setIndeterminate] = useState<any>({});
  const [childrenk, setChildrenk] = useState<any>({});
  const [columns, setColumns] = useState<any>([]);
  // 获取选中
  const checkedFun = (key: any) => {
    return checked[key];
  };
  // 获取方框
  const indeterminateFun = (key: any) => {
    return indeterminate[key];
  };
  // 菜单勾选
  const onChange = (e: any, key: any) => {
    const value = e.target ? e.target.checked : e;
    checked[key] = value;
    indeterminate[key] = false;
    downkeys[key]?.map((item: any) => {
      checked[item] = value;
      indeterminate[item] = false;
      onChangeC(value, item);
    });
    Object.keys(relation)
      .reverse()
      .map((y) => {
        //当前是刚好等于便利值时
        if (key == y) {
          // 找到他的父节点
          upIndex = relation[key];
          const fkey = downkeys[upIndex];
          let i = 0;
          let ii = fkey.length;
          fkey.map((item: any) => {
            if (checked[item]) {
              i++;
            }
          });
          if (i == ii) {
            checked[upIndex] = true;
            indeterminate[upIndex] = false;
          } else if (i != 0) {
            checked[upIndex] = false;
            indeterminate[upIndex] = true;
          } else {
            checked[upIndex] = false;
            indeterminate[upIndex] = false;
          }
        }
        cangeFun();
      });
    setIndeterminate(indeterminate);
    setChecked(checked);
    columnsFun();
  };
  // 修改父项的方法
  const onChangeF = async (value: any, key: any, valueF?: any) => {
    indeterminate[key] = value;
    checked[key] = valueF;
    Object.keys(relation)
      .reverse()
      .map((y) => {
        //当前是刚好等于便利值时
        if (key == y) {
          // 找到他的父节点
          upIndex = relation[key];
          const fkey = downkeys[upIndex];
          let i = 0;
          let ai = 0;
          let ii = fkey.length;
          fkey.map((item: any) => {
            if (checked[item]) {
              i++;
            }
            if (indeterminate[item]) {
              ai++;
            }
          });
          if (i == ii) {
            checked[upIndex] = true;
          } else {
            checked[upIndex] = false;
          }
          if (ai > 0) {
            indeterminate[upIndex] = true;
          } else {
            if (i == ii || i == 0) {
              indeterminate[upIndex] = false;
            } else {
              indeterminate[upIndex] = true;
            }
          }
        }
        cangeFunF();
      });
    setIndeterminate(indeterminate);
    setChecked(checked);
    columnsFun();
  };
  // 选中菜单下所有button
  const onChangeC = (value: any, key: any) => {
    if (value) {
      childrenk[key] = childrenkeys[key]?.map((item: any) => item.value) || [];
    } else {
      childrenk[key] = [];
    }
    setChildrenk(childrenk);
  };
  // 按钮勾选
  const onAgeChange = (values: any, row: any) => {
    childrenk[row.key] = values;
    setChildrenk(childrenk);
    if (values.length == 0) {
      onChangeF(false, row.key, false);
    } else if (values.length == row.list.length) {
      onChangeF(false, row.key, true);
    } else {
      onChangeF(true, row.key, false);
    }
    columnsFun();
  };
  // 数据回显
  const onAgeChange1 = (value: any, row: any) => {
    if(!childrenk[row.key]){
      childrenk[row.key] = [value];
    }else{
      childrenk[row.key].push(value);
    }
    setChildrenk(childrenk);
    if (childrenk[row.key].length == 0) {
      onChangeF(false, row.key, false);
    } else if (childrenk[row.key].length == row.list.length) {
      onChangeF(false, row.key, true);
    } else {
      onChangeF(true, row.key, false);
    }
    columnsFun();
  };

  // 菜单寻找父级方法
  const cangeFun = () => {
    if (relation[upIndex]) {
      upIndex = relation[upIndex];
      const fkey = downkeys[upIndex];
      let i = 0;
      let ii = fkey.length;
      fkey.map((item: any) => {
        if (checked[item]) {
          i++;
        }
      });
      if (i == ii) {
        checked[upIndex] = true;
        indeterminate[upIndex] = false;
      } else if (i != 0) {
        indeterminate[upIndex] = true;
      } else {
        checked[upIndex] = false;
        indeterminate[upIndex] = false;
      }
    }
    if (relation[upIndex]) {
      cangeFun();
    }
  };
  // 按钮寻找父级方法
  const cangeFunF = () => {
    if (relation[upIndex]) {
      upIndex = relation[upIndex];
      const fkey = downkeys[upIndex];
      let i = 0;
      let ai = 0;
      let ii = fkey.length;
      fkey.map((item: any) => {
        if (checked[item]) {
          i++;
        }
        if (indeterminate[item]) {
          ai++;
        }
      });
      if (i == ii) {
        checked[upIndex] = true;
      } else {
        checked[upIndex] = false;
      }

      if (ai > 0) {
        indeterminate[upIndex] = true;
      } else {
        if (i == ii || i == 0) {
          indeterminate[upIndex] = false;
        } else {
          indeterminate[upIndex] = true;
        }
      }
    }
    if (relation[upIndex]) {
      cangeFunF();
    }
  };
  // 初始化父子关系
  const relationFun = (item: any, y: any) => {
    if (relation[up]) {
      // 获取它的父节点
      up = relation[up];
      // 保存添加节点
      upkeys[item.key].push(up); // 子关系
      downkeys[up].push(y); // 父关系
    }
    if (relation[up]) {
      relationFun(item, y);
    }
  };
  // 初始化根树
  const DataFun = (data: any, key: any) => {
    data.map((item: any) => {
      // 创建key
      relation[item.key] = key;
      // 保存当时的父节点
      Object.keys(relation)
        .reverse()
        .map((y) => {
          //当前是刚好等于便利值时
          if (item.key == y) {
            // 找到他的父节点
            up = relation[item.key];
            // 保存添加节点
            if (upkeys[item.key]) {
              upkeys[item.key].push(up);
            } else {
              upkeys[item.key] = [up];
            }
            if (downkeys[up]) {
              downkeys[up].push(y);
            } else {
              downkeys[up] = [y];
            }
          }
          relationFun(item, y);
        });
      // 添加到data中
      childrenkeys[item.key] = item.list ? item.list : [];
      if (item.children?.length) {
        DataFun(item.children, item.key);
      } else {
        if (downkeys[item.key]) {
          downkeys[item.key].push(item.key); // 父关系
        } else {
          downkeys[item.key] = [item.key];
        }
      }
    });
  };
  const columnsFun = () => {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        render: (text: string, row: any) => {
          return (
            <>
              <Checkbox
                indeterminate={indeterminateFun(row.key)}
                checked={checkedFun(row.key)}
                onChange={(e: any) => {
                  onChange(e, row.key);
                }}
              >
                {text}
              </Checkbox>
            </>
          );
        },
      },

      {
        title: "Age",
        dataIndex: "age",
        render: (a: any, row: any) => {
          return (
            <CheckboxGroup
              options={row.list ? row.list : []}
              value={childrenk[row.key]}
              onChange={(values) => {
                onAgeChange(values, row);
              }}
            />
          );
        },
      },
    ];
    setColumns(columns);
  };

  useEffect(() => {
    DataFun(data, 0);
    columnsFun();

    const list = [
      {
        id: "appManager-app",
        type: "menu",
        level: 1,
        parentId: "",
        title: "菜单1",
        subType: "add",
        power: 1,
      },
      {
        id: "appManager-app-menu",
        type: "menu",
        level: 2,
        parentId: "appManager-app",
        title: "菜单2",
        subType: "delete",
        power: 0,
      },
      {
        id: "appManager-app-menu-edit",
        type: "function",
        level: 1,
        parentId: "appManager-app-menu",
        title: "编辑",
        subType: "see",
        power: 1,
      },
      {
        id: "appManager-app-menu-delete",
        type: "function",
        level: 1,
        parentId: "appManager-app-menu",
        title: "删除",
        subType: "see",
        power: 1,
      },
    ];
    list.map((item: any) => {
      if(item.type == "function"){
        onAgeChange1(item.id, { key: item.parentId, list: childrenkeys[item.parentId] });
      }
    })
    
  }, []);
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        defaultExpandAllRows
        pagination={false}
      />
    </div>
  );
};

export default App;
