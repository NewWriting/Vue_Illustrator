<template>
  <div id="Illustrations">
    <div class="illustration-header">
      <h3>作品</h3>
      <span>高级搜索</span>
    </div>
    <div>
      <ul class="illustration-main">
        <li v-for="image in images" :key="image.id">
          <img :src="image.url" />
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
      ],
    }
  },
}
</script>

<style scoped></style>
