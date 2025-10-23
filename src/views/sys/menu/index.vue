<template>
  <div>
    <el-container>
      <el-header class="header-center">
        <span>菜单名称：</span>
        <el-input class="search-input" placeholder="请输入菜单名称" />
        <el-button type="primary">查询</el-button>
        <el-button type="success">重置</el-button>
      </el-header>
      <el-main class="main-area">
        <div class="main-header">
          <div class="title">菜单管理</div>
          <div class="action-group">
            <el-button type="primary" @click="onAdd">新增菜单</el-button>
            <el-button type="primary" :icon="EpRefresh" @click="onRefresh" />
            <el-button
              type="primary"
              :icon="TablerArrowsMinimize"
              @click="onToggle"
            />
          </div>
        </div>

        <div class="content-area">
          <!-- 这里放页面主体内容 -->
          <el-table :data="menuList" border style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import EpRefresh from "~icons/ep/refresh";
import TablerArrowsMinimize from "~icons/tabler/arrows-minimize";
import { ref } from "vue";

defineOptions({
  name: "SysMenu"
});

const menuList = ref([]);

const onAdd = () => {
  // 新增菜单逻辑
};

const onRefresh = () => {
  // 刷新逻辑
};

const onToggle = () => {
  // 展开/收起逻辑
};
</script>
<style scoped lang="scss">
.header-center {
  background-color: #ffffff;
  margin-bottom: 10px;

  display: flex;
  align-items: center; /* 垂直居中 */
  gap: 10px; /* 元素间距 */
  flex-wrap: wrap; /* 小屏时换行 */
}

.search-input {
  width: 200px;
}

.main-area {
  background-color: #ffffff;
  padding: 12px;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.title {
  font-size: 16px;
  font-weight: 600;
}

.action-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-btn {
  padding: 6px;
}
.content-area {
  background: #fff;
}
</style>
