<template>
  <div>
    <!-- 1.图标 -->
    <div class="jdZufB">
      <button class="ekdKos" @click.stop="infoClick">
        <div class="xxx" title="消息">
            <!-- 铃铛 -->
        </div>
      </button>
    </div>
    <!-- 2.下拉样式 -->
    <div class="dAOfky" v-show="canSee">
    <div class="bmXCSR">
        <div class="kihfwV">
            <div class="cQSPQT">
                <div class="ljTOLa">
                    <span class="euDIHV">消息</span>
                    <a href="https://www.pixiv.net" class="jcSApS">设置</a>
                </div>
                <div class="pqvUF"></div>
                <a href="https://www.pixiv.net" class="iLRcAY">查看全部</a>
            </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return{
      canSee:false
    }
  },
  methods:{
    infoClick(){
      this.canSee = !this.canSee
    }
  },
  mounted(){
    document.addEventListener("click", (e)=> {
      if (e.target.className != "dAOfky" && this.canSee === true) {
        this.canSee = !this.canSee;
      }
    });
  }
};
</script>

<style scoped>
/* 1.图标 */
.jdZufB {
    position: relative;
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
.fivNSm {
    stroke: none;
    fill: currentcolor;
    width: 24px;
    height: 24px;
    line-height: 0;
    font-size: 0px;
    vertical-align: middle;
}


.xxx::after {
  font-family: 'icomoon';
  content:"\e945";
  font-size: 20px;
}

/* 2.下拉消息栏样式 */
a {
  color: inherit;
  text-decoration: none;
}
a:-webkit-any-link {
  color: #0096fa;
  cursor: pointer;
  /* text-decoration: underline; */
}
.dAOfky {
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    background-color: var(#ffffff);
    pointer-events: auto;
    visibility: visible;
    position: absolute;
    right: -8px;
    top: 64px;
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
.kihfwV {
  width: 320px;
}
.cQSPQT {
  overflow: hidden;
  font-size: 14px;
  border-radius: 8px;
}
.ljTOLa {
  position: relative;
  text-align: center;
  line-height: 39px;
}
.pqvUF {
    overflow-y: auto;
    max-height: 420px;
}
.euDIHV {
  font-weight: bold;
}
.jcSApS {
  color: var(#0096fa);
  margin-right: 16px;
  font-size: 14px;
  position: absolute;
  right: 0px;
}
/* 隔间 */
.pqvUF {
    overflow-y: auto;
    max-height: 420px;
}
/* 查看全部 */
.iLRcAY {
    display: block;
    line-height: 39px;
    text-align: center;
    color: rgb(0, 150, 250);
    cursor: pointer;
    text-decoration: none;
}
</style>