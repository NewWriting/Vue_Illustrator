<template>
  <div id="Illustrations">
    <div class="illustration-header">
      <h3>作品</h3>
      <div><span>高级搜索</span></div>
    </div>
    <div>
      <ul class="illustration-main">
        <li v-for="image in images" :key="image.id">
          <div>
            <img :src="image.url" />
          </div>
          <span v-text="image.name"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Illustrations',
  data() {
    return {
      images: [
        {
          id: 1,
          name: '「おはよう」',
          url: require('@/assets/images/picture/插画/「おはよう」.png'),
        },
        {
          id: 2,
          name: '1時間ドローイング　まとめ',
          url: require('@/assets/images/picture/插画/1時間ドローイング　まとめ.png'),
        },
        {
          id: 3,
          name: '1時間ドローイング　まとめ(1)',
          url: require('@/assets/images/picture/插画/1時間ドローイング　まとめ(1).png'),
        },
        {
          id: 4,
          name: '1時間ドローイング　まとめ(2)',
          url: require('@/assets/images/picture/插画/1時間ドローイング　まとめ(2).png'),
        },
        {
          id: 5,
          name: '1時間ドローイング　まとめ(3)',
          url: require('@/assets/images/picture/插画/1時間ドローイング　まとめ(3).png'),
        },
      ],
    }
  },
}
</script>

<style scoped>
/* 版心确定 */
#Illustrations {
  padding: 0 8%;
}

/* 文字介绍 */
.illustration-header {
  display: flex;
  justify-content: space-between;
}

.illustration-header div {
  cursor: pointer;
}

.illustration-header div::before {
  content: '\e9bd';
  font-family: 'icomoon';
}

/* 插画主体，和主页基本一致 */
.illustration-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: -10px;
}

.illustration-main li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 列表每一项给出margin正值达到固定间隔 */
  width: 200px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.illustration-main li img {
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
}
</style>
