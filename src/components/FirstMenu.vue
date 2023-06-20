<template>
  <div class="main-menu">
    <button class="icomoon-button" @click.stop="hiddenLeft"></button>
    <div class="eixrXR"></div>
    <a :href="homePage">
      <img src="../assets/images/01-pixiv-logo.svg" alt="" />
    </a>
    <div v-show="RAS">
      <MainMenu></MainMenu>
    </div>
  </div>
</template>

<script>
import MainMenu from "./MainMenu.vue";
export default {
  name: "FirstMenu",
  components: {
    // 子组件是MainMenu
    MainMenu,
  },
  data() {
    return {
      homePage: "https://www.pixiv.net/",
      RAS: false,
    };
  },
  methods: {
    hiddenLeft() {
      this.RAS = !this.RAS;
    },

  },
  mounted(){
    document.addEventListener("click", (e)=> {
      if (e.target.className != "main-menu" && this.RAS === true) {
        this.RAS = !this.RAS;
        // console.log(e.target.className);
      }
    });
  }
};


</script>

<style scoped>
.main-menu {
  display: flex;
  align-items: center;
}
.icomoon-button {
  margin-left: 15px;
}
.icomoon-button::before {
  content: "\e9bd";
  font-family: "icomoon";
  font-size: 25px;
  color: #858585;
}
.eixrXR {
  margin-left: 24px;
  align-self: stretch;
}
.main-menu a {
  display: block;
  height: 32px;
  cursor: pointer;
}
/* 侧边栏 */
/* .Hidden {
  display: block;
} */
</style>