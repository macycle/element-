<template>
  <div>

      <p>{{value}}</p>
    <el-calendar :range="['2019-03-04', '2019-03-24']">

    </el-calendar>
  </div>
</template>

<script>
export default {
     data() {
      return {
        value: new Date()
      }
    }
};
</script>

<style lang="scss" scoped>
.is-selected {
    color: #1989FA;
  }
</style>