<template>
  <div>
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>

    <el-tree
      show-checkbox
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      node-key="id"
      :render-after-expand="false"
      check-on-click-node
      ref="tree"
      :filter-node-method="filterNode"
    ></el-tree>
  </div>
</template>

<script>
//对于tree，数据的结构是在data里面定义的。
export default {
     watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
        console.log(val)
      }
    },
  data() {
    return {
        filterText:'',
      data: [
        {
          label: "天猫新品",
          id: "1",
          children: [
            {
              label: "精选",
              id: "1-1",

              children: [
                {
                  label: "SONY",
                  id: "1-1-1",
                },
                {
                  label: "iphone",
                  id: "1-1-2",
                },
                {
                  label: "SUMSUNG",
                  id: "1-1-3",
                },
              ],
            },
            {
              label: "新趋势",
              id: "1-2",
              children: [
                {
                  label: "实木电脑桌",
                  id: "1-2-1",
                },
                {
                  label: "夏威夷果绿白机械键盘",
                  id: "1-2-2",
                },
                {
                  label: "NOLO VR一体机",
                  id: "1-2-3",
                },
              ],
            },
            {
              label: "新品牌",
              id: "1-3",
              children: [
                {
                  label: "vivo IQOO U1x",
                  id: "1-3-1",
                },
                {
                  label: "开心果",
                  id: "1-3-2",
                },
                {
                  label: "美的新品TX7玻璃屏",
                  id: "1-3-3",
                },
              ],
            },
          ],
        },
        {
          label: "今日爆款",
          id: "2",
          disabled: true,
          children: [
            {
              label: "精选",
              id: "2-1",
            },
            {
              label: "手机",
              id: "2-2",
            },
            {
              label: "美家",
              id: "2--3",
            },
          ],
        },
        {
          label: "飞猪旅游",
          id: "3",
          children: [
            {
              label: "机票",
              id: "3-1",
            },
            {
              label: "酒店",
              id: "3-2",
            },
          ],
        },
        {
          label: "天猫超市",
          id: "4",
          children: [
            {
              label: "半日达",
              id: "4-1",
            },
            {
              label: "休闲零食",
              id: "4-2",
            },
            {
              label: "粮油米面",
              id: "4-3",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      //   console.log(data);
    },
    filterNode(value, data) {
        if (!value) return true;
        console.log(data)
        return data.label.indexOf(value) !== -1;
      },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([
          { label: "天猫新品", id: "1" },
          { label: "今日爆款", id: "2" },
          { label: "飞猪旅游", id: "3" },
          { label: "天猫超市", id: "4" },
        ]);
      } else {
        console.log(node);
        this.getTreeChild(node.id, resolve);
      }
    },
    getTreeChild(id, resolve) {
      switch (id) {
        case 1:
          const data1 = [
            {
              label: "精选",
              id: "1-1",
            },
            {
              label: "新趋势",
              id: "1-2",
            },
            {
              label: "新品牌",
              id: "1-3",
            },
          ];
          resolve(data1);
          break;
        case 2:
          const data2 = [
            {
              label: "精选",
              id: "2-1",
            },
            {
              label: "手机",
              id: "2-2",
            },
            {
              label: "美家",
              id: "2--3",
            },
          ];
          resolve(data2);
          break;
        case 3:
          const data3 = [
            {
              label: "机票",
              id: "3-1",
            },
            {
              label: "酒店",
              id: "3-2",
            },
          ];
          resolve(data3);
          break;
        case 4:
          const data4 = [
            {
              label: "半日达",
              id: "4-1",
            },
            {
              label: "休闲零食",
              id: "4-2",
            },
            {
              label: "粮油米面",
              id: "4-3",
            },
          ];
          resolve(data4);
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
