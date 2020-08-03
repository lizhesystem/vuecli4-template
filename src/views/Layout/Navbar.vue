<!--
 * 文件描述: 导航栏
 * @author Lz on 2020-07-09
 -->
<template>
  <div class="header-navbar">
    <ul>
      <li class="header-navbar__li">
        <el-button @click="jumpHome" type="primary">首页</el-button>
      </li>
      <li class="header-navbar__li">
        <el-button type="primary">权益交易</el-button>
      </li>
      <li class="header-navbar__li">
        <el-button type="primary">商品交易</el-button>
      </li>
      <li class="header-navbar__li">
        <el-button type="primary">融资贷款</el-button>
      </li>
      <li class="header-navbar__li">
        <el-button type="primary">社会化服务</el-button>
      </li>
      <li class="header-navbar__li">
        <el-button type="primary">流转审核</el-button>
      </li>
      <li class="header-navbar__li">
        <el-button type="primary">资讯发布</el-button>
      </li>
      <li class="header-navbar__li">
        <el-button type="primary">风险提示</el-button>
      </li>
      <li class="header-navbar__li">
        <el-button type="primary">经典案例</el-button>
      </li>
      <li class="header-navbar__li">
        <el-button type="primary">互动交流</el-button>
      </li>
      <li class="header-navbar__li">
        <el-button type="primary">关于我们</el-button>
      </li>
    </ul>
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
  .header-navbar {
    height: 74px;
    margin: 0 auto 40px auto;
    padding: 0 20px;
    text-align: center;
    background-color: $theme-color;

    ul {
      display: flex;
    }
  }

  .header-navbar__li {
    display: inline-block;
    width: calc(100% / 11 - 5px);
    line-height: 74px;
  }

  .header-navbar__li ::v-deep .el-button--primary {
    height: 100%;
    color: #fff;
    font-size: 22px;
  }

</style>
