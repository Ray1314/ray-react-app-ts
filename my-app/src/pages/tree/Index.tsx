/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Table, Checkbox } from "antd";
import React, { useEffect, useState } from "react";

interface DataType {
    key: React.ReactNode;
    name: string;
    age: number;
    address: string;
    children?: DataType[];
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
                        key: 131,
                        name: "Jim Green",
                        age: 42,
                        address: "London No. 2 Lake Park",
                        children: [
                            {
                                key: 1311,
                                name: "Jim Green jr.",
                                age: 25,
                                address: "London No. 3 Lake Park",
                            },
                            {
                                key: 1312,
                                name: "Jimmy Green sr.",
                                age: 18,
                                address: "London No. 4 Lake Park",
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

let relation: any = {}
let upkeys: any = {}
let downkeys: any = {}
let up: any = ''
let upIndex = ''

const App: React.FC = () => {
    const [checked, setChecked] = useState<any>({});
    const [indeterminate, setIndeterminate] = useState<any>({});
    const [columns, setColumns] = useState<any>([]);
    const checkedFun = (key: any) => {
        return checked[key];
    };
    const indeterminateFun = (key: any) => {
        return indeterminate[key];
    };
    const onChange = (e: any, key: any) => {
        const value = e.target.checked;
        checked[key] = value;
        indeterminate[key] = false
        downkeys[key]?.map((item: any) => {
            checked[item] = value;
        })
        Object.keys(relation).reverse().map((y) => {

            //当前是刚好等于便利值时
            if (key == y) {
                // 找到他的父节点
                upIndex = relation[key]
                const fkey = downkeys[upIndex]
                let i = 0;
                let ii = fkey.length
                fkey.map((item: any) => {
                    if(checked[item]){
                        i++
                    }
                })
                if(i == ii){
                    checked[upIndex] = true
                    indeterminate[upIndex] = false
                } else if(i != 0) {
                    checked[upIndex] = false
                    indeterminate[upIndex] = true
                    
                }else {
                    checked[upIndex] = false
                    indeterminate[upIndex] = false
                }
            }
            cangeFun()
        })
        setIndeterminate(indeterminate)
        setChecked(checked);
        columnsFun()
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
                    return <Checkbox>{row.name}</Checkbox>;
                },
            },
        ];
        setColumns(columns);
    }

    useEffect(() => {
        columnsFun()
        DataFun(data, 0);
        console.log(downkeys)
        console.log(upkeys)
    }, []);

    const cangeFun = () => {
        if (relation[upIndex]) {
            upIndex = relation[upIndex]
            const fkey = downkeys[upIndex]
            let i = 0;
            let ii = fkey.length
            fkey.map((item: any) => {
                if(checked[item]){
                    i++
                }
            })
            if(i == ii){
                checked[upIndex] = true
                indeterminate[upIndex] = false
            } else if(i != 0) {
                indeterminate[upIndex] = true
            }else {
                checked[upIndex] = false
                indeterminate[upIndex] = false
            }
        }
        if(relation[upIndex]){
            cangeFun()
        }
    }
    const relationFun = (item: any, y: any) => {
        if (relation[up]) {
            // 获取它的父节点
            up = relation[up]
            // 保存添加节点
            upkeys[item.key].push(up)   // 子关系
            downkeys[up].push(y)        // 父关系 
        }
        if (relation[up]) {
            relationFun(item, y)
        }
    }
    const DataFun = (data: any, key: any) => {
        data.map((item: any) => {
            // 创建key
            relation[item.key] = key
            // 保存当时的父节点
            Object.keys(relation).reverse().map((y) => {
                //当前是刚好等于便利值时
                if (item.key == y) {
                    // 找到他的父节点
                    up = relation[item.key]
                    // 保存添加节点
                    if (upkeys[item.key]) {
                        upkeys[item.key].push(up)
                    } else {
                        upkeys[item.key] = [up]
                    }
                    if (downkeys[up]) {
                        downkeys[up].push(y)
                    } else {
                        downkeys[up] = [y]
                    }
                }
                relationFun(item, y)
            })
            // 添加到data中
            if (item.children?.length) {
                DataFun(item.children, item.key);
            } else {
                if (downkeys[item.key]) {
                    downkeys[item.key].push(item.key)  // 父关系
                } else {
                    downkeys[item.key] = [item.key]
                }
                // setObjkey(downkeys)
            }
        });
    };
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    );
};

export default App;
