<template>
  <div>
    <el-carousel :interval="4000" height="50vh" arrow="always" ref="carousel">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <el-button @click="prev">上一张</el-button>
    <el-button @click="next">下一张</el-button>

  </div>
</template>

<script>
export default {
    methods:{
       prev(){
           this.$refs.carousel.prev()
       },
       next(){
           this.$refs.carousel.next()
       }
    }
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>