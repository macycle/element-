<template>
  <div>
    <div>
      <el-avatar :src="url" :size="300" shape="square"></el-avatar>
    </div>
  </div>
</template>

<script>
export default {
     data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
};
</script>

<style lang="scss" scoped></style>
