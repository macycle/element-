<template>
  <div>
    <ul>
      <li v-for="item in tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" :key="item.name">{{ item.name }}</li>    <!--注意每页显示多少都得自己写的-->
    </ul>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      prev-text="上一页"
      next-text="下一页"
      :current-page="currentPage"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      total: 0,
      pageSize: 4,
      tableData: [
        {
          date: "2016-05-02",
          name: "小白",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "小黄",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "小吕",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "小黑",
          address: "上海市普陀区金沙江路 1520 弄",
        },
        {
          date: "2016-05-03",
          name: "小溪",
          address: "上海市普陀区金沙江路 1521 弄",
        },
        {
          date: "2016-05-03",
          name: "小胡",
          address: "上海市普陀区金沙江路 1522 弄",
        },
        {
          date: "2016-05-03",
          name: "小王",
          address: "上海市普陀区金沙江路 1523 弄",
        },
        {
          date: "2016-05-03",
          name: "小赵",
          address: "上海市普陀区金沙江路 1524 弄",
        },
         {
          date: "2016-05-03",
          name: "小崔",
          address: "上海市普陀区金沙江路 1524 弄",
        },
         {
          date: "2016-05-03",
          name: "小武",
          address: "上海市普陀区金沙江路 1524 弄",
        },
         {
          date: "2016-05-03",
          name: "小发",
          address: "上海市普陀区金沙江路 1524 弄",
        },
         {
          date: "2016-05-03",
          name: "小能",
          address: "上海市普陀区金沙江路 1524 弄",
        },
         {
          date: "2016-05-03",
          name: "小云",
          address: "上海市普陀区金沙江路 1524 弄",
        },
         {
          date: "2016-05-03",
          name: "小丰",
          address: "上海市普陀区金沙江路 1524 弄",
        },
         {
          date: "2016-05-03",
          name: "小鹏",
          address: "上海市普陀区金沙江路 1524 弄",
        },
        {
          date: "2016-05-03",
          name: "小可",
          address: "上海市普陀区金沙江路 1524 弄",
        },
        {
          date: "2016-05-03",
          name: "小伟",
          address: "上海市普陀区金沙江路 1524 弄",
        }
      ],
    };
  },
  created() {
    this.total = this.tableData.length;
  },
  methods: {
    handleSizeChange(size) {
      this.pagesize = size;
      console.log(this.pagesize)
    },
     handleCurrentChange(currentPage){
        this.currentPage = currentPage;
        console.log(this.currentPage) //点击第几页
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  li {
    list-style-type: none;
    border: 1px solid red;
  }
}
</style>