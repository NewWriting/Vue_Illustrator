<template>
  <div>
    <!-- 1.图标 -->
    <div class="cbWoI" >
      <div class="hKigOB">
        <button class="egKNds" @click.stop="subClick">
          <span class="MGIMG">
            投稿作品
          </span>
        </button>
      </div>
    </div>
    <!-- 2.下拉框 -->
    <div class="ksweTI" v-show="canSee">
      <div class="bmXCSR">
        <div class="kYirkt">
          <ul class="cMsQDg">
            <li class="sxtOx">
              <a href="https://www.pixiv.net/" class="dRInQp">
                <div class="gODA-DD">
                  <div class="jIVgCa">
                    <!--  -->
                  </div>
                  <span class="dtXotd">插画</span>
                </div>
              </a>
            </li>
            <li class="sxtOx">
              <a href="https://www.pixiv.net/" class="dRInQp">
                <div class="gODA-DD">
                  <div class="jIVgCa">
                    <!-- img -->
                  </div>
                  <span class="dtXotd">动图</span>
                </div>
              </a>
            </li>
            <li class="sxtOx">
              <a href="https://www.pixiv.net/" class="dRInQp">
                <div class="gODA-DD">
                  <div class="jIVgCa">
                    <!-- img -->
                  </div>
                  <span class="dtXotd">漫画</span>
                </div>
              </a>
            </li>
            <li class="sxtOx">
              <a href="https://www.pixiv.net/" class="dRInQp">
                <div class="gODA-DD">
                  <div class="jIVgCa">
                    <!-- img -->
                  </div>
                  <span class="dtXotd">小说</span>
                </div>
              </a>
            </li>
            <li class="kKyjXe ghPtjL">pixiv Sketch</li>

            <li class="sxtOx">
              <a href="https://www.pixiv.net/" class="dRInQp">
                <div class="gODA-DD">
                  <div class="jIVgCa">
                    <!-- img -->
                  </div>
                  <span class="dtXotd">开始素描</span>
                </div>
              </a>
            </li>
            <li class="sxtOx">
              <a href="https://www.pixiv.net/" class="dRInQp">
                <div class="gODA-DD">
                  <div class="jIVgCa">
                    <!-- img -->
                  </div>
                  <span class="dtXotd">开始直播</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmitWorker",
  data(){
      return{
      canSee:false
    }
  },
  methods:{
    subClick(){
      this.canSee = !this.canSee
    }
  },
  mounted(){
    document.addEventListener("click", (e)=> {
      if (e.target.className != "egKNds" && this.canSee === true) {
        this.canSee = !this.canSee;
        // console.log(e.target.className);
      }
    });
  }
};
</script>

<style scoped>
/* 1.图标 */
.cbWoI {
    position: relative;
}
.hKigOB {
    white-space: nowrap;
}
.egKNds {
    display: inline-block;
    min-width: 64px;
    line-height: 22px;
    margin: 0px;
    padding: 9px 24px;
    border: none;
    border-radius: 100vw;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
    color: rgb(71, 71, 71);
    background-color: rgba(0, 0, 0, 0.04);
}

button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
.MGIMG {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    gap: 4px;
}

button {
    text-transform: none;
    font-family: inherit;
    margin: 0;
}
/* 2.下拉栏样式 */
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.ksweTI {
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    background-color: var(--charcoal-surface1);
    pointer-events: auto;
    visibility: visible;
    position: absolute;
    right: 200px;
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
.kYirkt {
  width: 232px;
  padding: 8px 0px 16px;
}
.cMsQDg {
  display: flex;
  flex-flow: column;
  margin: 0px;
  padding: 0px;
  list-style: none;
}
/* 循环小li */
.sxtOx {
  margin: 0px;
}
.dRInQp {
  display: block;
  padding: calc(0.5em);
  text-decoration: none;
  background: transparent;
  border: none;
  outline: none;
  touch-action: manipulation;
  user-select: none;
  font-size: inherit;
  line-height: inherit;
  border-radius: 0px;
  color: rgba(0, 0, 0, 0.16);
  transition: color 0.2s ease 0s;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  /* text-decoration: underline; */
}
.gODA-DD {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 1px 17px;
}
.jIVgCa {
  flex: 0 0 auto;
  color: rgb(133, 133, 133);
}

.dtXotd {
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  line-height: 22px;
  margin-left: 8px;
  color: rgb(71, 71, 71);
}
.ghPtjL {
  margin-top: 36px;
}
.kKyjXe {
  margin-left: 24px;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  color: rgb(133, 133, 133);
}
</style>