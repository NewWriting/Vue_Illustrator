<template>
  <div class="fDmigA">
    <div class="hHgbLu">
      <!-- 1.加入会员 -->
    <EnterPrem></EnterPrem>
    <!-- 2.投稿作品 -->
    <SubmitWorker></SubmitWorker>
    <!-- 3.信息 -->
    <Information></Information>
    <!-- 4.通知 -->
    <Notice></Notice>
    <!-- 5.头像信息 -->
    <Subscriber></Subscriber>
    </div>
    <div>
      <!-- 6.其他业务 -->
    <RelativeService></RelativeService>
    </div>
  </div>
</template>

<script>
import SubmitWorker from "./SubmitWorker.vue";
import Subscriber from "./Subscriber.vue";
import Information from "./Information.vue";
import Notice from "./Notice.vue";
import EnterPrem from './EnterPrem.vue';
import RelativeService from "./RelativeService"

export default {
  name: "MiddleFunction",
  components: {
    // 子组件有会员、投稿、信息、通知、头像、业务
    SubmitWorker,
    Subscriber,
    Information,
    Notice,
    EnterPrem,
    RelativeService,
  },
};
</script>

<style scoped>
/* 最大盒子的样式 */
.fDmigA {
    display: grid;
    gap: 2px;
    grid-template-columns: auto auto;
    justify-self: end;
    -webkit-box-align: center;
    align-items: center;
}
/* 除业务盒子外的功能点盒子 */
.hHgbLu {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(5, auto);
    -webkit-box-align: stretch;
    align-items: stretch;
}

/* 业务盒子 */
/* .jyMFQz {
    position: relative;
} */
</style>