<template>
  <div id="Homepage">
    <!-- 精选内容和Fanbox -->
    <div class="selective">
      <h3>精选</h3>
      <p>pixivFANBOX</p>
      <!-- 样例图 -->
      <div class="instance">
        <img :src="instance" />
        <!-- 图片上Fanbox定期赞助信息 -->
        <div class="sponsor">
          <h4>みふる的FANBOX</h4>
          <span>
            お空好きな創作絵描きです。　
            全体公開では備忘録も兼ねて何か書ければなぁと思います（不定期）
          </span>
          <div>赞助</div>
        </div>
      </div>
    </div>
    <!-- BOOTH商品 -->
    <div class="BOOTH">
      <!-- BOOTH商品主题展现位置 -->
      <div class="main">
        <h3>みふる的BOOTH</h3>
        <p>おそらやさん</p>
        <div class="show-works"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      instance: require('@/assets/images/picture/68641922_p0.png'),
      images: [
        {
          id: 1,
          name: '明日へ飛ばして',
          // Vue CLI 的 @/ 别名来引用资源文件
          // 相对路径是相对于当前文件所在的位置而言的，而不是相对于应用程序的根目录
          // 正确的应用静态资源
          url: require('@/assets/images/picture/BOOTH/明日へ飛ばして.jpg'),
        },
        {
          id: 2,
          name: 'ICカードステッカー／明けの色',
          url: require('@/assets/images/picture/BOOTH/ICカードステッカー／明けの色.png'),
        },
        {
          id: 3,
          name: 'ICカードステッカー／青色の風',
          url: require('@/assets/images/picture/BOOTH/ICカードステッカー／青色の風.png'),
        },
        {
          id: 4,
          name: 'パスケース／風に乗せて',
          url: require('@/assets/images/picture/BOOTH/パスケース／風に乗せて.png'),
        },
        {
          id: 5,
          name: 'パスケース／空に飛ばして',
          url: require('@/assets/images/picture/BOOTH/パスケース／空に飛ばして.jpg'),
        },
        {
          id: 6,
          name: 'パスケース／明日へ飛ばして',
          url: require('@/assets/images/picture/BOOTH/パスケース／明日へ飛ばして.png'),
        },
        {
          id: 7,
          name: 'パスケース／青空の君',
          url: require('@/assets/images/picture/BOOTH/パスケース／青空の君.png'),
        },
      ],
    }
  },
}
</script>

<style scoped>
/* 精选内容 */

.selective {
  padding: 0 300px;
}

.selective p {
  margin-top: 20px;
  color: rgb(173, 173, 173);
}

/* 隐藏多余部分 */
.instance {
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 300px;
  margin-top: 20px;
  border-radius: 10px;
  transition: all 0.5s;
  cursor: pointer;
}

/* 调整图片位置， */
.instance img {
  width: 100%;
  margin-top: -50px;
}

/* 初始状态图片上有一个黑色遮罩 */
.instance::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  opacity: 1;
}

/* 当鼠标移动到图片上的时候，形成半透明效果 */
.instance:hover::before {
  opacity: 0.3;
}

/* 赞助信息，利用定位实现 */
.sponsor {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 160px;
  position: absolute;
  left: 20px;
  top: 100px;
  color: #fff;
}

/* 实现一个赞助按钮 */
.sponsor div {
  width: 80px;
  height: 40px;
  border-radius: 20px;
  /* 设置渐变色 */
  background: linear-gradient(90deg, rgb(209, 255, 26), rgb(26, 209, 255));
  /* 字体居中垂直对齐 */
  text-align: center;
  line-height: 40px;
}

/* BOOTH商品 */
.BOOT {
  background-color: rgb(245, 245, 245);
}
</style>
