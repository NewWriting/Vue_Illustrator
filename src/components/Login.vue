<template>
  <div id="backgroud">
    <div id="logo">mysystem</div>
    <div id="login">
      <el-card class="box-card">
        <div id="form">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
          <el-button type="primary">登录</el-button>
        </div>
      </el-card>
    </div>
    <div id="clock">
      <div id="time">{{ time }}</div>
      <div id="data">{{ data }}</div>
    </div>
  </div>
</template>

<script>
// import { nextTick } from 'vue/types/umd'

export default {
  name: 'Backgroud',
  data() {
    return {
      username: '',
      password: '',
      time: '',
      data: '',
    }
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(this.update_clock, 1000)
    })
  },
  methods: {
    update_clock: function () {
      var d = new Date()
      var year = d.getFullYear()
      if (year < 10) {
        year = '0' + year
      }
      var month = d.getMonth()
      if (month < 10) {
        month = '0' + month
      }
      var day = d.getDate()
      if (day < 10) {
        day = '0' + day
      }
      var hour = d.getHours()
      if (hour < 10) {
        hour = '0' + hour
      }
      var minute = d.getMinutes()
      if (minute < 10) {
        minute = '0' + minute
      }
      this.time = hour + ':' + minute
      this.data = year + '/' + month + '/' + day
    },
  },
}
</script>

<style>
#backgroud {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg, cyan, purple);
  background-size: 400%;
  animation: myanimation 10s forwards;
}
@keyframes myanimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
#logo {
  color: aliceblue;
  font-size: 25px;
  font-weight: 800px;
  text-transform: uppercase;
  position: absolute;
  top: 15%;
  left: 15%;
}
#login {
  position: absolute;
  top: 30%;
  left: 38%;
}
#el-card {
  width: 373px;
  height: 210px;
  background-color: rgba(255, 255, 255, 255);
  border-radius: 15px;
}
#form {
  line-height: 60px;
  padding-left: 15px;
  padding-right: 15px;
}
#clock {
  color: aliceblue;
  position: absolute;
  top: 70%;
  left: 15%;
  text-align: left;
}
#time {
  font-size: 100px;
}
#date {
  font-size: 35px;
}
</style>
