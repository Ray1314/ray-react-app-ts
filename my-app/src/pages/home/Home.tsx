import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "antd";
import { get } from '../../service/http'

const Home: FC<any> = (props: any) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { number } = useSelector((state: any) => state)
    useEffect(() => {
        get('/').then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return <>
        Home
        <hr />
        {number}
        <hr />
         <Button onClick={() => {dispatch({type: "JIA"}) }}>加</Button>
         <Button onClick={() => {dispatch({type: "JIAN"}) }}>减</Button>
        <hr />

        <button onClick={() => { navigate('/list') }}>List</button>
    </>
}

export default Home
