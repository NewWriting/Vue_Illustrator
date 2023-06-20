<template>
  <div class="Navigation">
    <!-- 1.左部主菜单 -->
    <FirstMenu></FirstMenu>
    <!-- 2.中部搜索栏 -->
    <SearchInput></SearchInput>
    <!-- 3.右部用户功能栏 -->
    <MiddleFunction></MiddleFunction>
  </div>
</template>

<script>
// 引入前中后三个组件
import FirstMenu from "./FirstMenu.vue";
import SearchInput from "./SearchInput.vue";
import MiddleFunction from "./MiddleFunction.vue";

export default {
  name: "Navigation",
  components: {
    FirstMenu,
    SearchInput,
    MiddleFunction,
  },
};
</script>

<style scoped>
/* 导航栏按钮统一风格,唯一一个按钮风格不同，单独的设置 */
button {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: transparent;
  color: grey;
}

button:hover {
  background-color: rgb(245, 245, 245);
}

button:active {
  color: black;
}

/* 导航栏 */
.Navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}
::-webkit-scrollbar {
  width: 0 !important;
}

</style>
