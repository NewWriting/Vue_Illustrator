<template>
  <div id="Classification">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">主页</el-menu-item>
      <el-menu-item index="2">插画</el-menu-item>
      <el-menu-item index="3">漫画</el-menu-item>
      <el-menu-item index="4">收藏</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Classification',
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style scoped>
/* 控制element ui的分类框大小 */
.el-menu {
  margin-left: 300px;
  width: 320px;
}

/* 消除分类栏的下边框 */
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

/* 调整分类栏子项的大小 */
.el-menu-item {
  width: 80px;
  height: 50px;
  font-size: 15px;
  color: rgb(133, 133, 149);
}

/* 消除分类栏子项的下边框，添加上边框，实现滑动效果 */
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  border-top: 4px solid #409eff;
}
</style>
