<template>
  <div>
    <el-badge :value="value" :max='max' is-dot class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
  </div>
</template>

<script>
export default {
    data(){
        return {
            value:1234,
            max:1000
        }
    }
};
</script>

<style lang="scss" scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
