<template>
  <div>
    <div class="footer">
      <ul>
        <li>产品经理: 张师</li>
        <li>项目经理: 王师</li>
        <li>怨种程序员: 刚师</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'End',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 150px;
}

.footer ul {
  display: flex;
}

.footer ul li {
  margin: 10px;
}
</style>
