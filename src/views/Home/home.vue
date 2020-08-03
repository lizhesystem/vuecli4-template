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
        <div class="container-first__notice" v-loading="noticeLoadingStatus">
          <ul class="item">
            <li v-for="item in noticeNewsList" :key="item.id" @click="getArticleDetail(item)" class="item__notice">
              <a href="javascript:void(0)">{{ item.title }}</a></li>
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
    <div class="container-landscape" v-loading="midAdvStatus">
      <div v-for="item in midAdv" :key="item.id" class="container-landscape__img">
        <img :src="item.picurl" alt="">
      </div>
    </div>
    <!--图片广告end-->
    <!--权益项目start-->
    <vue-lazy-component @init="getDom">
      <right-project/>
    </vue-lazy-component>
    <!--权益项目end-->
    <!--private项目 临权资源start-->
    <private-project/>
    <!--private项目 临权资源end-->
    <!--中间横屏广告1start-->
    <div class="container-midadv" v-loading="advBigStatus">
      <div class="ad4"><img :src="advBig1" alt=""></div>
    </div>

    <!--中间横屏广告end-->

    <!--金融服务区start-->
    <financial-service/>
    <!--金融服务区end-->

    <!--中间横屏广告2start-->
    <div class="container-midadv" v-loading="advBigStatus">
      <div class="ad4"><img :src="advBig2" alt=""></div>
    </div>
    <!--中间横屏广告end-->

    <!--大宗交易start-->
    <block-trade/>
    <!--大宗交易end-->
    <!--商品交易start-->
    <goods-trade/>
    <!--商品交易end-->

    <!--林权交易start-->
    <goods-turnover/>
    <!--林权交易end-->
    <!--中间横屏广告3start-->
    <div class="container-midadv" v-loading="advBigStatus">
      <div class="ad4"><img :src="advBig3" alt=""></div>
    </div>
    <!--中间横屏广告end-->
    <!--行情指数start-->
    <market-trade/>
    <!--行情指数end-->
    <!--新闻资讯-->
    <trade-news/>
    <!--政策交易规则-->
    <trade-rules/>

    <!--中间横屏广告4start-->
    <div class="container-midadv" v-loading="advBigStatus">
      <div class="ad4"><img :src="advBig4" alt=""></div>
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
  import store from '@/store'
  import { getList } from 'Api/article'
  import { mapGetters } from 'vuex'

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
        count: 14,
        noticeNewsList: [], // 通知公告
        noticeLoadingStatus: false,
        riskNewsList: [], // 风险提示
        riskLoadingStatus: false,
        analysisNewsList: [], // 市场分析
        informationNews: [], // 行业资讯
        policiesNews: [], // 政策法规
        ruleNewsList: [], // 平台规则
        caseNewsList: [], // 经典案例
        midAdv: [], // 中间三个新人专享
        midAdvStatus: false,
        advBig: [],
        advBig1: '', // 四个横幅广告
        advBig2: '',
        advBig3: '',
        advBig4: '',
        advBigStatus: false,
        page: {
          current: 1,
          size: 10
        }
      }
    },
    computed: {
      ...mapGetters(['midAdvSmall', 'midAdvBig'])
    },
    created() {
      this.getNoticeList()
      this.getAdvertising()
      this.getBigAdvertising()
    },
    mounted() {

    },
    methods: {
      getDom() {
        console.log('111111111111')
      },
      // 获取通知公告 2
      async getNoticeList() {
        this.noticleLoadingStatus = true
        const { data: res } = await getList(this.page.current, this.page.size, { newsItemId: 2 })
        this.noticleLoadingStatus = false
        this.noticeNewsList = res.data.records
      },
      // 获取风险提示 3
      async getRiskList() {
        this.riskLoadingStatus = true
        const { data: res } = await getList(this.page.current, this.page.size, { newsItemId: 3 })
        this.riskLoadingStatus = false
        this.riskNewsList = res.data.records
      },
      // 获取市场分析 4
      getAnalysisList() {
        if (this.analysisList.length === 0) {
          store.dispatch('getNewsInfo',
            {
              current: this.page.current,
              page: this.page.size,
              newsItemId: 4,
              key: 'analysis'
            }).then(res => {
            this.analysisNewsList = res
          })
        } else {
          this.analysisNewsList = this.analysisList
        }
      },
      // 行业资讯 5
      getInformation() {
        if (this.information.length === 0) {
          store.dispatch('getNewsInfo',
            {
              current: this.page.current,
              page: this.page.size,
              newsItemId: 5,
              key: 'information'
            }).then(res => {
            this.informationNews = res
          })
        } else {
          this.informationNews = this.information
        }
      },
      // 政策法规 6
      getPolicies() {
        if (this.policies.length === 0) {
          store.dispatch('getNewsInfo',
            {
              current: this.page.current,
              page: this.page.size,
              newsItemId: 6,
              key: 'policies'
            }).then(res => {
            this.policiesNews = res
          })
        } else {
          this.policiesNews = this.policies
        }
      },
      // 平台规则 7
      getRuleList() {
        if (this.ruleList.length === 0) {
          store.dispatch('getNewsInfo',
            {
              current: this.page.current,
              page: this.page.size,
              newsItemId: 7,
              key: 'rule'
            }).then(res => {
            this.ruleNewsList = res
          })
        } else {
          this.ruleNewsList = this.ruleList
        }
      },
      // 经典案例 8
      getCaseList() {
        if (this.caseList.length === 0) {
          store.dispatch('getNewsInfo',
            {
              current: this.page.current,
              page: this.page.size,
              newsItemId: 7,
              key: 'case'
            }).then(res => {
            this.caseNewsList = res
          })
        } else {
          this.caseNewsList = this.caseList
        }
      },
      // 3个新人专享 取缓存
      getAdvertising() {
        if (this.midAdvSmall.length === 0) {
          this.midAdvStatus = true
          store.dispatch('getMidAdvSmall').then(data => {
            this.midAdv = data
          })
          this.midAdvStatus = false
        } else {
          this.midAdv = this.midAdvSmall
        }
      },
      // 4个横屏广告 取缓存
      getBigAdvertising() {
        if (this.midAdvBig.length === 0) {
          this.advBigStatus = true
          store.dispatch('getBigAdvertising').then(data => {
            this.advBig = data
            this.advBig1 = this.advBig[0].picurl
            this.advBig2 = this.advBig[1].picurl
            this.advBig3 = this.advBig[2].picurl
            this.advBig4 = this.advBig[3].picurl
          })
          this.advBigStatus = false
        } else {
          this.advBig1 = this.midAdvBig[0].picurl
          this.advBig2 = this.midAdvBig[1].picurl
          this.advBig3 = this.midAdvBig[2].picurl
          this.advBig4 = this.midAdvBig[3].picurl
        }
      },
      // 社会服务机构切换
      handleClick() {
      },
      // 文章详情跳转
      getArticleDetail(item) {
        this.$router.push({ path: `/article/${item.id}` })
      },
      getMoreNotice() {
        this.$router.push({
          path: 'articlelist',
          query: { newstype: 2 }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*第一行*/
  .container-first {
    @include container($wrap: nowrap);
  }

  .container-first__notice {
    box-sizing: border-box;
    padding: 20px;
    height: 366px;
    overflow: hidden;
    border: 1px #dddcdd solid;

    .item__notice {
      font-size: 21px;
      line-height: 56px;

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
    height: 228px;

    &__img {
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  /*服务机构*/
  .container-organization {
    display: flex;
    justify-content: space-between;
    height: 342px;
    margin: 30px auto;
    padding: 0 40px;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 342px;
      padding: 0 15px;
      color: #333;
      font-weight: bold;
      font-size: 36px;
      line-height: 36px;
      text-align: center;
    }

    .container-organization__page {
      width: calc(100% - 90px);
      border: 1px #dddcdd solid;

      .con {
        flex-wrap: wrap;
        position: relative;

        &::after {
          width: 100%;
          height: 1px;
          position: absolute;
          left: 0;
          background-color: #ddd;
          content: " ";
        }

        span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 242px;
          height: 114px;
          padding: 10px;
          font-size: 22px;
        }
      }
    }

    /*el-tabs样式覆盖*/
    .container-organization__page ::v-deep .gf-icon {
      margin-right: 7px;
      vertical-align: sub;
    }

    .container-organization__page ::v-deep .el-tabs__active-bar {
      height: 4px;
      left: 4px;
    }

    .container-organization__page ::v-deep .el-tabs__item {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 188px;
      height: 80px;
      padding: 10px;
      font-weight: bold;
      font-size: 24px;
    }
  }
</style>
