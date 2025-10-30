<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="新增菜单"
      width="600px"
      :before-close="() => {}"
    >
      <el-form label-width="100px">
        <el-form-item label="菜单名称">
          <el-input v-model="menuInfo.menuName" placeholder="请输入菜单名称" />
        </el-form-item>
        <el-form-item label="菜单路径">
          <el-input v-model="menuInfo.path" placeholder="请输入菜单路径" />
        </el-form-item>
        <el-form-item label="图标">
          <el-input v-model="menuInfo.icon" placeholder="请输入图标类名" />
        </el-form-item>
        <el-form-item label="排序">
          <el-input-number v-model="menuInfo.sort" :min="1" />
        </el-form-item>
        <el-form-item label="是否显示">
          <el-switch v-model="menuInfo.visible" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="() => {}">取 消</el-button>
          <el-button type="primary" @click="() => {}">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "AddMenuDialog"
});
const dialogVisible = ref(false);
const menuInfo = ref({
  menuName: "",
  menuType: "",
  path: "",
  component: "",
  perms: "",
  icon: "",
  sort: 1,
  visible: 1,
  status: 1,
  remark: ""
});
</script>
<style scoped lang="scss"></style>
