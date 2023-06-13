<template>
  <div>
    <div class="work-header">
      <h3>作品</h3>
      <div><span>高级搜索</span></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.work-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.work-header div {
  cursor: pointer;
}

.work-header div::before {
  content: '\e9bd';
  font-family: 'icomoon';
}
</style>
