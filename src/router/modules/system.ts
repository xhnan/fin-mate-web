// 最简代码，也就是这些字段必须有
export default {
  path: "/sys",
  meta: {
    title: "系统管理"
  },
  children: [
    {
      path: "/sys/menu",
      name: "SysMenu",
      component: () => import("@/views/sys/menu/index.vue"),
      meta: {
        title: "菜单管理"
      }
    },
    {
      path: "/sys/user",
      name: "SysUser",
      component: () => import("@/views/sys/user/index.vue"),
      meta: {
        title: "用户管理"
      }
    },
  ]
} satisfies RouteConfigsTable;
