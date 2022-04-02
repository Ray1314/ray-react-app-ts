import React, { FC } from "react";
import { Outlet } from "react-router-dom"

const Father: FC<any> = (props: any) => {
    return <>
        Father
        <hr />
        <Outlet />
    </>
}

export default Father
