<template>
  <div id="app">
    <div class="main">
      <!-- 导航栏 -->
      <Navigation></Navigation>
      <!-- 分隔盒子 -->
      <div class="separation"></div>
      <!-- 简介 -->
      <Profile></Profile>
      <!-- 分类栏 -->
      <Classification></Classification>
      <!-- 主体内容 -->
      <Content></Content>
      <!-- 底部 -->
      <End></End>
      <button @click="login">临时登录界面</button>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Profile from './components/Profile.vue'
import Content from './components/Content.vue'
import Classification from './components/Classification.vue'
import End from './components/End.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Profile,
    Classification,
    Content,
    End,
    Login,
  },

  methods: {
    login() {
      // 使用 Vue Router 实现页面跳转
      this.$router.push('/Login')
    },
  },
}
</script>

<style>
/* 图表字体文件，注意路径问题，主要是fonts文件,应用到所有组件 */
@font-face {
  font-family: 'icomoon';
  src: url('./assets/icomoon/fonts/icomoon.eot?yveltf');
  src: url('./assets/icomoon/fonts/icomoon.eot?yveltf#iefix')
      format('embedded-opentype'),
    url('./assets/icomoon/fonts/icomoon.ttf?yveltf') format('truetype'),
    url('./assets/icomoon/fonts/icomoon.woff?yveltf') format('woff'),
    url('./assets/icomoon/fonts/icomoon.svg?yveltf#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

/* 现将所有的内外边距置为0，并且边框、内边距不会撑大盒子 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 统一全部组件按钮风格 */
button {
  border-style: none;
  cursor: pointer;
}

/* 统一全部输入框风格，点击时没有轮廓 */
input {
  outline: none;
}

/* 所有的a标签没有下划线 */
a {
  text-decoration: none;
}

/* 列表均无小圆点 */
li {
  list-style: none;
}

/* 高暂时设置为3000px */
/* #app {
  height: 3000px;
} */

/* 导航栏组件和简介组件之间设置边距 */
.separation {
  height: 200px;
  margin-top: 80px;
  background-color: rgb(250, 250, 250);
}
</style>
