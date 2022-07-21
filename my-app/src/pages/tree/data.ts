interface DataType {
  id: string;
  title: string;
  key: string;
  power?: number;
  type?: string;
  level?: number;
  parentId?: string;
  des?: string;
  extra?: string;
  icon?: string;
  subType?: string;
  children?: DataType[];
  function?: any[];
}
export const list: DataType[]= [
  {
    id: "appManager",
    type: "menu",
    level: 1,
    des: "应用",
    title: "应用",
    key: "/appmanage",
    extra: "",
  },
  {
    id: "appManager-app",
    type: "menu",
    level: 2,
    parentId: "appManager",
    des: "我的应用",
    title: "我的应用",
    key: "/appmanage",
    icon: "appicon-a-wodeyingyongxuanzhongtai",
    extra: "",
  },
  {
    id: "appManager-app-add",
    type: "function",
    level: -1,
    parentId: "appManager-app",
    des: "我的应用新建",
    title: "新建",
    key: "appManager-app-add",
    subType: "add",
    icon: "",
    extra: "",
  },
  {
    id: "appManager-app-delete",
    type: "function",
    level: -1,
    parentId: "appManager-app",
    des: "我的应用删除",
    title: "删除",
    key: "appManager-app-delete",
    subType: "delete",
    icon: "",
    extra: "",
  },
  {
    id: "appManager-app-edit",
    type: "function",
    level: -1,
    parentId: "appManager-app",
    des: "我的应用编辑",
    title: "编辑",
    key: "appManager-app-edit",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "appManager-app-inserting",
    type: "function",
    level: -1,
    parentId: "appManager-app",
    des: "我的应用下线",
    title: "下线",
    key: "appManager-app-inserting",
    subType: "inserting",
    icon: "",
    extra: "",
  },
  {
    id: "appManager-app-see",
    type: "function",
    level: -1,
    parentId: "appManager-app",
    des: "我的应用可见",
    title: "可见",
    key: "appManager-app-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "flow",
    type: "menu",
    level: 1,
    des: "流程",
    title: "流程",
    key: "/flow/asset",
    extra: "",
  },
  {
    id: "flow-asset",
    type: "menu",
    level: 2,
    parentId: "flow",
    des: "流程资产库",
    title: "流程资产库",
    key: '/flow/asset"',
    icon: "appicon-a-liuchengkuxuanzhongtai",
    extra: "",
  },
  {
    id: "flow-asset-add",
    type: "function",
    level: -1,
    parentId: "flow-asset",
    des: "流程资产库新建",
    title: "新建",
    key: "flow-asset-add",
    subType: "add",
    icon: "",
    extra: "",
  },
  {
    id: "flow-asset-delete",
    type: "function",
    level: -1,
    parentId: "flow-asset",
    des: "流程资产库删除",
    title: "删除",
    key: "flow-asset-delete",
    subType: "delete",
    icon: "",
    extra: "",
  },
  {
    id: "flow-asset-disable",
    type: "function",
    level: -1,
    parentId: "flow-asset",
    des: "流程资产库停用",
    title: "停用",
    key: "flow-asset-disable",
    subType: "disable",
    icon: "",
    extra: "",
  },
  {
    id: "flow-asset-edit",
    type: "function",
    level: -1,
    parentId: "flow-asset",
    des: "流程资产库编辑",
    title: "编辑",
    key: "flow-asset-edit",
    subType: "edit",
    icon: "",
    extra: "",
  },
  {
    id: "flow-asset-enable",
    type: "function",
    level: -1,
    parentId: "flow-asset",
    des: "流程资产库启用",
    title: "启用",
    key: "flow-asset-enable",
    subType: "enable",
    icon: "",
    extra: "",
  },
  {
    id: "flow-asset-export",
    type: "function",
    level: -1,
    parentId: "flow-asset",
    des: "流程资产库导出",
    title: "导出",
    key: "flow-asset-export",
    subType: "export",
    icon: "",
    extra: "",
  },
  {
    id: "flow-asset-import",
    type: "function",
    level: -1,
    parentId: "flow-asset",
    des: "流程资产库导入",
    title: "导入",
    key: "flow-asset-import",
    subType: "import",
    icon: "",
    extra: "",
  },
  {
    id: "flow-asset-publish",
    type: "function",
    level: -1,
    parentId: "flow-asset",
    des: "流程资产库发布",
    title: "发布",
    key: "flow-asset-publish",
    subType: "publish",
    icon: "",
    extra: "",
  },
  {
    id: "flow-asset-see",
    type: "function",
    level: -1,
    parentId: "flow-asset",
    des: "流程资产库可见",
    title: "可见",
    key: "flow-asset-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "flow-casesearch",
    type: "menu",
    level: 2,
    parentId: "flow",
    des: "搜索流程实例",
    title: "搜索流程实例",
    key: "/flow/casesearch",
    icon: "appicon-a-liuchengkuxuanzhongtai",
    extra: "",
  },
  {
    id: "flow-casesearch-pause",
    type: "function",
    level: -1,
    parentId: "flow-casesearch",
    des: "查询流程实例暂停",
    title: "暂停",
    key: "flow-casesearch-pause",
    subType: "pause",
    icon: "",
    extra: "",
  },
  {
    id: "flow-casesearch-see",
    type: "function",
    level: -1,
    parentId: "flow-casesearch",
    des: "查询流程实例可见",
    title: "可见",
    key: "flow-casesearch-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "flow-data",
    type: "menu",
    level: 2,
    parentId: "flow",
    des: "数据管理",
    title: "数据管理",
    key: "/flow/data",
    icon: "appicon-a-liuchengkuxuanzhongtai",
    extra: "",
  },
  {
    id: "flow-data-delete",
    type: "function",
    level: -1,
    parentId: "flow-data",
    des: "数据源管理删除",
    title: "删除",
    key: "flow-data-delete",
    subType: "delete",
    icon: "",
    extra: "",
  },
  {
    id: "flow-data-edit",
    type: "function",
    level: -1,
    parentId: "flow-data",
    des: "数据源管理编辑",
    title: "编辑",
    key: "flow-data-edit",
    subType: "edit",
    icon: "",
    extra: "",
  },
  {
    id: "flow-data-see",
    type: "function",
    level: -1,
    parentId: "flow-data",
    des: "数据源管理可见",
    title: "可见",
    key: "flow-data-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "flow-monitor",
    type: "menu",
    level: 2,
    parentId: "flow",
    des: "流程监控",
    title: "流程监控",
    key: "/flow/monitor",
    icon: "appicon-a-liuchengkuxuanzhongtai",
    extra: "",
  },
  {
    id: "flow-monitor-configuration",
    type: "function",
    level: -1,
    parentId: "flow-monitor",
    des: "流程监控业务配置",
    title: "业务配置",
    key: "flow-monitor-configuration",
    subType: "configuration",
    icon: "",
    extra: "",
  },
  {
    id: "flow-monitor-pause",
    type: "function",
    level: -1,
    parentId: "flow-monitor",
    des: "流程监控暂停",
    title: "暂停实例",
    key: "flow-monitor-pause",
    subType: "pause",
    icon: "",
    extra: "",
  },
  {
    id: "flow-monitor-see",
    type: "function",
    level: -1,
    parentId: "flow-monitor",
    des: "流程监控可见",
    title: "可见",
    key: "flow-monitor-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "setting",
    type: "menu",
    level: 1,
    des: "配置",
    title: "配置",
    key: "/configure/organization",
    extra: "",
  },
  {
    id: "setting-organization",
    type: "menu",
    level: 2,
    parentId: "setting",
    des: "组织管理",
    title: "组织管理",
    key: "/configure/organization",
    icon: "appicon-a-liuchengkuxuanzhongtai",
    extra: "",
  },
  {
    id: "setting-organization-add",
    type: "function",
    level: -1,
    parentId: "setting-organization",
    des: "组织新建",
    title: "新建",
    key: "setting-organization-add",
    subType: "add",
    icon: "",
    extra: "",
  },
  {
    id: "setting-organization-delete",
    type: "function",
    level: -1,
    parentId: "setting-organization",
    des: "组织删除",
    title: "删除",
    key: "setting-organization-delete",
    subType: "delete",
    icon: "",
    extra: "",
  },
  {
    id: "setting-organization-edit",
    type: "function",
    level: -1,
    parentId: "setting-organization",
    des: "组织编辑",
    title: "编辑",
    key: "setting-organization-edit",
    subType: "edit",
    icon: "",
    extra: "",
  },
  {
    id: "setting-organization-see",
    type: "function",
    level: -1,
    parentId: "setting-organization",
    des: "组织可见",
    title: "可见",
    key: "setting-organization-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "setting-roles",
    type: "menu",
    level: 2,
    parentId: "setting",
    des: "角色管理",
    title: "角色管理",
    key: "/configure/roles",
    icon: "appicon-a-liuchengkuxuanzhongtai",
    extra: "",
  },
  {
    id: "setting-roles-add",
    type: "function",
    level: -1,
    parentId: "setting-roles",
    des: "角色新建",
    title: "新建",
    key: "setting-roles-add",
    subType: "add",
    icon: "",
    extra: "",
  },
  {
    id: "setting-roles-delete",
    type: "function",
    level: -1,
    parentId: "setting-roles",
    des: "角色删除",
    title: "删除",
    key: "setting-roles-delete",
    subType: "delete",
    icon: "",
    extra: "",
  },
  {
    id: "setting-roles-edit",
    type: "function",
    level: -1,
    parentId: "setting-roles",
    des: "角色编辑",
    title: "编辑",
    key: "setting-roles-edit",
    subType: "edit",
    icon: "",
    extra: "",
  },
  {
    id: "setting-roles-see",
    type: "function",
    level: -1,
    parentId: "setting-roles",
    des: "角色可见",
    title: "可见",
    key: "setting-roles-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "setting-rpa",
    type: "menu",
    level: 2,
    parentId: "setting",
    des: "RPA配置",
    title: "RPA配置",
    key: "/configure/rpa",
    icon: "appicon-a-liuchengkuxuanzhongtai",
    extra: "",
  },
  {
    id: "setting-rpa-add",
    type: "function",
    level: -1,
    parentId: "setting-rpa",
    des: "RPA配置新建",
    title: "新建",
    key: "setting-rpa-add",
    subType: "add",
    icon: "",
    extra: "",
  },
  {
    id: "setting-rpa-delete",
    type: "function",
    level: -1,
    parentId: "setting-rpa",
    des: "RPA配置删除",
    title: "删除",
    key: "setting-rpa-delete",
    subType: "delete",
    icon: "",
    extra: "",
  },
  {
    id: "setting-rpa-edit",
    type: "function",
    level: -1,
    parentId: "setting-rpa",
    des: "RPA配置编辑",
    title: "编辑",
    key: "setting-rpa-edit",
    subType: "edit",
    icon: "",
    extra: "",
  },
  {
    id: "setting-rpa-see",
    type: "function",
    level: -1,
    parentId: "setting-rpa",
    des: "RPA配置可见",
    title: "可见",
    key: "setting-rpa-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "setting-user",
    type: "menu",
    level: 2,
    parentId: "setting",
    des: "用户管理",
    title: "用户管理",
    key: "/configure/user",
    icon: "appicon-a-liuchengkuxuanzhongtai",
    extra: "",
  },
  {
    id: "setting-user-user",
    type: "menu",
    level: 3,
    parentId: "setting-user",
    des: "用户",
    title: "用户",
    key: "/configure/user",
    icon: "appicon-a-liuchengkuxuanzhongtai",
    extra: "",
  },
  {
    id: "setting-user-user-add",
    type: "function",
    level: -1,
    parentId: "setting-user-user",
    des: "用户新建",
    title: "新建",
    key: "setting-user-user-add",
    subType: "add",
    icon: "",
    extra: "",
  },
  {
    id: "setting-user-user-delete",
    type: "function",
    level: -1,
    parentId: "setting-user-user",
    des: "用户删除",
    title: "删除",
    key: "setting-user-user-delete",
    subType: "delete",
    icon: "",
    extra: "",
  },
  {
    id: "setting-user-user-disable",
    type: "function",
    level: -1,
    parentId: "setting-user-user",
    des: "用户禁用",
    title: "禁用",
    key: "setting-user-user-disable",
    subType: "disable",
    icon: "",
    extra: "",
  },
  {
    id: "setting-user-user-see",
    type: "function",
    level: -1,
    parentId: "setting-user-user",
    des: "用户可见",
    title: "可见",
    key: "setting-user-user-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "setting-user-userGroup",
    type: "menu",
    level: 3,
    parentId: "setting-user",
    des: "用户组",
    title: "用户组",
    key: "/configure/usergroup",
    icon: "appicon-a-liuchengkuxuanzhongtai",
    extra: "",
  },
  {
    id: "setting-user-userGroup-add",
    type: "function",
    level: -1,
    parentId: "setting-user-userGroup",
    des: "用户组新建",
    title: "新建",
    key: "setting-user-userGroup-add",
    subType: "add",
    icon: "",
    extra: "",
  },
  {
    id: "setting-user-userGroup-delete",
    type: "function",
    level: -1,
    parentId: "setting-user-userGroup",
    des: "用户组删除",
    title: "删除",
    key: "setting-user-userGroup-delete",
    subType: "delete",
    icon: "",
    extra: "",
  },
  {
    id: "setting-user-userGroup-edit",
    type: "function",
    level: -1,
    parentId: "setting-user-userGroup",
    des: "用户组编辑",
    title: "编辑",
    key: "setting-user-userGroup-edit",
    subType: "edit",
    icon: "",
    extra: "",
  },
  {
    id: "setting-user-userGroup-see",
    type: "function",
    level: -1,
    parentId: "setting-user-userGroup",
    des: "用户组可见",
    title: "可见",
    key: "setting-user-userGroup-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "workCenter",
    type: "menu",
    level: 1,
    des: "工作中心",
    title: "工作中心",
    key: 'btoa("/work/staging")',
    extra: "",
  },
  {
    id: "workCenter-workProcess",
    type: "menu",
    level: 2,
    parentId: "workCenter",
    des: "发起新流程",
    title: "发起新流程",
    key: "/work/process",
    icon: "appicon-a-wodeyingyongxuanzhongtai",
    extra: "",
  },
  {
    id: "workCenter-workProcess-see",
    type: "function",
    level: -1,
    parentId: "workCenter-workProcess",
    des: "发起新流程可见",
    title: "可见",
    key: "workCenter-workProcess-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "workCenter-workStage",
    type: "menu",
    level: 2,
    parentId: "workCenter",
    des: "我的工作台",
    title: "我的工作台",
    key: "/work/staging",
    icon: "appicon-a-yingyongshichangxuanzhongtai",
    extra: "",
  },
  {
    id: "workCenter-workStage-see",
    type: "function",
    level: -1,
    parentId: "workCenter-workStage",
    des: "我的工作台可见",
    title: "可见",
    key: "workCenter-workStage-see",
    subType: "see",
    icon: "",
    extra: "",
  },
  {
    id: "workCenter-workTask",
    type: "menu",
    level: 2,
    parentId: "workCenter",
    des: "我的任务",
    title: "我的任务",
    key: "/work/task",
    icon: "appicon-a-wodeyingyongxuanzhongtai",
    extra: "",
  },
  {
    id: "workCenter-workTask-see",
    type: "function",
    level: -1,
    parentId: "workCenter-workTask",
    des: "我的任务可见",
    title: "可见",
    key: "workCenter-workTask-see",
    subType: "see",
    icon: "",
    extra: "",
  },
];

export const data: DataType[] = [
  {
      "id": "appManager",
      "title": "应用",
      "key": "/appmanage",
      "power": 0,
      "children": [
          {
              "id": "appManager-app",
              "parentId": "appManager",
              "title": "我的应用",
              "key": "/appmanage",
              "icon": "appicon-a-wodeyingyongxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "appManager-app-add",
                      "value": "appManager-app-add",
                      "parentId": "appManager-app",
                      "title": "新建",
                      "label": "新建",
                      "subType": "add",
                      "power": 0
                  },
                  {
                      "id": "appManager-app-delete",
                      "value": "appManager-app-delete",
                      "parentId": "appManager-app",
                      "title": "删除",
                      "label": "删除",
                      "subType": "delete",
                      "power": 0
                  },
                  {
                      "id": "appManager-app-edit",
                      "value": "appManager-app-edit",
                      "parentId": "appManager-app",
                      "title": "编辑",
                      "label": "编辑",
                      "subType": "see",
                      "power": 0
                  },
                  {
                      "id": "appManager-app-inserting",
                      "value": "appManager-app-inserting",
                      "parentId": "appManager-app",
                      "title": "下线",
                      "label": "下线",
                      "subType": "inserting",
                      "power": 0
                  },
                  {
                      "id": "appManager-app-see",
                      "value": "appManager-app-see",
                      "parentId": "appManager-app",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          }
      ],
      "function": []
  },
  {
      "id": "flow",
      "title": "流程",
      "key": "/flow/asset",
      "power": 0,
      "children": [
          {
              "id": "flow-asset",
              "parentId": "flow",
              "title": "流程资产库",
              "key": "/flow/asset\"",
              "icon": "appicon-a-liuchengkuxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "flow-asset-add",
                      "value": "flow-asset-add",
                      "parentId": "flow-asset",
                      "title": "新建",
                      "label": "新建",
                      "subType": "add",
                      "power": 0
                  },
                  {
                      "id": "flow-asset-delete",
                      "value": "flow-asset-delete",
                      "parentId": "flow-asset",
                      "title": "删除",
                      "label": "删除",
                      "subType": "delete",
                      "power": 0
                  },
                  {
                      "id": "flow-asset-disable",
                      "value": "flow-asset-disable",
                      "parentId": "flow-asset",
                      "title": "停用",
                      "label": "停用",
                      "subType": "disable",
                      "power": 0
                  },
                  {
                      "id": "flow-asset-edit",
                      "value": "flow-asset-edit",
                      "parentId": "flow-asset",
                      "title": "编辑",
                      "label": "编辑",
                      "subType": "edit",
                      "power": 0
                  },
                  {
                      "id": "flow-asset-enable",
                      "value": "flow-asset-enable",
                      "parentId": "flow-asset",
                      "title": "启用",
                      "label": "启用",
                      "subType": "enable",
                      "power": 0
                  },
                  {
                      "id": "flow-asset-export",
                      "value": "flow-asset-export",
                      "parentId": "flow-asset",
                      "title": "导出",
                      "label": "导出",
                      "subType": "export",
                      "power": 0
                  },
                  {
                      "id": "flow-asset-import",
                      "value": "flow-asset-import",
                      "parentId": "flow-asset",
                      "title": "导入",
                      "label": "导入",
                      "subType": "import",
                      "power": 0
                  },
                  {
                      "id": "flow-asset-publish",
                      "value": "flow-asset-publish",
                      "parentId": "flow-asset",
                      "title": "发布",
                      "label": "发布",
                      "subType": "publish",
                      "power": 0
                  },
                  {
                      "id": "flow-asset-see",
                      "value": "flow-asset-see",
                      "parentId": "flow-asset",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          },
          {
              "id": "flow-casesearch",
              "parentId": "flow",
              "title": "搜索流程实例",
              "key": "/flow/casesearch",
              "icon": "appicon-a-liuchengkuxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "flow-casesearch-pause",
                      "value": "flow-casesearch-pause",
                      "parentId": "flow-casesearch",
                      "title": "暂停",
                      "label": "暂停",
                      "subType": "pause",
                      "power": 0
                  },
                  {
                      "id": "flow-casesearch-see",
                      "value": "flow-casesearch-see",
                      "parentId": "flow-casesearch",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          },
          {
              "id": "flow-data",
              "parentId": "flow",
              "title": "数据管理",
              "key": "/flow/data",
              "icon": "appicon-a-liuchengkuxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "flow-data-delete",
                      "value": "flow-data-delete",
                      "parentId": "flow-data",
                      "title": "删除",
                      "label": "删除",
                      "subType": "delete",
                      "power": 0
                  },
                  {
                      "id": "flow-data-edit",
                      "value": "flow-data-edit",
                      "parentId": "flow-data",
                      "title": "编辑",
                      "label": "编辑",
                      "subType": "edit",
                      "power": 0
                  },
                  {
                      "id": "flow-data-see",
                      "value": "flow-data-see",
                      "parentId": "flow-data",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          },
          {
              "id": "flow-monitor",
              "parentId": "flow",
              "title": "流程监控",
              "key": "/flow/monitor",
              "icon": "appicon-a-liuchengkuxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "flow-monitor-configuration",
                      "value": "flow-monitor-configuration",
                      "parentId": "flow-monitor",
                      "title": "业务配置",
                      "label": "业务配置",
                      "subType": "configuration",
                      "power": 0
                  },
                  {
                      "id": "flow-monitor-pause",
                      "value": "flow-monitor-pause",
                      "parentId": "flow-monitor",
                      "title": "暂停实例",
                      "label": "暂停实例",
                      "subType": "pause",
                      "power": 0
                  },
                  {
                      "id": "flow-monitor-see",
                      "value": "flow-monitor-see",
                      "parentId": "flow-monitor",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          }
      ],
      "function": []
  },
  {
      "id": "setting",
      "title": "配置",
      "key": "/configure/organization",
      "power": 0,
      "children": [
          {
              "id": "setting-organization",
              "parentId": "setting",
              "title": "组织管理",
              "key": "/configure/organization",
              "icon": "appicon-a-liuchengkuxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "setting-organization-add",
                      "value": "setting-organization-add",
                      "parentId": "setting-organization",
                      "title": "新建",
                      "label": "新建",
                      "subType": "add",
                      "power": 0
                  },
                  {
                      "id": "setting-organization-delete",
                      "value": "setting-organization-delete",
                      "parentId": "setting-organization",
                      "title": "删除",
                      "label": "删除",
                      "subType": "delete",
                      "power": 0
                  },
                  {
                      "id": "setting-organization-edit",
                      "value": "setting-organization-edit",
                      "parentId": "setting-organization",
                      "title": "编辑",
                      "label": "编辑",
                      "subType": "edit",
                      "power": 0
                  },
                  {
                      "id": "setting-organization-see",
                      "value": "setting-organization-see",
                      "parentId": "setting-organization",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          },
          {
              "id": "setting-roles",
              "parentId": "setting",
              "title": "角色管理",
              "key": "/configure/roles",
              "icon": "appicon-a-liuchengkuxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "setting-roles-add",
                      "value": "setting-roles-add",
                      "parentId": "setting-roles",
                      "title": "新建",
                      "label": "新建",
                      "subType": "add",
                      "power": 0
                  },
                  {
                      "id": "setting-roles-delete",
                      "value": "setting-roles-delete",
                      "parentId": "setting-roles",
                      "title": "删除",
                      "label": "删除",
                      "subType": "delete",
                      "power": 0
                  },
                  {
                      "id": "setting-roles-edit",
                      "value": "setting-roles-edit",
                      "parentId": "setting-roles",
                      "title": "编辑",
                      "label": "编辑",
                      "subType": "edit",
                      "power": 0
                  },
                  {
                      "id": "setting-roles-see",
                      "value": "setting-roles-see",
                      "parentId": "setting-roles",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          },
          {
              "id": "setting-rpa",
              "parentId": "setting",
              "title": "RPA配置",
              "key": "/configure/rpa",
              "icon": "appicon-a-liuchengkuxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "setting-rpa-add",
                      "value": "setting-rpa-add",
                      "parentId": "setting-rpa",
                      "title": "新建",
                      "label": "新建",
                      "subType": "add",
                      "power": 0
                  },
                  {
                      "id": "setting-rpa-delete",
                      "value": "setting-rpa-delete",
                      "parentId": "setting-rpa",
                      "title": "删除",
                      "label": "删除",
                      "subType": "delete",
                      "power": 0
                  },
                  {
                      "id": "setting-rpa-edit",
                      "value": "setting-rpa-edit",
                      "parentId": "setting-rpa",
                      "title": "编辑",
                      "label": "编辑",
                      "subType": "edit",
                      "power": 0
                  },
                  {
                      "id": "setting-rpa-see",
                      "value": "setting-rpa-see",
                      "parentId": "setting-rpa",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          },
          {
              "id": "setting-user",
              "parentId": "setting",
              "title": "用户管理",
              "key": "/configure/user",
              "icon": "appicon-a-liuchengkuxuanzhongtai",
              "power": 0,
              "children": [
                  {
                      "id": "setting-user-user",
                      "parentId": "setting-user",
                      "title": "用户",
                      "key": "/configure/user",
                      "icon": "appicon-a-liuchengkuxuanzhongtai",
                      "power": 0,
                      "children": [],
                      "function": [
                          {
                              "id": "setting-user-user-add",
                              "value": "setting-user-user-add",
                              "parentId": "setting-user-user",
                              "title": "新建",
                              "label": "新建",
                              "subType": "add",
                              "power": 0
                          },
                          {
                              "id": "setting-user-user-delete",
                              "value": "setting-user-user-delete",
                              "parentId": "setting-user-user",
                              "title": "删除",
                              "label": "删除",
                              "subType": "delete",
                              "power": 0
                          },
                          {
                              "id": "setting-user-user-disable",
                              "value": "setting-user-user-disable",
                              "parentId": "setting-user-user",
                              "title": "禁用",
                              "label": "禁用",
                              "subType": "disable",
                              "power": 0
                          },
                          {
                              "id": "setting-user-user-see",
                              "value": "setting-user-user-see",
                              "parentId": "setting-user-user",
                              "title": "可见",
                              "label": "可见",
                              "subType": "see",
                              "power": 0
                          }
                      ]
                  },
                  {
                      "id": "setting-user-userGroup",
                      "parentId": "setting-user",
                      "title": "用户组",
                      "key": "/configure/usergroup",
                      "icon": "appicon-a-liuchengkuxuanzhongtai",
                      "power": 0,
                      "children": [],
                      "function": [
                          {
                              "id": "setting-user-userGroup-add",
                              "value": "setting-user-userGroup-add",
                              "parentId": "setting-user-userGroup",
                              "title": "新建",
                              "label": "新建",
                              "subType": "add",
                              "power": 0
                          },
                          {
                              "id": "setting-user-userGroup-delete",
                              "value": "setting-user-userGroup-delete",
                              "parentId": "setting-user-userGroup",
                              "title": "删除",
                              "label": "删除",
                              "subType": "delete",
                              "power": 0
                          },
                          {
                              "id": "setting-user-userGroup-edit",
                              "value": "setting-user-userGroup-edit",
                              "parentId": "setting-user-userGroup",
                              "title": "编辑",
                              "label": "编辑",
                              "subType": "edit",
                              "power": 0
                          },
                          {
                              "id": "setting-user-userGroup-see",
                              "value": "setting-user-userGroup-see",
                              "parentId": "setting-user-userGroup",
                              "title": "可见",
                              "label": "可见",
                              "subType": "see",
                              "power": 0
                          }
                      ]
                  }
              ],
              "function": []
          }
      ],
      "function": []
  },
  {
      "id": "workCenter",
      "title": "工作中心",
      "key": "btoa(\"/work/staging\")",
      "power": 0,
      "children": [
          {
              "id": "workCenter-workProcess",
              "parentId": "workCenter",
              "title": "发起新流程",
              "key": "/work/process",
              "icon": "appicon-a-wodeyingyongxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "workCenter-workProcess-see",
                      "value": "workCenter-workProcess-see",
                      "parentId": "workCenter-workProcess",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          },
          {
              "id": "workCenter-workStage",
              "parentId": "workCenter",
              "title": "我的工作台",
              "key": "/work/staging",
              "icon": "appicon-a-yingyongshichangxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "workCenter-workStage-see",
                      "value": "workCenter-workStage-see",
                      "parentId": "workCenter-workStage",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          },
          {
              "id": "workCenter-workTask",
              "parentId": "workCenter",
              "title": "我的任务",
              "key": "/work/task",
              "icon": "appicon-a-wodeyingyongxuanzhongtai",
              "power": 0,
              "children": [],
              "function": [
                  {
                      "id": "workCenter-workTask-see",
                      "value": "workCenter-workTask-see",
                      "parentId": "workCenter-workTask",
                      "title": "可见",
                      "label": "可见",
                      "subType": "see",
                      "power": 0
                  }
              ]
          }
      ],
      "function": []
  }
];
