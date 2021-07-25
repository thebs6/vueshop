<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区 -->
      <div class="avator-box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- 登陆表单区 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login-form">
        <el-form-item prop="username">
          <el-input  prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input prefix-icon="el-icon-user"  v-model="loginForm.password"></el-input>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click="resetLoginForm">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username:[
          {
            require:true,
            message:"请输入用户名",
            trigger:"blur"
          },
          {
            min:3,
            max:15,
            message:"长度在3到15之间",
            trigger:'blur'
          }
        ],

      }
    }
  },

  methods: {
    resetLoginForm() {
      console.log(this)
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        console.log(valid)
        if(!valid) return;
        const {data: res} = await this.$http.post('login',this.loginForm)
        console.log(res)
        if(res.meta.status != 200)return this.$message.error("登录失败")
        this.$message.success("登录成功")

        window.sessionStorage.setItem("token",res.data.token)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-color: #2b4b6b;
  height: 100%;
}

.login-box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  //translate(x,y)平移，如果为百分比则是按照元素自身大小的百分比平移
  transform: translate(-50%,-50%);
}

.avator-box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }

}

.login-form {
  position: absolute;
  bottom:0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
