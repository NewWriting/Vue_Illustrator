<template>
  <div id="backgroud">
    <div id="logo"></div>
    <div id="login">
      <el-card class="box-card">
        <div id="form">
          <div id="logo-box">
            <div id="login-picture"></div>
          </div>
          <div id="username">
            <el-input v-model="username" placeholder="请输入用户名"></el-input>
          </div>
          <div id="password">
            <el-input
              placeholder="请输入密码"
              v-model="password"
              show-password
            ></el-input>
          </div>
          <div id="but">
            <el-button round>注册</el-button>
            <el-button @click="login" type="primary" round>登录</el-button>
          </div>
        </div>
        <div id="other-box">
          <div id="yan">用其他账号开始</div>
          <form @submit.prevent="login">
            <el-button id="apple" circle></el-button>
            <el-button id="weibo" circle></el-button>
            <el-button id="facebook" circle></el-button>
            <el-button id="google" circle></el-button>
          </form>
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
export default {
  name: 'LoginGin',
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
    login() {
      if (this.username === 'admin' && this.password === '123456') {
        alert('登录成功')
        this.$router.push('/')
      } else {
        alert('用户名或密码错误')
      }
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
  background-color: white;
  background-size: 400%;
  animation: myanimation 10s forwards;
}
#logo {
  color: rgb(177, 192, 204);
  font-size: 25px;
  font-weight: 800px;
  text-transform: uppercase;
  position: absolute;
  top: 5%;
  left: 5%;
}
#login {
  position: absolute;
  top: 20%;
  left: 38%;
}
#el-card {
  width: 373px;
  height: 210px;
  background-color: rgba(255, 255, 255, 255);
  border-radius: 15px;
}
#form {
  margin-bottom: 6px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.92);
  width: 363px;
  padding: 20px 0 20px;
  border-radius: 4px;
  line-height: 60px;
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
#data {
  font-size: 35px;
}
#login-picture {
  display: inline-block;
  width: 164px;
  height: 64px;
  background-image: url(../assets/Login/logo.svg);
  background-size: contain;
}
#login-box {
  margin-bottom: 30px;
}
#other-box {
  margin-top: 14px;
}
#apple {
  background-image: url(../assets/Login/apple.svg);
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
}
#weibo {
  background-image: url(../assets/Login/icon-weibo.svg);
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
}
#facebook {
  background-image: url(../assets/Login/icon-facebook.svg);
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
}
#google {
  background-image: url(../assets/Login/icon-google.svg);
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
}
#other-box {
  text-align: center;
}
#yan {
  font-size: 14px;
  padding-bottom: 20px;
}
</style>
