<template>
    <div>
        <el-tag v-for="la in list" :key="la.id" :closable="la.closable">{{la.content}}</el-tag>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value:30,
                list:[{
                    type:'success',
                    id:1,
                    content:'标签一',
                    color:"red",
                    closable:true
                },{
                    type:'waring',
                    id:2,
                    content:'标签二',
                    color:"gray",
                    closable:true
                },{
                    type:'info',
                    id:3,
                    content:'标签三',
                    color:"yellow",
                    closable:true
                },{
                    type:'danger',
                    id:4,
                    content:'标签四',
                    color:"blue",
                    closable:true
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>