<template>
  <div class="login-container">
    <el-form
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogVisible"
      label-width="100px"
      class="login-form"
      labelPosition='left'
      ref="form" :model="form" :rules="rules"
    >
      <el-form-item label="用户名" prop="name" required=true>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" required=true>
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
<!--      <el-form-item label="确认密码" prop="password" required=true>-->
<!--        <el-input type="password" v-model="form.password"></el-input>-->
<!--      </el-form-item>-->
      <el-form-item size="mini">
<!--        <el-button type="primary" @click="submit"-->
<!--        >注册</el-button>-->
        <el-button type="primary" :loading="submitBtnLoading" @click="submit">确定</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
        <el-button @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data () {
    return {
      dialogVisible: false,
      form: {name:'',
        password: ''},
      rules: {
        name: [
          {
            required: true,
            message: '姓名不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      },
      submitBtnLoading: false
    }
  },
  methods: {
    ...mapActions(['SaveTeacher']),
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submitBtnLoading = true
          this.SaveTeacher(this.form).then(() => {
            this.submitBtnLoading = false
            this.$refs.form.resetFields()
            this.$emit('on-success')
            this.dialogVisible = false
          }).catch(() => {
            this.submitBtnLoading = false
          })
        }
        this.$message({
            type: 'success',
            message: '注册成功!'
          },
          window.localStorage.clear(),
          this.$router.push('/login')
        )      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    goBack () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

.login-form {
  width: 480px;
  margin: 160px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgb(255, 255, 255, 0.8); /* 透明背景色 */
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}

/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #303133;
}

/* 标题 */
.login-title {
  color: #303133;
  text-align: center;
}

#goback{
  margin: 160px 0,0,0;
}
</style>
