/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Table, Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { list, data } from "./data"
const CheckboxGroup = Checkbox.Group;

let relation = {};
let upkeys = {};
let downkeys = {};
let childrenkeys = {};
let up = "";
let upIndex = "";

const App = () => {
  const [checked, setChecked] = useState({});
  const [indeterminate, setIndeterminate] = useState({});
  const [childrenk, setChildrenk] = useState({});
  const [columns, setColumns] = useState([]);
  // 获取选中
  const checkedFun = (key) => {
    return checked[key];
  };
  // 获取方框
  const indeterminateFun = (key) => {
    return indeterminate[key];
  };
  // 菜单勾选
  const onChange = (e, key) => {
    const value = e.target ? e.target.checked : e;
    checked[key] = value;
    indeterminate[key] = false;
    downkeys[key]?.map((item) => {
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
          fkey.map((item) => {
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
  const onChangeF = async (value, key, valueF) => {
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
          fkey.map((item) => {
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
  const onChangeC = (value, key) => {
    if (value) {
      childrenk[key] = childrenkeys[key]?.map((item) => item.value) || [];
    } else {
      childrenk[key] = [];
    }
    setChildrenk(childrenk);
  };
  // 按钮勾选
  const onAgeChange = (values, row) => {
    childrenk[row.id] = values;
    setChildrenk(childrenk);
    if (values.length == 0) {
      onChangeF(false, row.id, false);
    } else if (values.length == row.function.length) {
      onChangeF(false, row.id, true);
    } else {
      onChangeF(true, row.id, false);
    }
    columnsFun();
  };
  // 数据回显
  const onAgeChange1 = (value, row) => {
    if (!childrenk[row.id]) {
      childrenk[row.id] = [value];
    } else {
      childrenk[row.id].push(value);
    }
    console.log(childrenk)
    setChildrenk(childrenk);
    if (childrenk[row.id].length == 0) {
      onChangeF(false, row.id, false);
    } else if (childrenk[row.id].length == row.function.length) {
      onChangeF(false, row.id, true);
    } else {
      onChangeF(true, row.id, false);
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
      fkey.map((item) => {
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
      fkey.map((item) => {
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
  const relationFun = (item, y) => {
    if (relation[up]) {
      // 获取它的父节点
      up = relation[up];
      // 保存添加节点
      upkeys[item.id].push(up); // 子关系
      downkeys[up].push(y); // 父关系
    }
    if (relation[up]) {
      relationFun(item, y);
    }
  };
  // 初始化根树
  const DataFun = (data, key) => {
    data.map((item) => {
      // 创建key
      relation[item.id] = key;
      // 保存当时的父节点
      Object.keys(relation)
        .reverse()
        .map((y) => {
          //当前是刚好等于便利值时
          if (item.id == y) {
            // 找到他的父节点
            up = relation[item.id];
            // 保存添加节点
            if (upkeys[item.id]) {
              upkeys[item.id].push(up);
            } else {
              upkeys[item.id] = [up];
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
      childrenkeys[item.id] = item.function ? item.function : [];
      if (item.children?.length) {
        DataFun(item.children, item.id);
      } else {
        if (downkeys[item.id]) {
          downkeys[item.id].push(item.id); // 父关系
        } else {
          downkeys[item.id] = [item.id];
        }
      }
    });
  };
  const columnsFun = () => {
    const columns = [
      {
        title: "Name",
        dataIndex: "title",
        render: (text, row) => {
          return (
            <>
              <Checkbox
                indeterminate={indeterminateFun(row.id)}
                checked={checkedFun(row.id)}
                onChange={(e) => {
                  onChange(e, row.id);
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
        render: (a, row) => {
          return (
            <CheckboxGroup
              options={row.function ? row.function : []}
              value={childrenk[row.id]}
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
    list.map((item) => {
      if (item.type == "function") {
        console.log(item)
        onAgeChange1(item.id, {
          id: item.parentId,
          function: childrenkeys[item.parentId],
        });
      }
    });
  }, []);
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={"id"}
        defaultExpandAllRows
        pagination={false}
      />
    </div>
  );
};

export default App;
