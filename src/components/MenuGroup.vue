<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-menu class="el-menu-vertical-demo" @select="selectIndex" router unique-opened>
          <el-submenu index="1">
              <template slot="title"><i class="el-icon-s-goods"></i>导航一</template>
              <el-menu-item index="1-1">吃饭</el-menu-item>
              <el-menu-item index="1-2">洗澡</el-menu-item>
              <el-menu-item index="1-3">睡觉</el-menu-item>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-s-help"></i>导航二</el-menu-item>
          <el-submenu index="3">
              <template slot="title"><i class="el-icon-s-platform"></i>导航三</template>
              <el-menu-item index="3-1">高铁</el-menu-item>
              <el-menu-item index="3-2">飞机</el-menu-item>
              <el-menu-item index="3-3">大巴</el-menu-item>

          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return {
            activeIndex:0
        }
    },
    methods:{
        selectIndex(index){
            console.log(index)
        }
    }
};
</script>

<style lang="scss" scoped></style>
