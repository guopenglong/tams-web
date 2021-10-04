<template>
  <div class="login-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login-form"
      labelPosition='left'
    >
      <el-form-item label="用户名" prop="username" required=true>
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="班级" prop="region" required=true>
        <el-select v-model="ruleForm.region" placeholder="请选择班级">
          <el-option label="1801" value="1801-class"></el-option>
          <el-option label="1802" value="1802-class"></el-option>
          <el-option label="1803" value="1803-class"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号/邮箱" prop="account" required=true>
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" required=true>
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword" required=true>
        <el-input type="password" v-model="ruleForm.repassword"></el-input>
      </el-form-item>
      <el-form-item size="mini">
        <el-button type="primary" @click="submitForm('ruleForm')"
        >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        region: '',
        account: '',
        password: '',
        repassword: ''
      },
      rules: {
        // name: [
        //   { required: true, message: '请输入活动名称', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
        // region: [
        //   { required: true, message: '请选择活动区域', trigger: 'change' }
        // ],
        // date1: [
        //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        // ],
        // date2: [
        //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        // ],
        // type: [
        //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        // ],
        // resource: [
        //   { required: true, message: '请选择活动资源', trigger: 'change' }
        // ],
        // desc: [
        //   { required: true, message: '请填写活动形式', trigger: 'blur' }
        // ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
  width: 350px;
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
