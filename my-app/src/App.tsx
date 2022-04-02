import React, { useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Detail from "./pages/router/Detail"
import 'antd/dist/antd.less';
import '@src/App.less';
import routers from "@src/routers"
import Menu from '@src/components/menu/Menu';


function App(props: any) {
  const location = useLocation()
  useEffect(() => {
    // console.log(location)
  }, [location.pathname])
  return (
    <Suspense fallback={"加载中"}>
      <div>
        <Menu routers = {routers} />
      </div>
      <Routes>
        <Route path="/detail/:id" element={<Detail />}></Route>
        {routers.map((itemX: any, indexX: any) => {
          return itemX.children && itemX.children.length > 0 ? <Route key={indexX} path={itemX.path} element={<itemX.element />} >
            {
              itemX.children.map((itemY: any, indexY: any) => {
                if (itemY.index) {
                  return <Route key={indexX + '' + indexY} index element={<itemY.element />} />
                } else {
                  return <Route key={indexX + '' + indexY} path={itemX.path + itemY.path} element={<itemY.element />} />
                }
              })
            }
          </Route>
            : (<Route key={indexX} path={itemX.path} element={<itemX.element />} />)
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
