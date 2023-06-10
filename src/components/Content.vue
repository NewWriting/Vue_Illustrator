<template>
  <div id="Content">
    <!-- 指定组件呈现的位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HomePage from '../pages/Homepage'
// import Illustrations from '../pages/Illustrations'
// import Comics from '../pages/Comics'
// import Favorites from '../pages/Favorites'

export default {
  name: 'Content',
  components: {
    // HomePage,
    // Illustrations,
    // Comics,
    // Favorites,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
#Content {
  margin-top: 50px;
  padding: 0 300px;
}
</style>
