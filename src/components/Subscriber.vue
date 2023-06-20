<template>
  <div class="kYDpSN">
    <!-- 1.头像 -->
    <div class="bzGThj">
      <button class="ikiFYU jvCTkj" @click.stop="subsClick">
        <div class="feBRRY" size="40" title="YoungGangster">
          <img src="../assets/images/106871993_p0.jpg" />
        </div>
      </button>
    </div>
    <!-- 2.下拉框 -->
    <div class="hzgIIi" v-show="canSee">
      <div class="bmXCSR">
        <div class="hpepYR">
          <div class="jegsOI">
            <ul class="ehjUtf">
              <div>
                <div class="iaUVAJ">
                  <img src="../assets/images/maomao.jpg" alt="" />
                </div>
                <div class="bOsUmN">
                  <div class="ceWmxK">
                    <div class="iitqvT">
                      <a href="#">
                        <div class="dgleJJ">
                          <img
                            width="64"
                            height="64"
                            style="
                              object-fit: cover;
                              object-position: center top;
                            "
                            src="../assets/images/mao2.jpg"
                            alt="猫猫桑"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="eZYiYo bTtACY">
                    <a href="#" class="brQXyS">{{ Client }}</a>
                  </div>
                  <div class="bTUoFw eePPDm">{{ userID }}</div>
                  <div class="bWsooT">
                    <a href="#" class="hYkIC">
                      <div class="cihdqu">{{ attentionNumber }}</div>
                      <div class="kKcPtY">已关注</div>
                    </a>
                    <a href="#" class="kRlRDt">
                      <div class="cihdqu">{{ fans }}</div>
                      <div class="kKcPtY">粉丝</div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="btBkag"></div>
              <li class="sxtOx" v-for="li in hobbyArr1" :key="li.static">
                <a href="#" class="fWlXiW fkdacG">{{ li.static }}</a>
              </li>
              <div class="dXeGXA"></div>
              <li class="sxtOx" v-for="li in hobbyArr2" :key="li.static">
                <a href="#" class="fWlXiW fkdacG">{{ li.static }}</a>
              </li>
              <div class="dXeGXA"></div>
              <div class="iMprdM">language</div>
              <li class="sxtOx" v-for="li in hobbyArr3" :key="li.static">
                <a href="#" class="fWlXiW fkdacG">{{ li.static }}</a>
              </li>
              <div class="dXeGXA"></div>
              <div class="eUjPgK">
                <div class="cIFTyC">
                  <div class="cRnZxt">
                    <div class="dbKEFq">
                      <div class="jlienR">{{ nightModel }}</div>
                    </div>
                  </div>
                </div>
                <label class="hRtTTP">
                  <span class="irWevW">
                    <input type="checkbox" class="khGQfa" />
                    <div class="esIXGr">
                      <div class="INdlB"></div>
                    </div>
                  </span>
                </label>
              </div>
              <li class="iqtiFm">
                <button class="ihuUea bqKNyV iPtWnB">退出登录</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscriber",
  data() {
    return {
      Client: "YoungGangster",
      userID: "user_gxgp5474",
      attentionNumber: 1,
      fans: 0,
      canSee:false,
      hobbyArr1: [
        { id: 1, static: "数据分析" },
        { id: 2, static: "我的作品" },
        { id: 3, static: "约稿管理" },
      ],
      hobbyArr2: [
        { id: 1, static: "收藏" },
        { id: 2, static: "浏览记录" },
        { id: 3, static: "书签" },
        { id: 4, static: "金钱管理" },
      ],
      hobbyArr3: [
        { id: 1, static: "简体中文" },
        { id: 2, static: "设置" },
        { id: 3, static: "发送反馈" },
      ],
      Exit: "退出登录",
      nightModel: "夜间模式",
    };
  },
  methods:{
    subsClick(){
      this.canSee = !this.canSee
    }
  },
  mounted(){
    document.addEventListener("click", (e)=> {
      if (e.target.className != "hzgIIi" && this.canSee === true) {
        this.canSee = !this.canSee;
      }
    });
  }
};
</script>

<style scoped>
/* 1.头像 */
.kYDpSN {
  position: relative;
}
/* .kYDpSN .bzGThj::after {
  font-family: "icomoon";
  font-size: 20px;
} */
.bzGThj {
  display: flex;
}
.ikiFYU {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4px;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
}
.jvCTkj {
  appearance: none;
  background: transparent;
  padding: 0px;
  border-style: none;
  outline: none;
  color: inherit;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  font: inherit;
  margin: 0px;
  overflow: visible;
  text-transform: none;
  cursor: pointer;
}
.feBRRY {
  display: flex;
  border-radius: 50%;
  flex: 0 0 auto;
  overflow: hidden;
  width: 40px;
  height: 40px;
  position: relative;
}

.feBRRY::after {
  content: "\ea50";
}

/* 2.下拉框大盒子的约束样式 */
a {
  color: inherit;
  text-decoration: none;
}
img {
  /* overflow-clip-margin: content-box; */
  overflow: clip;
  /* aspect-ratio: auto 64 / 64; */
}
label {
  cursor: default;
}
.hzgIIi {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background-color: var(#ffffff);
  pointer-events: auto;
  visibility: visible;
  position: absolute;
  left: -200px;
  top: 56px;
  z-index: 12;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  max-height: 694px;
}

.bmXCSR {
  overflow-y: auto;
  display: flex;
  flex-flow: column;
}
.hpepYR {
  display: flex;
}
.jegsOI {
  width: 216px;
  overflow-y: auto;
}
/* 列表框 */
.ehjUtf {
  display: flex;
  flex-flow: column;
  margin: 0px;
  padding: 0px 0px 24px;
  list-style: none;
}
/* ***最上的个人栏*** */
.iaUVAJ {
  height: 56px;
  background-size: cover;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0.02);
  position: relative;
}
.bOsUmN {
  display: grid;
  gap: 8px 0px;
  grid-template-rows: auto auto auto auto;
  padding: 0px 16px;
}
/* 1.头像 */

.ceWmxK {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-end;
}
.iitqvT {
  margin-top: -32px;
}
.dgleJJ {
  display: flex;
  border-radius: 50%;
  flex: 0 0 auto;
  overflow: hidden;
  width: 64px;
  height: 64px;
  border: 2px solid rgb(255, 255, 255);
  margin: -2px;
  position: relative;
}

/* 2.名字 */
.eZYiYo {
  font-size: 14px;
  margin: -4px 0px;
  font-weight: bold;
  color: rgb(31, 31, 31);
}
.bTtACY {
  overflow: hidden;
  line-height: 22px;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.brQXyS {
  color: inherit;
  text-decoration: none;
}
/* 3.ID */
.bTUoFw {
  font-size: 12px;
  margin: -4px 0px;
  color: rgb(133, 133, 133);
}
.bTUoFw::before {
  content: "@";
}
.eePPDm {
  overflow: hidden;
  line-height: 20px;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 4.关注栏 */
.bWsooT {
  display: grid;
  gap: 0px 16px;
  grid-template-columns: 60px 60px;
  -webkit-box-pack: start;
  justify-content: start;
}
.hYkIC {
  padding: 4px 0px;
  display: grid;
  gap: 8px;
  grid-template-rows: auto auto;
}
/* 关注左 */
.cihdqu {
  font-size: 12px;
  line-height: 20px;
  margin: -4px 0px;
  color: rgb(71, 71, 71);
  font-weight: bold;
}
.kKcPtY {
  font-size: 12px;
  line-height: 20px;
  margin: -4px 0px;
  color: rgb(133, 133, 133);
}
/* 粉丝右 */
.kRlRDt {
  padding: 4px 0px;
  display: grid;
  gap: 8px;
  grid-template-rows: auto auto;
}
.cihdqu {
  font-size: 12px;
  line-height: 20px;
  margin: -4px 0px;
  color: rgb(71, 71, 71);
  font-weight: bold;
}
/* 空白页 */
.btBkag {
  height: 24px;
}

/* ***选项栏*** */
/* 1.数据分析 */
.sxtOx {
  margin: 0px;
}
.fWlXiW {
  padding: 9px 16px;
  font-size: 14px;
  line-height: 22px;
  border-radius: 0px;
}
.fWlXiW:hover {
  text-decoration: none;
}
.fkdacG {
  display: block;
  padding: calc(0.5em);
  text-decoration: none;
  color: rgba(0, 0, 0, 0.64);
  background: transparent;
  border: none;
  outline: none;
  touch-action: manipulation;
  user-select: none;
  border-radius: 4px;
  transition: box-shadow 0.2s ease 0s, background 0.2s ease 0s,
    opacity 0.2s ease 0s;
  font-size: inherit;
  line-height: inherit;
}
.fkdacG:not(:disabled):not([aria-disabled="true"]):hover {
  background: rgba(0, 0, 0, 0.04);
}
/* 空白页 */
.dXeGXA {
  height: 24px;
}
/* 语言页 */
.iMprdM {
  padding: 0px 16px;
  font-size: 12px;
  line-height: 16px;
  color: #858585;
  margin-top: -2px;
  margin-bottom: 6px;
}
/* 颜色变换 */
.eUjPgK {
  display: flex;
  height: 40px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 16px;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.2s ease 0s;
}
.cIFTyC {
  display: flex;
  flex-direction: column;
}
.cRnZxt {
  color: #474747;
  line-height: 22px;
  height: 22px;
  overflow: hidden;
  font-size: 14px;
  display: grid;
}
.dbKEFq {
  overflow: hidden;
  line-height: 22px;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.jlienR {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
/* 按钮 */
.hRtTTP {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  outline: 0px;
}
.irWevW {
  display: inline-flex;
  position: relative;
  z-index: 0;
}
.khGQfa {
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  opacity: 0;
  appearance: none;
  outline: none;
  cursor: pointer;
}
.esIXGr {
  position: relative;
  box-sizing: border-box;
  width: 28px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid transparent;
  background-color: #adadad;
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
}
.INdlB {
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border-radius: 50%;
  transform: translateX(0px);
  transition: transform 0.2s ease 0s;
}
/* 退出登录 */
.iqtiFm {
  display: flex;
  flex-flow: column;
  margin: 0px;
  padding: 0px 0px 24px;
  list-style: none;
}
.bqKNyV {
  padding: 9px 16px;
  font-size: 14px;
  line-height: 22px;
  border-radius: 0px;
}
.iPtWnB {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
}
.ihuUea {
  display: block;
  padding: calc(0.5em);
  text-decoration: none;
  color: rgba(0, 0, 0, 0.64);
  background: transparent;
  border: none;
  outline: none;
  touch-action: manipulation;
  user-select: none;
  font-size: inherit;
  line-height: inherit;
  width: 100%;
  border-radius: 0px;
  transition: color 0.2s ease 0s;
  text-align: left;
}
/* 总体文本框样式 */
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
button,
input {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
/* input:not([type="range"]):not([type="color"]) {
    writing-mode: horizontal-tb !important;
} */
input[type="checkbox" i] {
  background-color: initial;
  cursor: default;
  appearance: auto;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
}
</style>