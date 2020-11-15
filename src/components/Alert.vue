<template>
  <div>
   
    <el-alert title="成功提示的文案" type="success" v-show="isShow" show-icon> </el-alert>

     <el-button @click="alert">点击</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    alert() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped></style>
