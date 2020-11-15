<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right;" type="primary"
         @click="isShow=!isShow" >toggle</el-button
        >
      </div>
      <div v-for="o in 4" :key="o" class="text item" v-show="isShow">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:true
        }
    }
};
</script>

<style lang="scss" scoped>
.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>