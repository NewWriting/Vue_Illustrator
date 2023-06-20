<template>
  <div class="fqNqlu">
    <div class="iEBBXb">
        <div class="kLfilk">
            <div class="iiDSQF">
                <div class="fknzcH">
                    <button title="菜单" class=".seOMa"></button>
                    <div class="eixrXR" size="24"></div>
                    <a href="https://www.pixiv.net/" class="gYTWp">
                    <img src="https://source.pixiv.net/www/js/build/14e52f8ff79c3dc931eb16c6f4b53890.svg"
                    width="82" height="32" class="bBQkQw">
                    </a>
                </div>
            </div>
            <div class="mWVLa"></div>
            <ul class="hxmjIC">
                <li class="kKyjXe">首页</li>
                <li v-for="item in Li1" :key="item.id" :class="item.className">
                    <a href="https://www.pixiv.net/" :class="item.liClass">
                        <div :class="item.div1Class">
                            <div :class="item.div2Class">
                                <img :src="item.Src_xx" alt="">
                            </div>
                            <span class="dtXotd">{{item.spanInfo}}</span>
                        </div>
                    </a>
                </li>
                <div size="40" class="mWVIE"></div>
                <li v-for="item in Li2" :key="item.id" :class="item.className">
                    <a href="https://www.pixiv.net/" :class="item.liClass">
                        <div :class="item.div1Class">
                            <div :class="item.div2Class">
                                <img :src="item.Src_xx" alt="">
                            </div>
                            <span class="dtXotd">{{item.spanInfo}}</span>
                        </div>
                    </a>
                </li>
                <div size="40" class="mWVIE"></div>
                <li v-for="item in Li3" :key="item.id" :class="item.className">
                    <a href="https://www.pixiv.net/" :class="item.liClass">
                        <div :class="item.div1Class">
                            <div :class="item.div2Class">
                                <img :src="item.Src_xx" alt="">
                            </div>
                            <span class="dtXotd">{{item.spanInfo}}</span>
                        </div>
                    </a>
                </li>
                <div size="40" class="mWVIE"></div>
                <li v-for="item in Li4" :key="item.id" :class="item.className">
                    <a href="https://www.pixiv.net/" :class="item.liClass">
                        <div :class="item.div1Class">
                            <div :class="item.div2Class">
                                <img :src="item.Src_xx" alt="">
                            </div>
                            <span class="dtXotd">{{item.spanInfo}}</span>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="gyFSiO">
                <div class="eDuuDL">
                    <a href="#" class="sc-6ylu6x-1 khrVhz">公告</a>
                    <a href="#" class="sc-6ylu6x-1 khrVhz">帮助</a>
                    <a href="#" class="sc-6ylu6x-1 khrVhz">使用条款</a>
                    <a href="#" class="sc-6ylu6x-1 khrVhz">隐私政策</a>
                    <a href="#" class="sc-6ylu6x-1 khrVhz">基于特定商业法的注释</a>
                    <a href="#" class="sc-6ylu6x-1 khrVhz">运营公司</a>
                    <a href="#" class="sc-6ylu6x-1 khrVhz">刊登广告</a>
                    <a href="#" class="sc-6ylu6x-1 khrVhz">招聘信息</a>
                </div>
                <span class="jySdWe">@ pixiv</span>
            </div>
        </div>
        <div class="lhcRrG"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
    data() {
        return {
            Li1:[{id:1 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"插画",Src_xx:require("@/assets/images/svg/shu.svg")},
            {id:2 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"漫画",Src_xx:require("@/assets/images/svg/tupian.svg")},
            {id:0 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"小说",Src_xx:require("@/assets/images/svg/shu.svg")}
            ],
            Li2:[{id:3 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"已关注用户的新作",Src_xx:require("@/assets/images/svg/xingxing.svg")},
            {id:4 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"发现",Src_xx:require("@/assets/images/svg/tishi.svg")},
            {id:5 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"动态",Src_xx:require("@/assets/images/svg/qunzu.svg")}
            ],
            Li3:[{id:6 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"排行榜",Src_xx:require("@/assets/images/svg/huangguan.svg")},
            {id:7 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"大家的新作",Src_xx:require("@/assets/images/svg/duxiaoshuo.svg")},
            {id:8 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"比赛",Src_xx:require("@/assets/images/svg/haoyou.svg")},
            {id:9 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"约稿",Src_xx:require("@/assets/images/svg/aixin.svg")}
            ],
            Li4:[{id:10 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"用户企划",Src_xx:require("@/assets/images/svg/zhinanzhen.svg")},
            {id:11 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"绘图方法",Src_xx:require("@/assets/images/svg/jishiben.svg")},
            {id:12 ,liClass:'sxtOx',aClass:"dRInQp", div1Class:"gODA-DD", div2Class:"jIVgCa", svgClass:"fivNSm", spanInfo:"创作点子",Src_xx:require("@/assets/images/svg/dongtai.svg")}
            ],
            
        }
    }
};
</script>

<style scoped>
/* 导航栏大盒子样式 */
a {
    color: inherit;
    text-decoration: none;
}
.fqNqlu {
  position: absolute;
  display: flex;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 232px;
  background: rgb(255, 255, 255);
  overflow-y: auto;
}

.iEBBXb {
    display: flex;
    flex-flow: column;
    height: fit-content;
    min-height: 100%;
    width: 100%;
}
.kLfilk {
    -webkit-box-flex: 1;
    flex-grow: 1;
}
/* logo盒子 */
.iiDSQF {
    padding: 0px 24px;
}

.fknzcH {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 64px;
}

/* 菜单按钮样式 */
.seOMa.seOMa {
    color: rgb(71, 71, 71);
    background-color: rgba(0, 0, 0, 0.04);
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
.eixrXR {
    margin-left: 24px;
    align-self: stretch;
}

/* 去到官网 */
.gYTWp {
    margin-left: -4px;
}
a {
    color: inherit;
    text-decoration: none;
}
.bBQkQw {
    display: block;
    width: 82px;
    height: 32px;
}
img {
    /* overflow-clip-margin: content-box; */
    overflow: clip;
}
/* 间隔盒子 */
.mWVLa {
    margin-top: 24px;
    align-self: stretch;
}

/* 列表样式 */
.hxmjIC {
    display: flex;
    flex-flow: column;
    margin: 0px;
    padding: 0px;
    list-style: none;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
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
    text-decoration: none;
}
/* 首页 */
.kKyjXe {
    margin-left: 24px;
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
    color: rgb(133, 133, 133);
}
/* 插画 */
.sxtOx {
    margin: 0px;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    /* text-decoration: underline; */
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
    /* transition: color 0.2s ease 0s; */
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
.fivNSm {
    stroke: none;
    fill: currentcolor;
    width: 24px;
    height: 24px;
    line-height: 0;
    font-size: 0px;
    vertical-align: middle;
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
/* 循环的共同样式*/
.sxtOx {
    margin: 0px;
}
.mWVIE {
    margin-top: 40px;
    align-self: stretch;
}
/* 底部向导 */
.gyFSiO {
    display: grid;
    grid-template-rows: auto auto;
    gap: 4px;
    margin: 34px 24px 0px;
}
.eDuuDL {
    display: flex;
    flex-wrap: wrap;
}
.eDuuDL > .sc-6ylu6x-1 {
    margin-right: 8px;
}
.khrVhz {
    font-size: 12px;
    line-height: 16px;
    color: rgb(133, 133, 133);
}
.jySdWe {
    font-size: 12px;
    line-height: 16px;
    color: rgb(133, 133, 133);
}
/* 底板 */
.lhcRrG {
    margin-top: 8px;
    position: sticky;
    bottom: 0px;
    display: block;
}
</style>