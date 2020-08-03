<!--
 * 文件描述: Header
 * @author Lz on 2020-07-09
 -->
<template>
  <div>
    <div class="navHeader-top">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="reglogin">
        <el-button type="text">
          登录
        </el-button>
        &nbsp;&nbsp;
        <el-button type="text">
          注册
        </el-button>
      </div>
      <div class="search">
        <el-input
          v-model="searchText"
          :maxlength="18"
        >
        </el-input>
        <el-button type="primary">
          搜索
        </el-button>
      </div>
      <div class="top-right">
        <div class="ewm">
          <img src="../../assets/images/bgewm.png" alt="">
          <p>扫码下载APP</p>
        </div>
        <div class="ewm">
          <img src="../../assets/images/bgewm.png" alt="">
          <p>扫描关注公众号</p>
        </div>
      </div>
    </div>
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
  .navHeader-top {
    display: flex;
    height: 165px;

    .logo {
      margin-top: 20px;
      padding-left: 40px;
    }

    .reglogin {
      display: flex;
      padding-left: 60px;
      line-height: 165px;
    }

    .search {
      display: flex;
      padding: 60px 0 0 150px;
    }

    .top-right {
      display: flex;
      padding: 40px 0 0 130px;

      .ewm {
        text-align: center;

        &:last-child {
          padding-left: 50px;
        }
      }
    }
  }

  /*覆盖样式*/
  .reglogin ::v-deep .el-button--text {
    font-size: 20px;
  }

  .search ::v-deep .el-input__inner {
    width: 380px;
    height: 58px;
    padding: 0 5px;
    font-size: 18px;
  }

  .search ::v-deep .el-button--primary {
    width: 120px;
    height: 58px;
    color: #fff;
    font-size: 26px;
  }
</style>
