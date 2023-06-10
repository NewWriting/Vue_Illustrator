<template>
  <div id="Content">
    <!-- 指定组件呈现的位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Content',
  components: {},
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
