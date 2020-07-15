<!--
 * 文件描述: 文章详情
 * @author Lz on 2020-07-14
 -->
<template>
  <div>
    <!--面包屑-->
    <el-breadcrumb class="container-article__nav" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>资讯详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!--中间横屏广告2start-->
    <div class="container-midadv">
      <div class="ad4"><img src="../../assets/images/ad5.png" alt=""></div>
    </div>
    <!--中间横屏广告end-->
    <!--资讯详情-->
    <div class="container-article__detail">
      <!--内容右侧start-->
      <div class="container-article__detail__title">
        <div class="title">
          <h1>“真正做到为官一任，造福一方”——习近平论夯实脱贫攻坚的人才支撑</h1>
          <div class="post_time_source">
            2020-06-27 13:31:49
            来源：求实网
          </div>
        </div>
        <div class="container-article__content">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;从生产大队党支部书记，到泱泱大国最高领导人，习近平总书记无时无刻不牵挂着贫困地区、贫困群众。正如总书记自己所说：“我先后在中国县、市、省、中央工作，扶贫始终是我工作的一个重要内容，我花的精力最多。”</p>
          <p>
            从总书记关于扶贫、脱贫的重要论述中，笔记君撷取了一些大家耳熟能详的经典话语，让我们一起感受深情、收获智慧、坚定信心、汲取力量，坚决全面打赢脱贫攻坚战。</p>

          <p>抓紧抓紧再抓紧、做实做实再做实</p>

          <p>各级领导干部一定要多到农村去，多到贫困地区去，了解真实情况，带着深厚感情做好扶贫开发工作，把扶贫开发工作抓紧抓紧再抓紧、做实做实再做实，真正使贫困地区群众不断得到真实惠。</p>

          <p>——2014年3月7日在参加十二届全国人大二次会议贵州代表团审议时的讲话</p>

          <p>心无旁骛、聚精会神</p>

          <p>党和国家要把抓好扶贫开发工作作为重大任务，贫困地区各级领导干部更要心无旁骛、聚精会神抓好这项工作，团结带领广大群众通过顽强奋斗早日改变面貌。“当官不为民作主，不如回家卖红薯。”说的就是这个道理。</p>
        </div>

      </div>
      <!--内容右侧end-->
      <!--列表左侧start-->
      <div class="container-article__detail__right">
        <zd-card
          bold
          :before-title="false"
          :more-info="false"
          header-title="热点资讯"
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
    name: 'ArticleDetail',
    components: { ZdCard },
    data() {
      return {}
    }
    // 进入路由前获取数据
    //  beforeRouteEnter(to, from, next) {
    //    console.log('get data')
    //    next()
    //  }
  }
</script>

<style lang="scss" scoped>
  .container-article__nav {
    padding: 0 40px;
    margin: 20px 0;
  }

  .container-article__detail {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
  }

  /*左侧文章详情*/
  .container-article__detail__title {
    width: calc(100% - 620px);

    .title {
      margin: 20px auto;
      color: #333333;
      font-size: 36px;
      font-weight: bold;
      height: 50px;

      h1 {
        font-size: 100%;
        font-weight: normal;
      }

      .post_time_source {
        line-height: 40px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
      }
    }
  }

  .container-article__content {
    padding: 20px;
    line-height: 30px;
    font-size: 18px;

    p {
      font-size: 18px;
      line-height: 40px;
      text-indent: 2em;
    }
  }

  /*右侧新闻*/
  .container-article__detail__right {
    width: 580px;
  }

  .news-right__list {
    .pic {
      width: 580px;
      height: 355px;
    }

    li {
      display: block;
      width: 520px;
      height: 60px;
      font-size: 20px;
      color: #333333;
      line-height: 60px;
      text-overflow: ellipsis;
      overflow: hidden;

      &:before {
        content: "";
        width: 6px;
        height: 6px;
        background-color: #398f16;
        float: left;
        margin: 30px 20px 0 0;
        border-radius: 6px;
      }

      a:hover {
        color: $a-hover-color;
      }
    }
  }

  /*右侧新闻列表*/
</style>
