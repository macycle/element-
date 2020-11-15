<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
export default {
  methods: {
    open() {
      this.$prompt('我是用来测试的','我是标题',{
          message:'<h3>我是内容体3</h3>',
          dangerouslyUseHTMLString:'true',
          type:'info',
          beforeClose(action,i,done){
              done()
          },
          showCancelButton:true,
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确' 
      }).then((res)=>{
          
          this.$message({
              type: 'success',
              message: '你的邮箱是: ' + res.value
          })
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
