<!--
 * 文件描述: 交易所资讯\行业资讯
 * @author Lz on 2020-07-13
 -->
<template>
  <div class="container-news">
    <!--交易所资讯-->
    <zd-card
      class="container-news__trade"
      bold
      header-title="交易所资讯"
      :before-title="false"
    >
      <div class="con">
        <div class="pic">
          <a href=""><img src="../../../assets/images/newbigpic.png" alt=""></a>
        </div>
        <h1><a href="">农村创业好项目，这些机会千万不要错过</a></h1>
        <p>
          <a href="">近几年，国家在推动乡村振兴发展，带动了一批新兴产业。
            因此为大家推荐2020农村创业好项目，这些项目极具...</a>
        </p>
      </div>
      <div class="conn">
        <ul>
          <li>
            <div class="picture"><img src="../../../assets/images/news1.png" alt=""></div>
            <h1><a href="">农村创业好项目，这些机会千...</a></h1>
            <p><a href="">近几年，国家在推动乡村振兴发展，带
              动了一批新兴产业。因此为大家推荐...</a></p>
          </li>
          <li>
            <div class="picture"><img src="../../../assets/images/news2.png" alt=""></div>
            <h1><a href="">农村创业好项目，这些机会千...</a></h1>
            <p><a href="">近几年，国家在推动乡村振兴发展，带
              动了一批新兴产业。因此为大家推荐...</a></p>
          </li>
          <li>
            <div class="picture"><img src="../../../assets/images/news3.png" alt=""></div>
            <h1><a href="">农村创业好项目，这些机会千...</a></h1>
            <p><a href="">近几年，国家在推动乡村振兴发展，带
              动了一批新兴产业。因此为大家推荐...</a></p>
          </li>
        </ul>
      </div>
    </zd-card>
    <!--行业资讯-->
    <zd-card
      class="container-news__industry"
      bold
      header-title="行业资讯"
      :before-title="false"
    >
      <div class="con">
        <div class="pic">
          <img src="../../../assets/images/news.png" alt="">
          <p><a href="">120亿欧元，中国化学中标全球最大乙烯一体化项目</a></p>
        </div>
        <ul>
          <li class="container-news__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a></li>
          <li class="container-news__li"><a href="">期货公司年度“大考”成绩出炉！AA级公司减5家</a></li>
          <li class="container-news__li"><a href="">石大胜华牵手中化泉州投建新能源材料项目</a></li>
          <li class="container-news__li"><a href="">十建浙江石化乙烯项目裂解气压缩机组试车成功</a></li>
          <li class="container-news__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a></li>
        </ul>
      </div>
    </zd-card>
  </div>
</template>

<script>
  import ZdCard from '@/components/ZdCard'

  export default {
    name: 'TradeNews',
    components: { ZdCard },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.container-news{
  @include container($wrap: nowrap);
}

  .container-news__trade{
    width: 1185px;
    .con{
      width: 547px;
      float: left;
      .pic{
        width: 547px;
        height: 456px;
        overflow: hidden;
      }
      h1{
        font-size: 24px;
        color: #333;
        line-height: 40px;
      }
      p{
        font-size: 20px;
        color: #999;
        line-height: 21px;
      }
    }
    .conn{
      float: right;
      width: 610px;
      li{
        display: block;
        height: 168px;
        margin-bottom: 40px;
        .picture{
          width: 201px;
          float: left;
          margin-right: 30px;
        }
        h1{
          font-size: 24px;
          padding-bottom: 20px;
        }
        p{
          font-size: 20px;
          line-height: 30px;
        }
      }
    }
  }

  .container-news__industry{
    width: 580px;
    .pic{
      width: 580px;
      height: 354px;
      position: relative;
      p{
        display: block;
        width: 580px;
        height: 45px;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        font-size: 20px;
        color: #fff;
        line-height: 45px;
        bottom: 0;
        left: 0;
        text-align: center;
        a{
          color: #fff;
        }
      }
    }
  }
  .container-news__li{
    font-size: 20px;
    line-height: 45px;
    :before{
      content: "";
      width: 6px;
      height: 6px;
      background-color: #398f16;
      float: left;
      margin: 20px 20px 0 0;
      border-radius: 6px;
    }
  }
</style>
