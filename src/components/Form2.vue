<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      label-position="right"
    >
      <el-form-item :label="$t('m.message.password')" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item :label="$t('m.message.checkPassword')"  prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item :label="$t('m.message.age')" prop="age">
        <el-input
          type="text"
          v-model="ruleForm.age"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
      var checkAge=(rule,value,callback)=>{
          if(!value){
              return callback(new Error('年龄不能为空'));
          }
          setTimeout(()=>{
              if(!Number.isInteger(value)){
                  callback(new Error('请输入数值'))
              }else{
                  if(value<18){
                      callback(new Error('必须年满18周岁'))
                  }else{
                      callback()
                  }
              }
          })
      };

      var validatePass=(rule,value,callback)=>{
          if(value=''){
              callback(new Error('请输入密码'));
          }else{
              if(this.ruleForm.checkPass!==''){
                  this.$refs.ruleForm.validateField('checkPass');
              }
              callback()
          }
      };

      var validatePass2=(rule,value,callback)=>{
          if(value===''){
              callback(new Error('请再次输入密码'))
          }else if(value !== this.ruleForm.pass){
              callback(new Error('两次密码输入错误'))
          }else{
              callback()
          }
      }


    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass:[
            {validator:validatePass,trigger:'blur',required:true}
        ],
        checkPass:[
            {validator:validatePass2,trigger:'blur'}
        ],
        age:[
            {validator:checkAge,trigger:'blur'}
        ]
      },
    };
  },
  methods:{
      submitForm(formName){
          this.$refs[formName].validate(valid=>{
              if(valid){
                  alert('submit')
              }else{
                  alert('error')
                  return false
              }
          })
      },
      resetForm(formName){
         this.$refs[formName].resetFields();
      }
  }
};
</script>

<style lang="scss" scoped></style>
