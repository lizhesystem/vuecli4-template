<template>
  <div id="app">
    <ZdTransitionSlide>
      <router-view/>
    </ZdTransitionSlide>
    <!--全局返回顶部-->
    <el-backtop style=" width: 55px; height: 55px;"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>

<style lang="scss" src="./sass/common-m.scss"></style>
