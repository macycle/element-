<template>
  <div>
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px">
      打开抽屉
    </el-button>

    <el-drawer title="我是标题" :visible.sync="drawer" :wrapperClosable="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
    data(){
        return{
            drawer:false
        }
    }
};
</script>

<style lang="scss" scoped>
</style>