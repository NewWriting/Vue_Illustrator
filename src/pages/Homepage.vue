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
            お空好きな創作絵描きです。全体公開では備忘録も兼ねて何か書ければなぁと思います（不定期）
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
        <ul class="show-works">
          <li v-for="image in images" :key="image.id">
            <img :src="image.url" />
            <span v-text="image.name"></span>
            <span v-text="image.price"></span>
          </li>
        </ul>
      </div>
      <!-- 查看全部 -->
      <div class="checkAll">
        <button>查看全部</button>
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
          price: '4,710 JPY',
          url: require('@/assets/images/picture/BOOTH/明日へ飛ばして.jpg'),
        },
        {
          id: 2,
          name: 'ICカードステッカー／明けの色',
          price: '2,050 JPY',
          url: require('@/assets/images/picture/BOOTH/ICカードステッカー／明けの色.png'),
        },
        {
          id: 3,
          name: 'ICカードステッカー／青色の風',
          price: '2,050 JPY',
          url: require('@/assets/images/picture/BOOTH/ICカードステッカー／青色の風.png'),
        },
        {
          id: 4,
          name: 'パスケース／風に乗せて',
          price: '2,050 JPY',
          url: require('@/assets/images/picture/BOOTH/パスケース／風に乗せて.png'),
        },
        {
          id: 5,
          name: 'パスケース／空に飛ばして',
          price: '2,230 JPY',
          url: require('@/assets/images/picture/BOOTH/パスケース／空に飛ばして.jpg'),
        },
        {
          id: 6,
          name: 'パスケース／明日へ飛ばして',
          price: '812 JPY',
          url: require('@/assets/images/picture/BOOTH/パスケース／明日へ飛ばして.png'),
        },
        {
          id: 7,
          name: 'パスケース／青空の君',
          price: '2,230 JPY',
          url: require('@/assets/images/picture/BOOTH/パスケース／青空の君.png'),
        },
        {
          id: 8,
          name: 'パスケース／青空を飛ぶ',
          price: '2,230 JPY',
          url: require('@/assets/images/picture/BOOTH/パスケース／青空を飛ぶ.png'),
        },
        {
          id: 9,
          name: 'ポスター／青色の風',
          price: '1,530 JPY~',
          url: require('@/assets/images/picture/BOOTH/ポスター／青色の風.png'),
        },
        {
          id: 10,
          name: 'ポスター／雪の日',
          price: '1,530 JPY~',
          url: require('@/assets/images/picture/BOOTH/ポスター／雪の日.png'),
        },
        {
          id: 11,
          name: 'ポスター／紙飛行機に乗せて',
          price: '2,230 JPY',
          url: require('@/assets/images/picture/BOOTH/ポスター／紙飛行機に乗せて.png'),
        },
      ],
    }
  },
}
</script>

<style scoped>
/* 精选内容 */

.selective {
  padding: 0 8%;
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

/* 初始状态图片上有一个淡黑色遮罩 */
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
.BOOTH {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 50px;
  /* 左右间距使用父组件宽度10%，更加具有灵活性 */
  padding: 0 8%;
  background-color: rgb(245, 245, 245);
}

.main {
  margin-top: 20px;
}

.main p {
  margin-bottom: 10px;
}

/* 商品列表 */
.show-works {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

/* 使相册照片项之间有固定间隔，并且保证组件之间的对齐 */
.show-works {
  /* 列表整体使用margin负值进行扩展 */
  margin: -10px;
}

.show-works li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 列表每一项给出margin正值达到固定间隔 */
  width: 200px;
  height: 300px;
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
}

.show-works li img {
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
}

/* 当鼠标移动到图片上的时候，形成半透明效果 */
.show-works li img:hover {
  opacity: 0.8;
}

/* 查看全部 */
.checkAll {
  width: 600px;
  height: 40px;
  margin: 100px auto;
  border-radius: 20px;
}

.checkAll button {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: black;
  color: #fff;
}

.checkAll button:active {
  border: 3px solid rgb(166, 214, 246);
}
</style>
