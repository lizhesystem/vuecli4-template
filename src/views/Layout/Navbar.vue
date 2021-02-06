<!--
 * 文件描述: 导航栏
 * @author Lz on 2020-07-09
 -->
<template>
  <div class="header-navbar">
    <h3>我是header</h3>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {}
  },
  methods: {
    jumpHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
