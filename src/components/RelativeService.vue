<template>
  <div>
    <!-- 1.图标 -->
    <div class="jyMFQz">
      <div>
        <button class="ekdKos" @click.stop="realClick">
        </button>
      </div>
    </div>
    <!-- 2.下拉框 -->
    <div class="kDCQne" v-show="canSee">
      <div class="bmXCSR">
        <div class="cHHnDQ">
          <div class="cqChPw">相关服务</div>
          <div class="fdxTcK">
            <div class="cykQFD" v-for="logoBox in divArr" :key="logoBox.id">
              <a href="http://www.pixiv.net/" class="ccpkAv">
                <img :src=logoBox.image_src alt="" />
                <p class="lcYobw">{{ logoBox.name }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RelativeService",
  data() {
    return {
      canSee:false,
      divArr: [
        {
          id: 1,
          name: "pixiv",
          image_src:
            require("../assets/images/picture/RService/P.png"),
        },
        {
          id: 2,
          name: "Sketch",
          image_src:
            require("../assets/images/picture/RService/S.png"),
        },
        {
          id: 3,
          name: "FanBOX",
          image_src:
            require("../assets/images/picture/RService/F.png"),
        },
        {
          id: 4,
          name: "pixiv0.o",
          image_src:
            require("../assets/images/picture/RService/p1.png"),
        },
        {
          id: 5,
          name: "pixiv>^<",
          image_src:
            require("../assets/images/picture/RService/p2.png"),
        },
        {
          id: 6,
          name: "百事科典",
          image_src:
            require("../assets/images/picture/RService/p3.png"),
        },
        {
          id: 7,
          name: "BOOTH",
          image_src:
            require("../assets/images/picture/RService/B.png"),
        },
        {
          id: 8,
          name: "FACTORY",
          image_src:
            require("../assets/images/picture/RService/Fac.png"),
        },
        {
          id: 9,
          name: "pixivision",
          image_src:
           require("../assets/images/picture/RService/Pyj.png"),
        },
      ],
    };
  },
  methods:{
    realClick(){
      this.canSee = !this.canSee
    }
  },
  mounted(){
    document.addEventListener("click", (e)=> {
      if (e.target.className != "kDCQne" && this.canSee === true) {
        this.canSee = !this.canSee;
      }
    });
  }
};
</script>

<style scoped>
img {
  width: 48px;
  height: 48px;
}
a {
  color: inherit;
  text-decoration: none;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  /* text-decoration: underline; */
}
/* 1.图标 */
.jyMFQz {
    position: relative;
}
.ekdKos::after {
  font-family:"icomoon";
  content:"\e9bd";
  font-size: 20px;
}
.ekdKos {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: none;
    padding: 0px;
    outline: none;
    cursor: pointer;
    user-select: none;
    border-radius: 50%;
    transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
    width: 40px;
    height: 40px;
    margin: 0px -8px;
    background-color: transparent;
    color: rgb(133, 133, 133);
}
.kYELqF {
    stroke: none;
    fill: currentcolor;
    width: 24px;
    height: 24px;
    line-height: 0;
    font-size: 0px;
    vertical-align: middle;
}

/* 2.下拉框 */
.kDCQne {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background-color: #ffffff;
  pointer-events: auto;
  visibility:visible;
  position: absolute;
  right: 0px;
  top: 60px;
  z-index: 12;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  max-height: 299px;
}
.bmXCSR {
  overflow-y: auto;
  display: flex;
  flex-flow: column;
}
/* 内部盒子 */
.cHHnDQ {
  display: grid;
  gap: 28px;
  box-sizing: border-box;
  width: 320px;
  padding: 16px 16px 24px;
}
/* 相关服务 */
.cqChPw {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: rgb(31, 31, 31);
}
/* 图标外盒子 */
.fdxTcK {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  -webkit-box-align: start;
  align-items: start;
}
.lcYobw {
    margin: 0px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(71, 71, 71);
    text-align: center;
}
/* 网格布局 grid */
.cykQFD {
  display: inline-flex;
}
.ccpkAv {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 4px;
  justify-items: center;
  box-sizing: border-box;
  padding: 16px 8px 20px;
  width: 96px;
  border-radius: 8px;
  transition: background 0.2s ease 0s;
  cursor: pointer;
}
</style>