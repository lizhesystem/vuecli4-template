<!--
 * 文件描述: 政策法规 平台规则 经典案例
 * @author Lz on 2020-07-13
 -->
<template>
  <div class="container-rules">
    <zd-card
      class="container-rules__policy items"
      bold
      header-title="政策法规"
    >
      <div>
        <ul>
          <li class="container-rules__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">期货公司年度“大考”成绩出炉！AA级公司...</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">石大胜华牵手中化泉州投建新能源材料项目</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">十建浙江石化乙烯项目裂解气压缩机组试车成...</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">期货公司年度“大考”成绩出炉！AA级公司...</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">石大胜华牵手中化泉州投建新能源材料项目</a><span>2020-05-18</span></li>
        </ul>
      </div>
    </zd-card>
    <zd-card
      class="container-rules__platform items"
      bold
      header-title="平台规则"
    >
      <div>
        <ul>
          <li class="container-rules__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">期货公司年度“大考”成绩出炉！AA级公司...</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">石大胜华牵手中化泉州投建新能源材料项目</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">十建浙江石化乙烯项目裂解气压缩机组试车成...</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">期货公司年度“大考”成绩出炉！AA级公司...</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">石大胜华牵手中化泉州投建新能源材料项目</a><span>2020-05-18</span></li>
        </ul>
      </div>    </zd-card>
    <zd-card
      class="container-rules__case items"
      bold
      header-title="经典案例"
    >
      <div>
        <ul>
          <li class="container-rules__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">期货公司年度“大考”成绩出炉！AA级公司...</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">石大胜华牵手中化泉州投建新能源材料项目</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">十建浙江石化乙烯项目裂解气压缩机组试车成...</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">期货公司年度“大考”成绩出炉！AA级公司...</a><span>2020-05-18</span></li>
          <li class="container-rules__li"><a href="">石大胜华牵手中化泉州投建新能源材料项目</a><span>2020-05-18</span></li>
        </ul>
      </div>
    </zd-card>
  </div>
</template>

<script>
  import ZdCard from '@/components/ZdCard'

  export default {
    name: 'TradeRules',
    components: { ZdCard },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.container-rules {
  @include container($wrap: nowrap);
}

.items {
  width: 555px;

  &:last-child li::before {
    float: left;
    width: 6px;
    height: 6px;
    margin: 30px 20px 0 0;
    border-radius: 6px;
    background-color: #398f16;
    content: "";
  }
}

.container-rules__li {
  display: block;
  font-size: 20px;
  line-height: 64px;

  @include ellipsis();

  span {
    float: right;
    color: #999;
    font-size: 18px;
  }
}
</style>
