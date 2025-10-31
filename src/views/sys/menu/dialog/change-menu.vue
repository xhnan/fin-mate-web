<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="1000px"
      :before-close="beforeClose"
    >
      <el-form
        ref="formRef"
        :model="menuInfo"
        :rules="rules"
        label-width="110px"
      >
        <el-form-item prop="menuType" label="菜单类型">
          <el-radio-group v-model="menuInfo.menuType">
            <el-radio-button label="M">菜单</el-radio-button>
            <el-radio-button label="I">iframe</el-radio-button>
            <el-radio-button label="L">外链</el-radio-button>
            <el-radio-button label="B">按钮</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <!-- 上级菜单 占满整行 -->
        <el-form-item label="上级菜单" prop="parentId">
          <el-select
            v-model="menuInfo.parentId"
            filterable
            placeholder="请选择上级菜单"
          >
            <el-option
              v-for="item in parentOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <!-- paired rows ordered to match screenshot -->
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="菜单名称" prop="menuName">
              <el-input
                v-model="menuInfo.menuName"
                placeholder="请输入菜单名称"
              />
            </el-form-item>

            <el-form-item label="路由路径" prop="path">
              <el-input v-model="menuInfo.path" placeholder="请输入路由路径" />
            </el-form-item>

            <el-form-item label="菜单排序" prop="sort">
              <el-input-number v-model="menuInfo.sort" :min="1" />
            </el-form-item>

            <el-form-item label="菜单图标" prop="icon">
              <el-input v-model="menuInfo.icon" placeholder="请输入图标类名" />
            </el-form-item>

            <el-form-item label="进场动画" prop="enterAnimation">
              <el-select
                v-model="menuInfo.enterAnimation"
                placeholder="请选择页面进场加载动画"
              >
                <el-option label="无" value="none" />
                <el-option label="淡入" value="fade" />
                <el-option label="滑动" value="slide" />
              </el-select>
            </el-form-item>

            <el-form-item label="菜单激活" prop="activeMenu">
              <el-input
                v-model="menuInfo.activeMenu"
                placeholder="请输入需要激活的菜单"
              />
            </el-form-item>

            <el-form-item label="父级菜单" prop="parentVisible">
              <el-button-group>
                <el-button
                  :type="menuInfo.parentVisible ? 'primary' : 'default'"
                  @click="menuInfo.parentVisible = true"
                >
                  显示
                </el-button>
                <el-button
                  :type="!menuInfo.parentVisible ? 'primary' : 'default'"
                  @click="menuInfo.parentVisible = false"
                >
                  隐藏
                </el-button>
              </el-button-group>
            </el-form-item>

            <el-form-item label="标签页" prop="status">
              <el-button-group>
                <el-button
                  :type="menuInfo.status === 1 ? 'primary' : 'default'"
                  @click="menuInfo.status = 1"
                >
                  允许
                </el-button>
                <el-button
                  :type="menuInfo.status === 0 ? 'primary' : 'default'"
                  @click="menuInfo.status = 0"
                >
                  禁止
                </el-button>
              </el-button-group>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="路由名称" prop="name">
              <el-input v-model="menuInfo.name" placeholder="请输入路由名称" />
            </el-form-item>

            <el-form-item label="组件路径" prop="component">
              <el-input
                v-model="menuInfo.component"
                placeholder="请输入组件路径"
              />
            </el-form-item>

            <el-form-item label="路由重定向" prop="redirect">
              <el-input
                v-model="menuInfo.redirect"
                placeholder="请输入默认跳转地址"
              />
            </el-form-item>

            <el-form-item label="右侧图标" prop="rightIcon">
              <el-input
                v-model="menuInfo.rightIcon"
                placeholder="菜单名称右侧的额外图标"
              />
            </el-form-item>

            <el-form-item label="离场动画" prop="leaveAnimation">
              <el-select
                v-model="menuInfo.leaveAnimation"
                placeholder="请选择页面离场加载动画"
              >
                <el-option label="无" value="none" />
                <el-option label="淡出" value="fade" />
                <el-option label="滑动" value="slide" />
              </el-select>
            </el-form-item>

            <el-form-item label="菜单显示" prop="visible">
              <el-button-group>
                <el-button
                  :type="menuInfo.visible === 1 ? 'primary' : 'default'"
                  @click="menuInfo.visible = 1"
                >
                  显示
                </el-button>
                <el-button
                  :type="menuInfo.visible === 0 ? 'primary' : 'default'"
                  @click="menuInfo.visible = 0"
                >
                  隐藏
                </el-button>
              </el-button-group>
            </el-form-item>

            <el-form-item label="缓存页面" prop="cache">
              <el-button-group>
                <el-button
                  :type="menuInfo.cache === 1 ? 'primary' : 'default'"
                  @click="menuInfo.cache = 1"
                >
                  缓存
                </el-button>
                <el-button
                  :type="menuInfo.cache === 0 ? 'primary' : 'default'"
                  @click="menuInfo.cache = 0"
                >
                  不缓存
                </el-button>
              </el-button-group>
            </el-form-item>

            <el-form-item label="固定标签页" prop="affix">
              <el-button-group>
                <el-button
                  :type="menuInfo.affix === 1 ? 'primary' : 'default'"
                  @click="menuInfo.affix = 1"
                >
                  固定
                </el-button>
                <el-button
                  :type="menuInfo.affix === 0 ? 'primary' : 'default'"
                  @click="menuInfo.affix = 0"
                >
                  不固定
                </el-button>
              </el-button-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { MenuFormData, ParentOption } from "../utils/menu";

defineOptions({
  name: "ChangeMenuDialog"
});

const dialogVisible = ref(false);
const formRef = ref<any>(null);
const title = ref("修改菜单");
// Minimal parent options - in real app replace with API data
const parentOptions = ref<ParentOption[]>([{ label: "顶级菜单", value: 0 }]);

const menuInfo = reactive<MenuFormData>({
  parentId: 0,
  menuType: "M",
  menuName: "",
  name: "",
  path: "",
  component: "",
  perms: "",
  icon: "",
  rightIcon: "",
  sort: 1,
  redirect: "",
  enterAnimation: "none",
  leaveAnimation: "none",
  activeMenu: "",
  parentVisible: true,
  visible: 1,
  cache: 0,
  affix: 0,
  status: 1,
  remark: ""
});

const rules: Record<string, any> = {
  menuName: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
  path: [{ required: true, message: "请输入路由路径", trigger: "blur" }],
  name: [{ required: true, message: "请输入路由名称", trigger: "blur" }],
  component: [{ required: false }],
  sort: [{ type: "number", message: "排序必须为数字", trigger: "change" }]
};

function beforeClose(done?: Function) {
  // allow custom close logic if needed
  dialogVisible.value = false;
  if (done) done();
}

function open(initial?: Partial<typeof menuInfo>) {
  // populate form when editing
  if (initial) {
    Object.assign(menuInfo, initial);
    title.value = "修改菜单";
  } else {
    title.value = "新增菜单";
    // reset to defaults
    menuInfo.parentId = 0;
    menuInfo.menuType = "M";
    menuInfo.menuName = "";
    menuInfo.name = "";
    menuInfo.path = "";
    menuInfo.component = "";
    menuInfo.perms = "";
    menuInfo.icon = "";
    menuInfo.rightIcon = "";
    menuInfo.sort = 1;
    menuInfo.redirect = "";
    menuInfo.enterAnimation = "none";
    menuInfo.leaveAnimation = "none";
    menuInfo.activeMenu = "";
    menuInfo.parentVisible = true;
    menuInfo.visible = 1;
    menuInfo.cache = 0;
    menuInfo.affix = 0;
    menuInfo.status = 1;
    menuInfo.remark = "";
  }
  dialogVisible.value = true;
}

function handleCancel() {
  dialogVisible.value = false;
}

const emit = defineEmits<{
  (e: "confirm", payload: MenuFormData): void;
}>();

function handleSubmit() {
  // validate then emit
  if (!formRef.value) return;
  formRef.value.validate((valid: boolean) => {
    if (!valid) return;
    // emit a shallow copy
    emit("confirm", { ...menuInfo });
    dialogVisible.value = false;
  });
}

defineExpose({ open });
</script>

<style scoped lang="scss">
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
