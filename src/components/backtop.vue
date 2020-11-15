
<template>
  <div class="fuck">
    
    <p v-for="i in 50" :key="i">占一行</p>
    <el-backtop :visibility-height="150">
        <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
    </el-backtop>
  </div>  
</template>