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

      <!--列表左侧start-->
      <div class="news-left" v-loading="articleListStatus">
        <div class="title">交易所资讯</div>
        <div class="con">
          <ul>
            <li class="news-right__li" v-for="(item,index) in articleList.records" :key="index">
              <h1 @click="getArticleDetail(item)">{{ item.title }}</h1>
              <span>2020-04-20</span>
              <p>
                <a v-html="item.content"></a>
              </p>
            </li>
          </ul>
          <div class="news-left__page">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page.current"
              :page-sizes="[10,20,30,50]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="articleList.total">
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
  import { getList } from '@/api/article'

  export default {
    name: 'ArticleList',
    components: { ZdCard },
    computed: {},
    data() {
      return {
        itemId: '', // 新闻id 根据id获取新闻列表
        articleList: {}, // 新闻列表对象
        articleListStatus: false, // 加载状态
        page: { // 分页数据
          current: 1,
          size: 10
        }
      }
    },
    created() {
      this.itemId = this.$route.query.newstype
      this.getNewsList()
    },
    methods: {
      async getNewsList() {
        this.articleListStatus = true
        const { data: res } = await getList(this.page.current, this.page.size, { newsItemId: this.itemId })
        this.articleListStatus = false
        this.articleList = res.data
        document.body.scrollTop = document.documentElement.scrollTop = 0
      },
      getArticleDetail(item) {
        this.$router.push({ path: `/article/${item.id}` })
      },
      handleSizeChange(val) {
        this.page.size = val
        this.getNewsList()
      },
      handleCurrentChange(val) {
        this.page.current = val
        this.getNewsList()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container-articlelist__nav {
    margin: 20px 0;
    padding: 0 40px;
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
      height: 50px;
      margin: 20px auto;
      color: #333;
      font-weight: bold;
      font-size: 36px;
    }
  }

  .news-right__li {
    padding: 30px 0;
    border-bottom: 1px #ccc solid;
    font-size: 24px;

    h1 {
      color: #333;
      font-weight: bold;
      font-size: 24px;
      cursor: pointer;

      &:hover {
        color: $a-hover-color;
      }
    }

    span {
      color: #333;
      font-size: 16px;
    }

    p {
      height: 60px;
      color: #999;
      font-size: 16px;
      line-height: 30px;

      @include ellipsis($line: 2);
    }
  }

  .news-left__page {
    margin: 30px 0;
  }

  /*右侧新闻列表*/
  .news-right {
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
</style>
