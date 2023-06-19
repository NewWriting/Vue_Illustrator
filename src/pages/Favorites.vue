<template>
  <div id="Favorites">
    <Artworks></Artworks>
    <ul class="Favorites-main">
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
  name: 'Favorites',
  components: {
    Artworks,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          name: '「おはよう」',
          url: require('@/assets/images/picture/收藏/【FGO】征服王はいいぞ.png'),
        },
        {
          id: 2,
          name: '不定期画報2」',
          url: require('@/assets/images/picture/收藏/不定期画報2.png'),
        },
        {
          id: 3,
          name: '129向こう側の月',
          url: require('@/assets/images/picture/收藏/129向こう側の月.png'),
        },
        {
          id: 4,
          name: '東方絵まとめ11',
          url: require('@/assets/images/picture/收藏/東方絵まとめ11.png'),
        },
        {
          id: 5,
          name: '髪の毛描くメモ',
          url: require('@/assets/images/picture/收藏/髪の毛描くメモ.jpg'),
        },
        {
          id: 6,
          name: '風鎮め',
          url: require('@/assets/images/picture/收藏/風鎮め.png'),
        },
        {
          id: 7,
          name: '六章',
          url: require('@/assets/images/picture/收藏/六章.jpg'),
        },
        {
          id: 8,
          name: '魔理沙の遺言',
          url: require('@/assets/images/picture/收藏/魔理沙の遺言.jpg'),
        },
        {
          id: 9,
          name: '水面の向こう',
          url: require('@/assets/images/picture/收藏/水面の向こう.jpg'),
        },
        {
          id: 10,
          name: '无题',
          url: require('@/assets/images/picture/收藏/无题.png'),
        },
        {
          id: 11,
          name: '移植都市と女学生',
          url: require('@/assets/images/picture/收藏/移植都市と女学生.jpg'),
        },
        {
          id: 12,
          name: 'ARIA',
          url: require('@/assets/images/picture/收藏/ARIA.jpg'),
        },
        {
          id: 13,
          name: 'Camelot and Happy New Year.',
          url: require('@/assets/images/picture/收藏/Camelot and Happy New Year..jpg'),
        },
        {
          id: 14,
          name: 'FGOログⅣ',
          url: require('@/assets/images/picture/收藏/FGOログⅣ.png'),
        },
        {
          id: 15,
          name: 'エレシュキガル',
          url: require('@/assets/images/picture/收藏/エレシュキガル.jpg'),
        },
        {
          id: 16,
          name: 'シノブの世界',
          url: require('@/assets/images/picture/收藏/シノブの世界.png'),
        },
        {
          id: 17,
          name: 'リヨぐだ子',
          url: require('@/assets/images/picture/收藏/リヨぐだ子.png'),
        },
        {
          id: 18,
          name: 'ハグレ王国',
          url: require('@/assets/images/picture/收藏/ハグレ王国.png'),
        },
        {
          id: 19,
          name: 'オルタ',
          url: require('@/assets/images/picture/收藏/オルタ.png'),
        },
        {
          id: 20,
          name: '全て遠き理想郷',
          url: require('@/assets/images/picture/收藏/全て遠き理想郷.png'),
        },
      ],
    }
  },
}
</script>

<style scoped>
#Favorites {
  padding: 0 10%;
}

/* 收藏主体 */
.Favorites-main {
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  margin: -5px;
  height: 1200px;
}

.Favorites-main li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 列表每一项给出margin正值达到固定间隔 */
  width: 250px;
  margin: 5px;
  cursor: pointer;
}

.Favorites-main li div {
  border-radius: 20px;
  overflow: hidden;
}

.Favorites-main li img {
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
}

.Favorites-main img:hover {
  opacity: 0.6;
  transform: scale(1.5);
}
</style>
