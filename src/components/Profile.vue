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
        <div class="one">
          <h2 v-text="illustrator"></h2>
          <div>
            <button v-text="isFollow"></button>
          </div>
        </div>
        <p>
          <span v-text="followNumber" class="followNumber"></span
          ><span>已关注</span>
        </p>
      </div>
    </div>
    <!-- 下半部分的具体资料 -->
    <div class="concrete-data">
      <div class="location"><span>日本</span><span>京都</span></div>
      <div class="socialMedia"></div>
      <div class="signature">
        <span>厚塗りをのんびりと頑張ってます</span>
        <span> 【BOOTH】https://mifulu.booth.pm/</span>
        <span class="checkInformation"> 查看个人资料</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data() {
    return {
      illustrator: 'Yuqi',
      isFollow: '已关注',
      followNumber: 583,
    }
  },
  methods: {},
}
</script>

<style scoped>
/* 设置一个版心 */
#Profile {
  height: 280px;
  padding: 0 300px;
}

/* 上半部分基础资料 */
.basic-data {
  display: flex;
  justify-content: space-between;
}

/* 头像栏 */
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

/* 关注栏 */
.subscribe {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  width: 1200px;
  padding: 20px 0;
}

.subscribe .one {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.subscribe .one button {
  width: 100px;
  height: 40px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  color: black;
}

.subscribe .one button:active {
  border: 3px solid skyblue;
  background-color: rgb(206, 206, 206);
}

.subscribe .one div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}

.subscribe .one div:after {
  content: '\ea82';
  font-family: 'icomoon';
  cursor: pointer;
}

.subscribe p {
  width: 100%;
  color: rgb(92, 92, 92);
  font-size: 15px;
  cursor: pointer;
}

.subscribe p .followNumber {
  font-weight: 700;
  margin-right: 10px;
}

/* 下半部分的具体资料 */
.concrete-data {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  width: 700px;
  height: 100px;
}

.location,
.socialMedia,
.signature {
  width: 100%;
}

/* 地理位置 */
.location {
  color: rgb(173, 173, 173);
  font-size: 15px;
}

.location::before {
  content: '\e948';
  font-family: 'icomoon';
}

.location span {
  margin-left: 10px;
}

/* 社交媒体,推特和邮箱 */
.socialMedia::before,
.socialMedia::after {
  font-family: 'icomoon';
  font-size: 30px;
  cursor: pointer;
}

.socialMedia::before {
  content: '\ea96';
}

.socialMedia::after {
  content: '\e945';
  margin-left: 10px;
}

/* 个性签名和查看更多资料 */
.signature {
  display: flex;
  justify-content: space-between;
}

.signature .checkInformation {
  cursor: pointer;
  color: rgb(133, 133, 149);
}
</style>
