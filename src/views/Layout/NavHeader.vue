<!--
 * 文件描述: Header
 * @author Lz on 2020-07-09
 -->
<template>
  <div class="container-navheader">
    我是头部
  </div>
</template>
<script>
export default {
  name: 'NavHeader',
  components: {},
  data() {
    return {
      searchText: '' // 搜索文字
    }
  }
}
</script>

<style scoped lang="scss">
.container-navheader {

  height: 100px;
  background-color: dimgray;
}
</style>
