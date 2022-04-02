import React, { FC, useEffect, useState } from "react";
import Component from "./components/Component";
import Components from "./components/Components";

const Child: FC<any> = (props: any) => {
    const [str, setStr] = useState("")
    const [value, setValue] = useState("")
    const [childThis, setChildThis] = useState<any>("")
    useEffect(() => {
        // console.log(childThis);
    }, [childThis])
    return <>
        Child
        <hr/>
        <input type="text" value={value} onChange={(e) => { setValue(e.target.value) } }/>
        <hr/>
        <button onClick={() => { setStr(value) }}>修改子项变量</button>
        <hr/>
        <Component str={str} setStr={setStr} setChildThis={setChildThis} />
        <hr />
        父组件取的子变量 {childThis}
        <Components str={str} setStr={setStr}/>
    </>
}

export default Child
