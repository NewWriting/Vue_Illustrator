<template>
  <div id="Comics">
    <Artworks></Artworks>
    <!-- 分别给每一个div添加样式 -->
    <ul class="label">
      <li
        v-for="(label, index) in labels"
        :key="index"
        v-text="label"
        :class="'label' + index"
      ></li>
    </ul>
    <div class="segament"></div>

    <ul class="Comics-main">
      <li v-for="image in images" :key="image.id">
        <div>
          <img :src="image.url" />
        </div>
        <span v-text="image.name"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import Artworks from '../components/Artworks'

export default {
  name: 'Comics',
  components: {
    Artworks,
  },
  data() {
    return {
      labels: ['东方', '一小时绘画决定', 'drawn in 1 hour at night'],

      images: [
        {
          id: 1,
          name: '東方　ワンドロ1週間まとめ   1',
          url: require('@/assets/images/picture/漫画/東方　ワンドロ1週間まとめ   1.jpg'),
        },

        {
          id: 2,
          name: '東方　ワンドロ1週間まとめ　2',
          url: require('@/assets/images/picture/漫画/東方　ワンドロ1週間まとめ　2.jpg'),
        },
        {
          id: 3,
          name: '東方　ワンドロまとめ　３',
          url: require('@/assets/images/picture/漫画/東方　ワンドロまとめ　３.jpg'),
        },
        {
          id: 4,
          name: '東方　ワンドロまとめ　4',
          url: require('@/assets/images/picture/漫画/東方　ワンドロまとめ　4.jpg'),
        },
        {
          id: 5,
          name: '東方　ワンドロまとめ　5',
          url: require('@/assets/images/picture/漫画/東方　ワンドロまとめ　5.jpg'),
        },
        {
          id: 6,
          name: '東方　ワンドロまとめ　6',
          url: require('@/assets/images/picture/漫画/東方　ワンドロまとめ　6.jpg'),
        },
        {
          id: 7,
          name: '東方　ワンドロまとめ　7',
          url: require('@/assets/images/picture/漫画/東方　ワンドロまとめ　8.jpg'),
        },
        {
          id: 8,
          name: '東方　ワンドロまとめ　9',
          url: require('@/assets/images/picture/漫画/東方　ワンドロまとめ　9.jpg'),
        },
        {
          id: 9,
          name: '東方　ワンドロまとめ　10',
          url: require('@/assets/images/picture/漫画/東方　ワンドロまとめ　10.jpg'),
        },
        {
          id: 10,
          name: '東方　ワンドロまとめ　11',
          url: require('@/assets/images/picture/漫画/東方　ワンドロまとめ　11.jpg'),
        },
      ],
    }
  },
}
</script>

<style scoped>
#Comics {
  padding: 0 10%;
}

/* 原创标签 */
.label {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 30%;
  height: 40px;
  margin: 0 -10px;
}

.label li {
  margin: 0 10px;
  padding: 0 20px;
  border-radius: 10px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 10px;
  cursor: pointer;
}

.label0 {
  background-color: rgb(200, 126, 135);
}

.label1 {
  background-color: rgba(200, 126, 160);
}

.label2 {
  background-color: rgb(196, 126, 200);
}

.segament {
  height: 40px;
}

/* 漫画主体，和主页基本一致 */
.Comics-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: -10px;
}

.Comics-main li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 列表每一项给出margin正值达到固定间隔 */
  margin: 10px;
  width: 48%;
  font-weight: 700;
  transition: all 0.5s;
  cursor: pointer;
}

.Comics-main li:hover {
  opacity: 0.8;
}

.Comics-main li div {
  border-radius: 20px;
  overflow: hidden;
}

.Comics-main li img {
  width: 100%;
  cursor: pointer;
}
</style>
