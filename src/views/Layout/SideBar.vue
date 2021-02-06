<!--
 * 文件描述:
 * @author Lz on 2021-02-06
 -->
<template>
  <div class=container-sidebar>
    <p>侧边栏1</p>
    <p>侧边栏2</p>
    <p>侧边栏3</p>
    <p>侧边栏4</p>
    <p @click="jump">侧边栏5</p>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
  components: {},
  data() {
    return {}
  },
  methods: {
    jump() {
      this.$router.puth('/home1')
    }
  }
}
</script>

<style lang="scss" scoped>
.container-sidebar {
  width: 120px;
  height: 100%;
  background-color: pink;

  > p {
    padding: 20px 0;
    border: 1px solid #3f3f3f;
  }
}
</style>
