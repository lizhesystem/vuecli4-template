<!--
 * 文件描述: 行情指数
 * @author Lz on 2020-07-13
 -->
<template>
  <div class="container-maket">
    <!--行情指数-->
    <zd-card
      class="container-maket__pic"
      header-title="权益指数 融资指数 商品指数"
    >
      <div class="con">
        <img src="../../../assets/images/bg_chart.png" alt="">
        <img src="../../../assets/images/bg_chart.png" alt="">
      </div>
    </zd-card>
    <!--市场分析-->
    <zd-card
      class="container-analysis"
      bold
      header-title="市场分析"
    >
      <div>
        <ul class="container-analysis__ul">
          <li class="container-analysis__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a></li>
          <li class="container-analysis__li"><a href="">期货公司年度“大考”成绩出炉！AA级公司减5家</a></li>
          <li class="container-analysis__li"><a href="">石大胜华牵手中化泉州投建新能源材料项目</a></li>
          <li class="container-analysis__li"><a href="">十建浙江石化乙烯项目裂解气压缩机组试车成功</a></li>
          <li class="container-analysis__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a></li>
          <li class="container-analysis__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a></li>
        </ul>
      </div>
    </zd-card>
  </div>
</template>

<script>
  import ZdCard from '@/components/ZdCard'

  export default {
    name: 'MarketTrade',
    components: { ZdCard },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .container-maket{
    @include container($wrap: nowrap);
  }
  .container-maket__pic{
    width: 1185px;
  }

  .container-analysis{
    width: 560px;
  }
  .container-analysis__li {
    display: block;
    line-height: 64px;
    font-size: 20px;
    @include ellipsis();

    &::before {
      content: "";
      width: 6px;
      height: 6px;
      background-color: #398f16;
      float: left;
      margin: 30px 20px 0 0;
      border-radius: 6px;
    }
    a{
      color: #333;
    }
  }
</style>
