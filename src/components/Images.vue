<template>
  <div class="demo-image__lazy">
    <el-image
    style="width: 100px; height: 100px"
      :src="urls[0]"
      :key="urls[0]"
      :preview-src-list="urls"
    ></el-image>
  </div>
</template>

<script>
export default {
     data() {
      return {
       urls: [
         'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
         ],
       srcList1: [
         'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        ]
      }
    }
};
</script>

<style lang="scss" scoped>
</style>