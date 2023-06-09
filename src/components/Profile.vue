<template>
  <div id="Profile">
    <!-- 上半部分的基础资料 -->
    <div class="basic-data">
      <!-- 头像栏 -->
      <div class="avatar">
        <div class="avatar-border">
          <img src="../assets/images/108449679_p0.jpg" alt="" />
        </div>
      </div>
      <!-- 关注栏 -->
      <div class="subscribe">
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- 下半部分的具体资料 -->
    <div class="concrete-data"></div>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
/* 设置一个版心 */
#Profile {
  height: 300px;
  padding: 0 300px;
}

.basic-data {
  display: flex;
  justify-content: space-between;
}

.avatar {
  width: 150px;
  height: 120px;
}

.avatar .avatar-border {
  width: 100px;
  height: 100px;
  border: 1px solid transparent;
  border-radius: 100px;
  overflow: hidden;
  margin-top: -30px;
}

.avatar img {
  width: 100px;
}

.subscribe {
  width: 1200px;
  background-color: skyblue;
}
</style>
