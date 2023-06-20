<template>
  <div>
    <!-- 1.图标 -->
    <div class="kvBUoX">
      <div>
        <button class="seOMa" title="通知" @click.stop="noticeClick">
          <div class="xxxx">
            <div class="kxtLsZ">1</div>
          </div>
        </button>
      </div>
    </div>
    <!-- 2.下拉通知 -->
    <div class="kBAwOl" v-show="canSee">
      <div class="bmXCSR">
        <div class="NrBLO">
          <div class="cNhaCE">
            <div class="kyTPMN">
              通知
              <a href="#" class="fAYjzY">设置</a>
            </div>
            <div class="fKuyzx">
              <ul class="jWgFVO">
                <li>
                  <a href="#">
                    <span class="bWcCBT"
                      >!我们已经给您登陆的邮箱发送了一封确认邮件,请注意查收</span
                    >
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      canSee:false
    };
  },
  methods:{
    noticeClick(){
      this.canSee = !this.canSee
    }
  },
  mounted(){
    document.addEventListener("click", (e)=> {
      if (e.target.className != "kBAwOl" && this.canSee === true) {
        this.canSee = !this.canSee;
      }
    });
  }
};
</script>

<style scoped>
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
/* 1.图标 */
.kvBUoX {
  position: relative;
}
.xxxx::after {
  font-family: "icomoon";
  content: "\e951";
  font-size: 20px;
  font-weight: 100;
}

.seOMa {
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
.fivNSm {
  stroke: none;
  fill: currentcolor;
  width: 24px;
  height: 24px;
  line-height: 0;
  font-size: 0px;
  vertical-align: middle;
}

.kxtLsZ {
  position: absolute;
  top: -2px;
  right: -10px;
  min-width: 8px;
  height: 16px;
  padding: 0px 4px;
  border-radius: 50%;
  background: rgb(255, 43, 0);
  color:#fff
}
.fqEooZ {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: content-box;
  min-width: 8px;
  height: 16px;
  padding: 0px 4px;
  border-radius: 16px;
  background: rgb(255, 43, 0);
  color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  font-size: 11px;
  line-height: 12px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
/* 2.通知栏 */
.kBAwOl {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background-color: var(#ffffff);
  pointer-events: auto;
  visibility: visible;
  position: absolute;
  right: 0px;
  top: 60px;
  z-index: 12;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  max-height: 622px;
}
.bmXCSR {
  overflow-y: auto;
  display: flex;
  flex-flow: column;
}
.NrBLO {
  width: 320px;
}
.cNhaCE {
  overflow: hidden;
  font-size: 14px;
  border-radius: 8px;
}
/* 上 */
.kyTPMN {
  position: relative;
  text-align: center;
  line-height: 39px;
  font-weight: bold;
}
.fAYjzY {
  position: absolute;
  top: 14px;
  right: 16px;
  line-height: 1;
  font-weight: normal;
  color: rgb(0, 150, 250);
  text-decoration: none;
}
/* 下 */
.fKuyzx {
  overflow-y: auto;
  max-height: 420px;
}
.jWgFVO {
  list-style: none;
  padding: 0px 0px 7px;
  margin: 0px;
}
.jWgFVO a {
  display: flex;
  padding: 10px 16px 10px 8px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(255, 43, 0);
  text-decoration: none;
}
.bWcCBT {
  display: inline-block;
  flex: 0 0 auto;
  /* width: 12px; */
  height: 16px;
  margin-right: 4px;
  background-image: url("https://source.pixiv.net/www/js/build/b7f9a60….svg");
  background-repeat: no-repeat;
  background-position: center center;
}
</style>