import React, { FC } from "react";
import { useParams, useLocation } from "react-router-dom"

const Detail: FC<any> = (props: any) => {
    const { id } = useParams()
    const location: any = useLocation()
    const { state } = location
    return <>
        Detail
        <hr/>
        {id}
        <hr/>
        {state.id}
    </>
}

export default Detail
