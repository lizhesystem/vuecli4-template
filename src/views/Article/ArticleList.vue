<!--
 * 文件描述: 文章/资讯列表
 * @author Lz on 2020-07-14
 -->
<template>
  <div>
    我是首页
  </div>
</template>

<script>

export default {
  name: 'ArticleList',
  components: {},
  data() {
    return {
      count: 10,
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style></style>
