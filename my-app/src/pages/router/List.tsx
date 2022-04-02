import React, { FC } from "react";
import { useNavigate } from "react-router-dom"

const List: FC<any> = (props: any) => {
    const navigate = useNavigate()
    return <>
        List
        <hr />
        <button onClick={() => { navigate('/detail/abc', {
            state: {
                id: "abc"
            }
        }) }}>详情</button>
    </>
}

export default List
