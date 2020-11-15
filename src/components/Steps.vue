<template>
  <div>
    <el-steps :space="200" :active="active" finish-status="success" process-status="process">
        <el-step>
            <div slot="title">步骤一</div>
            <div slot="description">点外卖</div>
            <i slot="icon" class="el-icon-eleme"></i>
        </el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
</el-steps>

    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },

  methods: {
    next() {
      ++this.active
      if(this.active>3){
          this.active=0
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
