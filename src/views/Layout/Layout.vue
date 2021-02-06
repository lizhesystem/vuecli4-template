<!--
 * 文件描述: 布局组件
 * @author Lz on 2020-07-09
 -->
<template>
  <div class="container-main">
    <side-bar/>
    <div class="container-right">
      <nav-header/>
      <router-view/>
    </div>
  </div>
</template>

<script>


import SideBar from './SideBar'
import NavHeader from './NavHeader'

export default {
  name: 'Layout',
  components: {
    NavHeader,
    SideBar

  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.container-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;

  .container-right {
    width: calc(100% - 120px);
  }
}
</style>
