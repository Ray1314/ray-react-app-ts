import { lazy } from "react"

const routers: Array<any> = [
    {
        path: '/',
        element: lazy(() => import("./pages/home/Home")),
        name: 'Home',
        index: false,
        params: '',
        children: []
    },
    {
        path: '/tree',
        element: lazy(() => import("./pages/tree/Index")),
        name: 'Terr',
        index: false,
        params: '',
    },
    {
        path: '/list',
        element: lazy(() => import("./pages/router/List")),
        name: 'List',
        index: false,
        params: '',
        children: []
    },
    {
        path: '/father',
        element: lazy(() => import("./pages/routerNest/Father")),
        name: 'Father',
        index: false,
        params: '',
        children: [
            {
                path: '',
                element: lazy(() => import("./pages/routerNest/ChildDefault")),
                name: 'ChildDefault',
                index: true,
                params: '',
                children: []
            },
            {
                path: 'child',
                element: lazy(() => import("./pages/routerNest/Child")),
                name: 'Child',
                index: false,
                params: '',
                children: []
            },
        ]
    }
]
export default routers
