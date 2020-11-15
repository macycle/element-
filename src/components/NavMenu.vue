<template>
  <div>
      <p>{{activeIndex}}</p>
    <el-menu :default-active="activeIndex" mode="vertical" active-text-color="#3e3e" router @open="open">
        <el-menu-item index="1"><i class="el-icon-delete"></i>处理中心</el-menu-item>
        <el-menu-item index="2">海外淘</el-menu-item>
        <el-menu-item index="3" disabled>飞猪旅游</el-menu-item>
        <el-submenu index="4">
            <template slot="title">闲鱼</template>
            <el-menu-item index="4-1">闲置手机</el-menu-item>
             <el-menu-item index="4-2">闲置电脑</el-menu-item>
            <el-submenu index="4-3">
                    <template slot="title">闲置衣物</template>
                    <el-menu-item index="4-3-1">闲置内衣</el-menu-item>
                    <el-menu-item index="4-3-2">闲置袜子</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
   select(a){
       console.log(a)
       this.activeIndex=a
   },
   open(el){
       console.log(el)
   }
  },
};
</script>

<style lang="scss" scoped>
</style>