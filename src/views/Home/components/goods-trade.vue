<!--
 * 文件描述: 商品交易
 * @author Lz on 2020-07-13
 -->
<template>
  <zd-card
    class="container-goodstrade"
    header-title="商品交易"
    :before-title="false"
  >
    <div>
      <ul class="con">
        <li class="container-goodstrade__li" v-for="(i,index) in count" :key="index">
          <div class="pic">
            <a href=""><img src="../../../assets/images/pic1.png" alt=""></a>
          </div>
          <div class="txt">
            贵州脐橙子 地理标志产品
          </div>
          <div class="neirong">
            汇众实业
            <span>特优一级</span>
          </div>
          <div class="price">
            ￥5.00
          </div>
        </li>
      </ul>
    </div>
  </zd-card>
</template>

<script>
  import ZdCard from '@/components/ZdCard'

  export default {
    name: 'GoodsTrade',
    components: { ZdCard },
    data() {
      return {
        count: 5
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container-goodstrade {
    padding: 0 40px;
    min-width: $layout-content-min-width;
    .con {
      display: flex;
      justify-content: space-between;
    }
  }

  .container-goodstrade__li{
    display: block;
    width: 340px;
    height: 500px;
    border: 1px #dddcdd solid;
    .txt{
      font-size: 20px;
      color: #333;
      padding: 10px;
    }
    .neirong{
      font-size: 20px;
      color: #333;
      padding: 10px;
    }
    .price{
      font-size: 28px;
      color: #e91717;
      padding: 10px;
      font-weight: bold;
    }
  }
</style>
