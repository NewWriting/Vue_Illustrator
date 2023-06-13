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
          url: require('@/assets/images/picture/插画/「おはよう」.jpg'),
        },
        {
          id: 2,
          name: '「おはよう」~',
          url: require('@/assets/images/picture/插画/「おはよう」~.jpg'),
        },
        {
          id: 3,
          name: '『おはよう』',
          url: require('@/assets/images/picture/插画/『おはよう』.jpg'),
        },
        {
          id: 4,
          name: '1時間ドロ―イングまとめ.jpg',
          url: require('@/assets/images/picture/插画/1時間ドロ―イングまとめ.jpg'),
        },
        {
          id: 5,
          name: '1時間ドロ―イングまとめ#',
          url: require('@/assets/images/picture/插画/1時間ドロ―イングまとめ2.jpg'),
        },
        {
          id: 6,
          name: '1時間ドローイング　まとめ！',
          url: require('@/assets/images/picture/插画/1時間ドローイング　まとめ！.jpg'),
        },
        {
          id: 7,
          name: '1時間ドローイング　まとめ',
          url: require('@/assets/images/picture/插画/1時間ドローイング　まとめ.jpg'),
        },
        {
          id: 8,
          name: '1時間ドローイング　まとめ@',
          url: require('@/assets/images/picture/插画/1時間ドローイング　まとめ@.jpg'),
        },
        {
          id: 9,
          name: '1時間ドローイング　まとめ~',
          url: require('@/assets/images/picture/插画/1時間ドローイング　まとめ~.jpg'),
        },
        {
          id: 10,
          name: '朝に溶けゆく',
          url: require('@/assets/images/picture/插画/朝に溶けゆく.jpg'),
        },
        {
          id: 11,
          name: '朝を迎えて',
          url: require('@/assets/images/picture/插画/朝を迎えて.jpg'),
        },
        {
          id: 12,
          name: '飛んでいく',
          url: require('@/assets/images/picture/插画/飛んでいく.jpg'),
        },
        {
          id: 13,
          name: '風に乗せて',
          url: require('@/assets/images/picture/插画/風に乗せて.jpg'),
        },
        {
          id: 14,
          name: '風に吹かれて',
          url: require('@/assets/images/picture/插画/風に吹かれて.jpg'),
        },
        {
          id: 15,
          name: '帰り道の夕焼け',
          url: require('@/assets/images/picture/插画/帰り道の夕焼け.jpg'),
        },
        {
          id: 16,
          name: '何でもない明日へ',
          url: require('@/assets/images/picture/插画/何でもない明日へ.jpg'),
        },
        {
          id: 17,
          name: '結露',
          url: require('@/assets/images/picture/插画/結露.jpg'),
        },
        {
          id: 18,
          name: '空',
          url: require('@/assets/images/picture/插画/空.jpg'),
        },
        {
          id: 19,
          name: '空に飛ばして',
          url: require('@/assets/images/picture/插画/空に飛ばして.jpg'),
        },
        {
          id: 20,
          name: '空へ',
          url: require('@/assets/images/picture/插画/空へ.jpg'),
        },
        {
          id: 21,
          name: '空を奏でて',
          url: require('@/assets/images/picture/插画/空を奏でて.jpg'),
        },
        {
          id: 22,
          name: '明日',
          url: require('@/assets/images/picture/插画/明日.jpg'),
        },
        {
          id: 23,
          name: '明日に飛ばして',
          url: require('@/assets/images/picture/插画/明日に飛ばして.jpg'),
        },
        {
          id: 24,
          name: '明日へ飛ばして',
          url: require('@/assets/images/picture/插画/明日へ飛ばして.jpg'),
        },
        {
          id: 25,
          name: '明け',
          url: require('@/assets/images/picture/插画/明け.jpg'),
        },
        {
          id: 26,
          name: '明け~',
          url: require('@/assets/images/picture/插画/明け~.jpg'),
        },
        {
          id: 27,
          name: '明けの思い出',
          url: require('@/assets/images/picture/插画/明けの思い出.jpg'),
        },
        {
          id: 28,
          name: '青色の風',
          url: require('@/assets/images/picture/插画/青色の風.jpg'),
        },
        {
          id: 29,
          name: '群青',
          url: require('@/assets/images/picture/插画/群青.jpg'),
        },
        {
          id: 30,
          name: '日暮れの窓辺',
          url: require('@/assets/images/picture/插画/日暮れの窓辺.jpg'),
        },
        {
          id: 31,
          name: '思い出',
          url: require('@/assets/images/picture/插画/思い出.jpg'),
        },
        {
          id: 32,
          name: '午前6時',
          url: require('@/assets/images/picture/插画/午前6時.jpg'),
        },
        {
          id: 33,
          name: '夕暮れに',
          url: require('@/assets/images/picture/插画/夕暮れに.jpg'),
        },
        {
          id: 34,
          name: '夏風',
          url: require('@/assets/images/picture/插画/夏風.jpg'),
        },
        {
          id: 35,
          name: '夏空と君',
          url: require('@/assets/images/picture/插画/夏空と君.jpg'),
        },
        {
          id: 36,
          name: '星に揺られて',
          url: require('@/assets/images/picture/插画/星に揺られて.jpg'),
        },
        {
          id: 37,
          name: 'いつもの帰り道',
          url: require('@/assets/images/picture/插画/夜を歩いて.jpg'),
        },
        {
          id: 38,
          name: '雨の中で',
          url: require('@/assets/images/picture/插画/雨の中で.jpg'),
        },
        {
          id: 39,
          name: '展望',
          url: require('@/assets/images/picture/插画/展望.jpg'),
        },
        {
          id: 40,
          name: '照れ隠しのクセ',
          url: require('@/assets/images/picture/插画/照れ隠しのクセ.jpg'),
        },
        {
          id: 41,
          name: '佇む',
          url: require('@/assets/images/picture/插画/佇む.jpg'),
        },
        {
          id: 42,
          name: 'いつもの帰り道',
          url: require('@/assets/images/picture/插画/いつもの帰り道.jpg'),
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
  margin-bottom: 20px;
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
  justify-content: flex-start;
  margin: -10px;
}

.illustration-main li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 列表每一项给出margin正值达到固定间隔 */
  width: 200px;
  height: 250px;
  margin: 10px;
  transition: all 0.5s;
  cursor: pointer;
}

.illustration-main li:hover {
  opacity: 0.8;
}

.illustration-main li div {
  border-radius: 20px;
  overflow: hidden;
}

.illustration-main li img {
  width: 100%;
  cursor: pointer;
}
</style>
