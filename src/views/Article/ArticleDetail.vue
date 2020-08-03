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
          <h1>{{ article.title }}</h1>
        </div>
        <div class="post_time_source">
          {{ article.createTime }}
        </div>
        <div class="container-article__content">
          <p v-html="article.content"></p>
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
              <li v-for="item in articleList" :key="item.id" @click="switchArticle(item)">
                <a href="javascript:void(0)">{{ item.title }}</a>
              </li>
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
  import { getArticleById, getList } from 'Api/article'

  export default {
    name: 'ArticleDetail',
    components: { ZdCard },
    // article路由配置props:true后可直接接收路由后缀的id
    // eslint-disable-next-line vue/require-prop-types
    props: ['id'],
    data() {
      return {
        article: {},
        articleList: [],
        page: {
          current: 1,
          size: 6
        }
      }
    },
    created() {
      this.getArticleDetail()
    },
    methods: {
      // 根据id获取新闻,再根据文章id获取对应资讯
      getArticleDetail() {
        getArticleById(this.id).then(res => {
          const articleDetail = res.data.data
          this.article = articleDetail
          getList(this.page.current, this.page.size, { newsItemId: articleDetail.newsItemId }).then(res => {
            this.articleList = res.data.data.records
          })
        })
      },
      // 切换新闻
      switchArticle(item) {
        this.article = item
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container-article__nav {
    margin: 20px 0;
    padding: 0 40px;
  }

  .container-article__detail {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    margin-bottom: 50px;
  }

  /*左侧文章详情*/
  .container-article__detail__title {
    width: calc(100% - 620px);

    .title {
      @include ellipsis(1);
      text-align: center;
      height: 50px;
      margin: 20px auto;
      color: #333;
      font-weight: bold;
      font-size: 36px;

      h1 {
        font-weight: normal;
        font-size: 100%;
      }
    }

    .post_time_source {
      font-weight: 400;
      font-size: 16px;
      line-height: 10px;
      text-align: center;
    }
  }

  .container-article__content {
    padding: 20px;
    font-size: 18px;
    line-height: 30px;

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
      overflow: hidden;
      color: #333;
      font-size: 20px;
      line-height: 60px;
      text-overflow: ellipsis;

      &::before {
        float: left;
        width: 6px;
        height: 6px;
        margin: 30px 20px 0 0;
        border-radius: 6px;
        background-color: #398f16;
        content: "";
      }

      a:hover {
        color: $a-hover-color;
      }
    }
  }

  /*右侧新闻列表*/
</style>
