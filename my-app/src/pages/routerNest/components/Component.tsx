import React, { FC, useEffect, useState } from "react";

const Component: FC<any> = (props: any) => 
{
    const { str, setStr, setChildThis } = props
    const [ childNmae, setChildNmae] = useState("ccc")
    useEffect(() => {
        setChildThis(childNmae)
    }, [childNmae])
    return <>
        Component
        <hr />
        {str}
        <hr />
        <button onClick={() => {setStr('测试')}}> 修改父组件的变量 </button>
        <hr />
        {childNmae}
        <hr />
        <button onClick={() => { setChildNmae("ccc+ccc") }}>修改子组件自己的变量</button>
    </>
}

export default Component
