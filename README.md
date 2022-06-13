## 全家桶
    react-typescript 
    react @17
    typescript @4
    webpack @5
    react-hook  @17 
    react-router-dom @6
    antd @4.19
    react-redux @7
    redux @4
    axios @0.26
    less-loader @10
    less @4

## 后端
    express @4



## 建议使用 yarn
## 安装依赖
yarn 
## 启动前端
yarn start
## 启动服务
yarn serve
## 打包前端
yarn build

这是一个 react 脚手架项目，其中包含着当前最新的脚手架配置方式，技术技术栈包括：
.react17 全家桶 （hooks react-redux react-router-dom）
.i18next 国际化
.antd + theme 切换
.styled-components
.eslint + stylelint + prettier （代码风格及格式校验）
.husky + commitizen (git 提交格式化)
.一些项目常用工具组件
本项目会定期维护，将当下 react 生态圈最新技术运用进去。

# 本项目的宗旨

提供一个基本完整的 React 基础开发框架，支持多语言，多主题，less, router, redux, saga， antd, eslint 等完整支持, 方便大家在新项目开发中做到更快、更新、更好用、更简单；节约新的项目 2 ～ 5 天的人力，并规范化项目结构及统一项目风格。

# 分支介绍：

** 1. Master 分支，脚手架包含 React+Redux+React-Router+hooks+less+antd+axios+主题切换+多语言支持的 JS 版本。 **

# 功能与特色

1. 项目集成了当前 react 中最好的 ui 轮子 antd，并添加了主题切换功能
2. 项目具备了本地开发和打包上线的 2 个不同状态的场景
3. 项目集成了 less 样式开发，方便配合 antd 愉快使用
4. 项目已经 npm run eject，如果有特殊需求，可在 webpack.config.js 配置。
5. 项目使用 redux，并使用的最新的 react-redux hooks 的方式便于调用
6. 本项目使用得 axios 来作为 ajax，在 utils 中提供 http 库，对 axios 进行了比较完善的封装
7. 本项目提供了中英文切换功能框架，后续多语言支持比较方便及简单，扩展性好。
8. 本项目使用 react-router-dom 路由方式，并实现路由懒加载路由嵌套
   demo 了如何使用 SPA 方式支持多页面切换，目前是 Welcome -> Login -> Home, 在 home 页面内也实现了多子页面路由切换
9. 为多人协作开发，本项接入 eslint 代码检查 如要取消检查可删除 .eslintrc.js 和 .eslintignore 文件
10. 本项目支持 git cz 提交代码
11. 添加了 http-proxy-middleware 代理
12. 项目使用 prettie 格式化代码

# 项目结构

1. config：用于配置各种变量，有 webpack 中用到的，也有项目中用到的，
   ** 比如"img_add_url"这个字段就是图片上传的前缀，用于图片上传后，后台没有返回完整的图片 url，只返回图片的名称后缀时，在前面加上地址的作用 并修改图片解析防止出现本地图片[]的错误 options: { esModule:false} **
2. build：打包后的代码
3. src/components 全局共用组件放置路径
4. src/pages： 业务功能页面
   xxpage/component 本业务页面及模块使用的组件放置于此。 如果是在项目其他地方也使用了该组件，应将其放到 src/components 目录下
5. src/routes 全局路由配置，页面内小的功能布局切换不建议使用路由切换方式实现。
6. src/server 所有的 ajax 请求都写在这里，方便后续复用，
7. src/styles 所有主题变量，主题切换及公共 css 文件
8. src/store redux store, reduces, action 定义文件放置处
9. src/utils 用于放置公共函数及全局常量定义的地方

# 项目适用对象

1. SPA 应用， 也可以支持多页面方式
2. 适用于采用 antd 设计风格的所有项目
3. 本项目是一个架构基础，旨在更简单的让所有用户在项目架构阶段，简化工作，并且让所有团队成员更快的熟悉这个架构，将更多的精力放在分析需求和代码实现上

# 运行方法（建议使用 yarn，尽量不要用 cnpm）

    安装模块：npm install  （或者 yarn)

    开发模式：npm start  (或者yarn start)

    打包：npm run build

    访问地址：http://localhost:3000

# 注意以及搭建环境时问题汇总

1. 如果在 build 或者 start 的时候出现 node-sass 之类的报错，可以使用 npm rebuild node-sass 来处理下，再 build 或 start，也可以参考[地址](https://juejin.im/post/5cde1df65188250a8f72ff68)。

# 参考

### react hooks react-redux react-router-dom antd i18next theme styled-components

    npx create-react-app my-app
    npm run eject
    yarn add less@2.7.2 less-loader@5.0.0 --save
    yarn add antd --save
    yarn add react-router-dom --save
    yarn add axios --save
    yarn add styled-components --save
    yarn add cz-conventional-changelog -save
    yarn add dotenv-cli -save
    yarn add i18next -save
    yarn add react-i18next -save
    yarn add i18next-xhr-backend -save
    yarn add @reduxjs/toolkit -save
    yarn add commitizen cz-conventional-changelog -D

# 希望

本项目是根据我们收集到的一些需求信息，并且结合我们以往项目经验做的设计，欢迎大家使用并提供反馈及建议，大家一起来完善这个框架。

# ==========================================================================================================================================

# 开发上手说明

## 目录结构说明

    ├─component // 公共组件
    ├─pages     // 所有路由页面
    │  ├─Detail
    │  ├─Home
    │  │  └─store  //本页面局部使用的hooks/state/action/reducer
    |  |  └─components  //本页面使用的组件
    │  ├─Iframe  //Iframe嵌套例子
    │  ├─Index  // 特殊页面 该页面为主框架
    │  ├─List
    │  ├─Login
    │  └─Welcome
    ├─routes    //路由文件
    ├─server    //ajax接口请求
    ├─store     //store文件
    ├─styles    //主题切换和公共颜色文件
    └─utils     // 公共方法文件 其中包括了ajax的封装

## Router 配置说明

    建议将所有全局路由配置都放在src/routes中， 在src/App.js中展开路由，在src/Index/Index.js中构建主界面框架及菜单（左测菜单栏+右侧功能页面的结构）
    Route { //数据定义
        * path 路由
        * icon 图标
        * title 菜单名称 支持语言切换
        * component 组件地址，当它是group入口（二级/三级菜单入口）时，设置为空
        * exact 是否匹配子路由
        * isMenu 是否菜单展示， false时在home的左侧菜单中不展示
        * link 有表示链接第三方链接
        * weight 不同用户的权重， 用于控制用户访问权限，
        * children: 二级菜单
    }

    下面是一个二级菜单的配置Demo
    {
      path: "/second",
      icon: <VideoCameraOutlined />,
      authName: t("common:second"),
      component: "",
      isMenu: true,
      weight: 3,
      children: [ // 子菜单定义
        {
          path: "/detail",
          icon: <VideoCameraOutlined />,
          authName: t("common:detail"),
          component: () => import("../pages/Detail"),
          isMenu: true,
          link: "",
          weight: 3,
        },
      ],
    }
    ** 如果有三级菜单配置需求， 请参见本框架中的实际例子 **

- src/App.js 文件中会遍历所有 routes 配置的子路由，把他们展开成一级路由的扁平结构。
  ** 需要注意的是由于路由文件是组件的形式 该方法只能在组件中拆 **

## 菜单栏 配置说明

1. 根据路由文件 routers/index.js 中的路由配置自动提取
2. 根据上述配置中 item 的 isMenu 判断是否在左侧菜单中显示
3. item 中的 weight 选项是来做用户访问权限控制的, 目前没启用，可以自行完善这个部分。

## 使用 iFrame 嵌入第三方页面说明

1. 如有使用 iframe 跳转第三方或其他页面的需求,请参照 Iframe 页面
2. iframe 所有页面会跳转到 Iframe 路由，相关参数可以配置在给 iframe 的 url 参数中。
3. 动态参数配置，可以在创建 menuItem 是添加 properties 时进行配置。
   ```
        <Menu.Item key={"/index" + route.path} icon={route.icon}>
          <Link
            to={{
              pathname: "/index" + route.path,
              state: { link: route.link },
            }}
          >
            {route.title}
          </Link>
        </Menu.Item>
   ```
   使用 to = {state: 地址 }的方式传参 state 参数可以不同的形式获取

### store @reduxjs/toolkit 使用

本脚手架 demo 了两种创建 store 的方式，一种是传统方式，一种是 reduxjs/tookkit 的 createSlice 方式。

- 如需使用@reduxjs/toolkit 中新提供的 createSlice 方式， 请按如下步骤操作：
  1.  yarn add @reduxjs/toolkit -D
  2.  在入口文件 切换 import store from "./store/store"; // 引入是 store
  3.  使用 store.js reducers.js 文件 删除 index.js reducer.js 文件

## hooks

项目中推荐使用 react hooks 技术。

### .env 使用

    yarn add dotenv-cli -D // 暴露配置的情况
    *** 变量必须以REACT_APP_ 开头 ***
    .env.development 本地开发使用环境变量文件
    .env 线上环境变量文件

#### nginx 配置

    正式发布到nginx服务器上时，需要解决browserHistory模式带来的404问题，参照下面配置做nginx.conf的修改。
    ``
    location / {
        # browserHistory模式 404问题
        try_files $uri $uri/ /react/index.html;
        index index.html;
    }
    ``

### git cz 说明

** 使用定制格式提交 **
yarn add cz_customizable -D
在根目录下添加 .czrc 文件
{ "path": "node_modules/cz-customizable" }

** 或者使用默认格式提交 **
yarn add commitizen cz-conventional-changelog -D
在根目录下添加 .czrc 文件
写入 { "path": "cz-conventional-changelog" }

### 全局格式化代码 说明

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

请谨慎使用 仅项目初始化使用
如果多页面报红执行 npx prettier --write .
