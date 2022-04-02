import React, { FC, useEffect, useState } from "react";
import { Button } from 'antd';

const Component: FC<any> = (props: any) => 
{
    const { str, setStr } = props
    return <>
        Components
        <hr />
        {str}
        <hr />
        <Button onClick={() => {setStr('测试')}}> 修改父组件的变量 </Button>
    </>
}

export default Component
