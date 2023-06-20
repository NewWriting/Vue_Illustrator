<template>
  <div class="prem-box">
    <div>
      <a :href="premium" class="enlarge">加入pixiv高级会员</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnterPrem",
  data() {
    return {
      premium:"https://www.pixiv.net/"
    }
  }
};
</script>

<style scoped>
.prem-box {
  margin-top: 9px;
}
.enlarge {
  display: inline-block;
  color: rgb(255, 149, 0);
  font-weight: 600;
  cursor: pointer;
}
</style>