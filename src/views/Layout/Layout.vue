<!--
 * 文件描述: 布局组件
 * @author Lz on 2020-07-09
 -->
<template>
  <div>
    <nav-header/>
    <Navbar/>
    <ZdTransitionSlide>
      <router-view/>
    </ZdTransitionSlide>
    <nav-footer/>
  </div>
</template>

<script>
  import Navbar from '@/views/Layout/Navbar'
  import NavHeader from '@/views/Layout/NavHeader'
  import NavFooter from '@/views/Layout/NavFooter'

  export default {
    name: 'Layout',
    components: { NavFooter, NavHeader, Navbar },
    data() {
      return {}
    }
  }
</script>

<style lang="scss"></style>
