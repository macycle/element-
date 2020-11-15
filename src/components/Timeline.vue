<template>
  <div>
    <div class="block">
      <div class="radio">
        排序：
        <el-radio-group v-model="reverse">
          <el-radio :label="true">倒序</el-radio>
          <el-radio :label="false">正序</el-radio>
        </el-radio-group>
      </div>

      <el-timeline :reverse="reverse">
        <el-timeline-item
         v-for="item in activities"
         :key="item.timestamp"
         :timestamp='item.timestamp'
         :icon="item.icon"
         
        >
          {{ item.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
     data() {
      return {
        reverse: true,
        activities: [{
          content: '活动按期开始',
          timestamp: '2018-04-15',
          icon: 'el-icon-upload'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13',
          icon: 'el-icon-mobile'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11',
          icon: 'el-icon-mouse'
        }]
      };
    }
};
</script>

<style lang="scss" scoped>
</style>