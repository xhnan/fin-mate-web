// Menu related types used across the application

/** 菜单类型：M-菜单, I-iframe, L-外链, B-按钮 */
export type MenuType = "M" | "I" | "L" | "B";

/** 父级菜单下拉项 */
export interface ParentOption {
  label: string;
  value: number | string;
}

/** 菜单项（持久化/接口用） */
export interface MenuItem {
  id?: number | string;
  parentId?: number | string;
  menuType: MenuType;
  menuName: string;
  name?: string; // 路由名称
  path?: string; // 路由路径
  component?: string; // 组件路径
  perms?: string; // 权限标识
  icon?: string; // 左侧图标
  rightIcon?: string; // 右侧额外图标
  sort?: number;
  redirect?: string;
  enterAnimation?: string;
  leaveAnimation?: string;
  activeMenu?: string;
  parentVisible?: boolean;
  visible?: 0 | 1; // 是否显示
  cache?: 0 | 1; // 是否缓存
  affix?: 0 | 1; // 是否固定标签页
  status?: 0 | 1;
  remark?: string;
  // 扩展字段占位，接口可能返回更多字段
  [key: string]: any;
}

/** 表单使用的数据结构（与 MenuItem 相近，可根据需要进一步细分） */
export type MenuFormData = Partial<MenuItem> & {
  // 强制一些在表单层面常用的字段类型
  sort?: number;
  menuType?: MenuType;
};
