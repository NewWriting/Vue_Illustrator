<template>
  <div id="Navigation">
    <!-- 左部主菜单 -->
    <div class="main-menu">
      <button class="icomoon-button"></button>
      <a :href="homePage">
        <img src="../assets/images/01-pixiv-logo.svg" alt="" />
      </a>
    </div>
    <!-- 中部搜索栏 -->
    <div class="search">
      <input type="text" placeholder="搜索作品" />
    </div>
    <!-- 右部用户功能栏 -->
    <div class="user-functions">
      <a :href="premium">加入pixiv高级会员</a>
      <button
        v-for="button in buttons"
        :key="button.id"
        :class="button.className"
      >
        {{ button.text }}
      </button>
      <div class="personal-avatar">
        <div>
          <img src="../assets/images/106871993_p0.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      homePage: 'https://www.pixiv.net/',
      premium: 'https://www.pixiv.net/premium',
      buttons: [
        { id: '1', className: 'contribute', text: '投稿作品' },
        { id: '2', className: 'meassage', text: '' },
        { id: '3', className: 'notice', text: '' },
        { id: '4', className: 'service', text: '' },
      ],
    }
  },
  // 这边还有众多的交互功能需要被书写
  methods: {},
}
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
#Navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

/* 左部主菜单和网站图标 */
.main-menu {
  display: flex;
  align-items: center;
}

.icomoon-button::before {
  content: '\e9bd';
  font-family: 'icomoon';
  font-size: 20px;
}

.main-menu a {
  display: block;
  height: 32px;
}

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

/* 右部用户功能栏 */
.user-functions {
  display: flex;
  /* 主轴和侧轴进行对齐 */
  justify-content: space-between;
  align-items: center;
  width: 550px;
  padding-right: 15px;
}

.user-functions a {
  display: inline-block;
  color: rgb(255, 149, 0);
  font-weight: 600;
  cursor: pointer;
}

/* 四个按钮中有一个是特别设置的 */
button.meassage:before,
button.notice:before,
button.service:before,
.personal-avatar::after {
  font-family: 'icomoon';
  font-size: 20px;
}

button.contribute {
  width: 100px;
  font-size: 15px;
  font-weight: 600;
  color: black;
}

button.contribute:active {
  border: 3px solid skyblue;
  background-color: rgb(206, 206, 206);
}

button.meassage::before {
  content: '\e945';
}

button.notice::before {
  content: '\e951';
}

button.service::before {
  content: '\e9e8';
}

/* 用户头像 */
.personal-avatar {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.personal-avatar div {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
}

.personal-avatar::after {
  content: '\ea50';
}

.user-functions img {
  width: 50px;
}
</style>
