<!--
 * 文件描述: 主页
 * @author Lz on 2020-07-09
 -->
<template>
  <div>
    <!--首页tab第一行-->
    <div class="container-first">
      <!--申请服务start-->
      <register-service/>
      <!--申请服务end-->
      <!--搜索权益项目start-->
      <search-right/>
      <!--搜索权益项目end-->
      <!--通知通告start-->
      <zd-card
        @getMore="getMoreNotice()"
        :style-obj="{width:'480px'}"
        bold
        headerTitle="通知通告"
        :before-title="true"
        :more-info="true"
      >
        <div class="container-first__notice">
          <ul class="item">
            <li @click="getArticleDetail" class="item__notice"><a href="javascript:void(0)">中信期货:走出泥沼不易
              橡胶底部抬高可期橡胶底部抬高可期</a></li>
            <li class="item__notice"><a href="javascript:void(0)">从橡胶种子到割胶的流程图</a></li>
            <li class="item__notice"><a href="javascript:void(0)">普利司通常州公司软管项目通过验收</a></li>
            <li class="item__notice"><a href="javascript:void(0)">通用股份双喜临门，中泰两厂相继投产</a></li>
            <li class="item__notice"><a href="javascript:void(0)">中信期货:走出泥沼不易 橡胶底部抬高可期</a></li>
            <li class="item__notice"><a href="javascript:void(0)">从橡胶种子到割胶的流程图</a></li>
          </ul>
        </div>
        <div class="container-first__suggestpic">
          <img src="../../assets/images/bgzxdy.png" alt="">
          <img src="../../assets/images/bgtsjb.png" alt="">
        </div>
      </zd-card>
      <!--通知通告end-->
    </div>
    <!--第二行-->
    <!--图片广告start-->
    <div class="container-landscape">
      <div class="container-landscape__img"><img src="../../assets/images/ad1.png" alt=""></div>
      <div class="container-landscape__img"><img src="../../assets/images/ad2.png" alt=""></div>
      <div class="container-landscape__img"><img src="../../assets/images/ad3.png" alt=""></div>
    </div>
    <!--图片广告end-->
    <!--权益项目start-->
    <right-project/>
    <!--权益项目end-->
    <!--private项目 临权资源start-->
    <private-project/>
    <!--private项目 临权资源end-->
    <!--中间横屏广告1start-->
    <div class="container-midadv">
      <div class="ad4"><img src="../../assets/images/ad4.png" alt=""></div>
    </div>
    <!--中间横屏广告end-->

    <!--金融服务区start-->
    <financial-service/>
    <!--金融服务区end-->
    <!--中间横屏广告2start-->
    <div class="container-midadv">
      <div class="ad4"><img src="../../assets/images/ad5.png" alt=""></div>
    </div>
    <!--中间横屏广告end-->
    <!--大宗交易start-->
    <block-trade/>
    <!--大宗交易end-->
    <!--商品交易start-->
    <goods-trade/>
    <!--商品交易end-->
    <goods-turnover/>

    <!--中间横屏广告2start-->
    <div class="container-midadv">
      <div class="ad4"><img src="../../assets/images/ad5.png" alt=""></div>
    </div>
    <!--中间横屏广告end-->
    <!--行情指数start-->
    <market-trade/>
    <!--行情指数end-->
    <!--新闻资讯-->
    <trade-news/>
    <!--政策交易规则-->
    <trade-rules/>

    <!--中间横屏广告2start-->
    <div class="container-midadv">
      <div class="ad4"><img src="../../assets/images/ad5.png" alt=""></div>
    </div>
    <!--中间横屏广告end-->

    <!--社会服务机构-->
    <div class="container-organization">
      <div class="title">
        社会化服务机构
      </div>
      <div class="container-organization__page">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="调查规划" name="1">
            <span slot="label"><zd-svg-icon size="38" name="fabu"></zd-svg-icon>调查规划</span>
            <div class="con">
              <span v-for="(i,index) in count" :key="index"><a href="">调查规划{{ i }}</a></span>
            </div>
          </el-tab-pane>
          <el-tab-pane label="资产评估" name="2">
            <span slot="label"><zd-svg-icon size="38" name="fabu"></zd-svg-icon>资产评估</span>
            <div class="con">
              <span v-for="(i,index) in count" :key="index"><a href="">资产评估{{ i }}</a></span>
            </div>
          </el-tab-pane>
          <el-tab-pane label="交易代理" name="3">
            <span slot="label"><zd-svg-icon size="38" name="fabu"></zd-svg-icon>交易代理</span>
            <div class="con">
              <span v-for="(i,index) in count" :key="index"><a href="">交易代理{{ i }}</a></span>
            </div>
          </el-tab-pane>
          <el-tab-pane label="融资担保" name="4">
            <span slot="label"><zd-svg-icon size="38" name="fabu"></zd-svg-icon>融资担保</span>
            <div class="con">
              <span v-for="(i,index) in count" :key="index"><a href="">融资担保{{ i }}</a></span>
            </div>
          </el-tab-pane>

          <el-tab-pane label="收储保证" name="5">
            <span slot="label"><zd-svg-icon size="38" name="fabu"></zd-svg-icon>收储保证</span>
            <div class="con">
              <span v-for="(i,index) in count" :key="index"><a href="">收储保证{{ i }}</a></span>
            </div>
          </el-tab-pane>

          <el-tab-pane label="检测机构" name="6">
            <span slot="label"><zd-svg-icon size="38" name="fabu"></zd-svg-icon>检测机构</span>
            <div class="con">
              <span v-for="(i,index) in count" :key="index"><a href="">检测机构{{ i }}</a></span>
            </div>
          </el-tab-pane>

          <el-tab-pane label="造林管护" name="7">
            <span slot="label"><zd-svg-icon size="38" name="fabu"></zd-svg-icon>造林管护</span>
            <div class="con">
              <span v-for="(i,index) in count" :key="index"><a href="">造林管护{{ i }}</a></span>
            </div>
          </el-tab-pane>

          <el-tab-pane label="病虫防治" name="8">
            <span slot="label"><zd-svg-icon size="38" name="fabu"></zd-svg-icon>病虫防治</span>
            <div class="con">
              <span v-for="(i,index) in count" :key="index"><a href="">病虫防治{{ i }}</a></span>
            </div>
          </el-tab-pane>

          <el-tab-pane label="种苗供应" name="9">
            <span slot="label"><zd-svg-icon size="38" name="fabu"></zd-svg-icon>种苗供应</span>
            <div class="con">
              <span v-for="(i,index) in count" :key="index"><a href="">种苗供应{{ i }}</a></span>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <!--合作银行start-->
    <div class="container-service">
      <div class="title">
        合作银行
      </div>
      <div class="con">
        <ul class="container-service__bank">
          <li><img src="../../assets/images/bank1.png" alt=""></li>
          <li><img src="../../assets/images/bank2.png" alt=""></li>
          <li><img src="../../assets/images/bank3.png" alt=""></li>
          <li><img src="../../assets/images/bank4.png" alt=""></li>
          <li><img src="../../assets/images/bank5.png" alt=""></li>
          <li><img src="../../assets/images/bank1.png" alt=""></li>
          <li><img src="../../assets/images/bank2.png" alt=""></li>
          <li><img src="../../assets/images/bank3.png" alt=""></li>
          <li><img src="../../assets/images/bank4.png" alt=""></li>
          <li><img src="../../assets/images/bank5.png" alt=""></li>
          <li><img src="../../assets/images/bank1.png" alt=""></li>
          <li><img src="../../assets/images/bank2.png" alt=""></li>
          <li><img src="../../assets/images/bank3.png" alt=""></li>
          <li><img src="../../assets/images/bank4.png" alt=""></li>
        </ul>
      </div>
    </div>
    <!--合作银行end-->
  </div>
</template>

<script>
  import ZdCard from '@/components/ZdCard'
  import RegisterService from '@/views/Home/components/register-service'
  import SearchRight from '@/views/Home/components/search-right'
  import RightProject from '@/views/Home/components/right-project'
  import PrivateProject from '@/views/Home/components/private-project'
  import FinancialService from '@/views/Home/components/financial-service'
  import BlockTrade from '@/views/Home/components/block-trade'
  import GoodsTrade from '@/views/Home/components/goods-trade'
  import GoodsTurnover from '@/views/Home/components/goods-turnover'
  import MarketTrade from '@/views/Home/components/market-trade'
  import TradeNews from '@/views/Home/components/trade-news'
  import TradeRules from '@/views/Home/components/trade-rules'
  import tableHeaderStyle from './mixin/table-header-style'

  export default {
    name: 'Home',
    components: {
      TradeRules,
      TradeNews,
      MarketTrade,
      GoodsTurnover,
      GoodsTrade,
      BlockTrade,
      FinancialService,
      PrivateProject,
      RightProject,
      SearchRight,
      RegisterService,
      ZdCard
    },
    mixins: [tableHeaderStyle],
    data() {
      return {
        activeName: '1',
        count: 14
      }
    },
    methods: {
      getMoreNotice() {
        this.$router.push('/articlelist')
      },
      getArticleDetail() {
        this.$router.push({ name: 'article', params: { id: 1 } })
      },
      handleClick() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  /*第一行*/
  .container-first {
    @include container();
  }

  .container-first__notice {
    box-sizing: border-box;
    padding: 20px;
    border: 1px #dddcdd solid;

    .item__notice {
      font-size: 21px;
      line-height: 54px;
      @include ellipsis();

      > a {
        color: #333;
      }
    }
  }

  .container-first__suggestpic {
    display: flex;
    justify-content: space-around;
    margin: 15px auto 0 auto;

    > img {
      width: 225px;
      height: 110px;
    }
  }

  /*第二行图片广告*/
  .container-landscape {
    @include container();

    &__img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 597px;
      height: 236px;

      > img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  /*服务机构*/
  .container-organization {
    padding: 0 40px;
    height: 342px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    .title {
      width: 60px;
      height: 342px;
      line-height: 36px;
      padding: 0 15px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      color: #333;
      font-size: 36px;
      font-weight: bold;
    }

    .container-organization__page {
      width: calc(100% - 90px);
      border: 1px #dddcdd solid;

      .con {
        flex-wrap: wrap;
        position: relative;

        &:after {
          content: " ";
          position: absolute;
          width: 100%;
          height: 1px;
          left: 0;
          background-color: #dddddd;
        }

        span {
          display: inline-flex;
          width: 242px;
          height: 114px;
          padding: 10px;
          font-size: 22px;
          justify-content: center;
          align-items: center;
        }
      }
    }

    /*el-tabs样式覆盖*/
    .container-organization__page ::v-deep .gf-icon {
      vertical-align: sub;
      margin-right: 7px;
    }

    .container-organization__page ::v-deep .el-tabs__active-bar {
      height: 4px;
      left: 4px;
    }

    .container-organization__page ::v-deep .el-tabs__item {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      height: 80px;
      width: 188px;
      font-size: 24px;
      font-weight: bold;
    }

  }

  /*合作银行*/
  .container-service {
    padding: 0 40px;
    margin: auto;
    height: 260px;
    display: flex;

    .title {
      width: 60px;
      height: 182px;
      padding: 0 15px;
      font-size: 36px;
      font-weight: bold;
      color: #333;
      text-align: center;
    }
  }

  .container-service__bank {
    display: flex;
    flex-wrap: wrap;

    li {
      height: 130px;
      width: calc(100% / 7);
      text-align: center;
    }
  }
</style>
