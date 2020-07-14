<!--
 * 文件描述: 文章/资讯列表
 * @author Lz on 2020-07-14
 -->
<template>
  <div class="container-articlelist">
    <!--面包屑-->
    <el-breadcrumb class="container-articlelist__nav" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>交易所资讯</el-breadcrumb-item>
    </el-breadcrumb>
    <!--中间横屏广告2start-->
    <div class="container-midadv">
      <div class="ad4"><img src="../../assets/images/ad5.png" alt=""></div>
    </div>
    <!--中间横屏广告end-->
    <div class="container-articlelist__list">
      <!--列表右侧start-->
      <div class="news-left">
        <div class="title">交易所资讯</div>
        <div class="con">
          <ul>
            <li class="news-right__li" v-for="(i,index) in count" :key="index">
              <h1><a href="">聚焦煤电企业需求 动力煤期现业务线上培训获好评</a></h1>
              <span>2020-04-20</span>
              <p>
                <a href="">近日，“煤电企业期现结合业务线上培训班”第5期顺利结束，该培训班由郑州商品交易所、中国煤炭运销协会、
                  中国煤炭市场网联合举办，主要针对煤电企业需求，引导企业学习了解期现策略，推广企业利用动力煤期货开展风险管理和基差贸易等期现业务的经验。</a>
              </p>
            </li>
          </ul>
          <div class="news-left__page">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[10,20,30,50]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="100">
            </el-pagination>
          </div>

        </div>
      </div>
      <!--列表右侧end-->
      <!--列表左侧start-->
      <div class="news-right">
        <zd-card
          bold
          header-title="热点资讯"
          :before-title="false"
          :more-info="false"
        >
          <div class="news-right__list">
            <div class="pic">
              <a href=""><img src="../../assets/images/bg_578x355.png" alt=""></a>
            </div>
            <ul>
              <li>
                <a href="">千万别小瞧这一风险 油价或被困35—45美元/桶区间</a>
              </li>
              <li><a href="">
                黑马诞生！这一金属突然被一致看好
              </a></li>
              <li><a href="">
                国开行携手中证指数联合发布“中证7—10年国开债流动性指数”
              </a></li>
              <li>
                <a href="">千万别小瞧这一风险 油价或被困35—45美元/桶区间</a>
              </li>
              <li><a href="">
                黑马诞生！这一金属突然被一致看好
              </a></li>
              <li><a href="">
                国开行携手中证指数联合发布“中证7—10年国开债流动性指数”
              </a></li>
            </ul>
          </div>
        </zd-card>
      </div>
      <!--列表左侧end-->
    </div>
  </div>
</template>

<script>
  import ZdCard from '@/components/ZdCard'

  export default {
    name: 'ArticleList',
    components: { ZdCard },
    data() {
      return {
        count: 10,
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container-articlelist__nav {
    padding: 0 40px;
    margin: 20px 0;
  }

  .container-articlelist__list {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
  }

  /*左侧新闻列表*/
  .news-left {
    width: calc(100% - 620px);

    .title {
      margin: 20px auto;
      color: #333333;
      font-size: 36px;
      font-weight: bold;
      height: 50px;
    }
  }

  .news-right__li {
    font-size: 24px;
    border-bottom: 1px #ccc solid;
    padding: 30px 0;

    h1 {
      font-size: 24px;
      font-weight: bold;
      color: #333333;

      a:hover {
        color: $a-hover-color;
      }
    }

    span {
      font-size: 16px;
      color: #333333;
    }

    p {
      height: 60px;
      font-size: 16px;
      color: #999999;
      line-height: 30px;
      @include ellipsis($line: 2)
    }
  }

  .news-left__page {
    margin: 30px 0;
  }

  /*右侧新闻列表*/
  .news-right {
    width: 580px;
  }
  .news-right__list{
    .pic{
      width: 580px;
      height: 355px;
    }
    li{
      display: block;
      width: 520px;
      height: 60px;
      font-size: 20px;
      color: #333333;
      line-height: 60px;
      text-overflow: ellipsis;
      overflow: hidden;
      &:before{
        content: "";
        width: 6px;
        height: 6px;
        background-color: #398f16;
        float: left;
        margin: 30px 20px 0 0;
        border-radius: 6px;
      }
      a:hover{
        color: $a-hover-color;
      }
    }
  }
</style>
