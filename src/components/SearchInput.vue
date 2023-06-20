<template>
  <div class="search">
    <input type="text" placeholder="搜索作品" />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
};
</script>

<style scoped>
/* 中部搜索框 */
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

.search,
.search input {
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
}

.search::before {
  padding: 0 10px;
  content: '\e986';
  font-family: 'icomoon';
  font-size: 20px;
}

.search input {
  width: 500px;
  height: 100%;
  border-style: none;
  font-size: 15px;
}
</style>