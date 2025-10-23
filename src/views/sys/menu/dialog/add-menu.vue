<template>
  <div>
    <el-dialog
      title="新增菜单"
      v-model="dialogVisible"
      width="600px"
      :before-close="() => {}"
    >
      <el-form label-width="100px">
        <el-form-item label="菜单名称">
          <el-input v-model="menuInfo.menuName" placeholder="请输入菜单名称"></el-input>
        </el-form-item>
        <el-form-item label="菜单路径">
          <el-input v-model="menuInfo.menuPath" placeholder="请输入菜单路径"></el-input>
        </el-form-item>
        <el-form-item label="图标">
          <el-input v-model="menuInfo.menuIcon" placeholder="请输入图标类名"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input-number v-model="menuInfo.menuOrder" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-switch v-model="menuInfo.menuVisible"></el-switch>
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
const menuInfo = ref("");

</script>
<style scoped lang="scss"></style>
