<!--
 * 文件描述: 申请服务组件
 * @author Lz on 2020/7/10
 -->
<template>
  <!--申请服务start-->
  <div class="apply-ser">
    <div class="title">
      申请服务
    </div>
    <div>
      <ul class="apply-ser__post">
        <li>
          <ZdSvgIcon size="60" name="fabu"/>
          <a href="">发布项目</a>
        </li>
        <li>
          <ZdSvgIcon size="55" name="shenqing"/>
          <a href="">申请贷款</a>
        </li>
        <li>
          <ZdSvgIcon size="55" name="gouwu"/>
          <a href="">商品交易</a>
        </li>
        <li>
          <ZdSvgIcon size="55" name="weituo"/>
          <a href="">委托中间</a>
        </li>
        <li>
          <ZdSvgIcon size="55" name="shenhe"/>
          <a href="">流转审核</a>
        </li>
      </ul>
    </div>
  </div>
  <!--申请服务end-->
</template>

<script>
  export default {
    name: 'RegisterService',
    components: {},
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .apply-ser {
    width: 350px;

    .title {
      font-weight: bold;
      font-size: $font-size-title-lg;
    }

    .apply-ser__post {
      margin-top: 20px;

      li {
        display: flex;
        align-items: center;
        margin: 35px auto;
        font-size: 26px;

        > a {
          padding-left: 40px;
          color: #333;
        }
      }
    }
  }
</style>
