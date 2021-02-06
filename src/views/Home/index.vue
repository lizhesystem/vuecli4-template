<!--
 * 文件描述: 主页
 * @author Lz on 2020-07-09
 -->
<template>
  <div style="display: flex;height: 100%">
    <div style="background-color: #3da4fe;height: calc(100% - 100px);width: 120px">
      <div>左边home菜单</div>
      <div>左边home菜单</div>
      <div>左边home菜单</div>
      <div>左边home菜单</div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      activeName: '1',
      count: 14
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
