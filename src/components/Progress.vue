<template>
  <div>
    <el-progress
      :percentage="percentage"
      :stroke-width="10"
      :color="customColor"
    ></el-progress>

    <el-button @click="addPercent">+5</el-button>
    <el-button @click="subPercent">-5</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 70,
      customColor: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    addPercent() {
      if (this.percentage >= 100) {
        return;
      } else {
        this.percentage = this.percentage + 5;
      }
    },
    subPercent() {
      if (this.percentage <= 0) {
        return;
      } else {
        this.percentage = this.percentage - 5;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
