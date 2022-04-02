import React, { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { Menu } from 'antd';
const { SubMenu } = Menu;

const MenuComponent: FC<any> = ({ routers }) => {
  const location = useLocation()
  const [menuKey, setMenuKey] = useState([location.pathname])
  return <Menu onClick={(e: any) => { setMenuKey(e.keyPath) }} selectedKeys={menuKey} mode="horizontal" >
    {routers.map((itemX: any) => {
      return (
        itemX.children && itemX.children.length > 0 ? (
          <SubMenu title={itemX.name} key={itemX.path} >
            {itemX.children.map((itemY: any) => {
              return <Menu.Item key={itemX.path + '/' + itemY.path}><Link to={itemX.path + '/' + itemY.path}> {itemY.name} </Link></Menu.Item>
            })}
          </SubMenu>
        ) : (
          <Menu.Item key={itemX.path}><Link to={itemX.path}> {itemX.name} </Link></Menu.Item>
        )
      )
    })}
  </Menu>
}

export default MenuComponent
