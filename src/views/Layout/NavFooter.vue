<!--
 * 文件描述: 底部footer
 * @author Lz on 2020-07-09
 -->
<template>
  <div>

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

    <!--友情链接start-->
    <div class="container-link container">

      <div class="title">
        友情链接
      </div>
      <div class="con">
        <ul class="container-link__link">
          <li><a href="">友情链接企业1</a></li>
          <li><a href="">友情链接企业2</a></li>
          <li><a href="">友情链接企业3</a></li>
          <li><a href="">友情链接企业4</a></li>
          <li><a href="">友情链接企业5</a></li>
          <li><a href="">友情链接企业6</a></li>
          <li><a href="">友情链接企业7</a></li>
          <li><a href="">友情链接企业8</a></li>
          <li><a href="">友情链接企业9</a></li>
          <li><a href="">友情链接企业10</a></li>
          <li><a href="">友情链接企业11</a></li>
          <li><a href="">友情链接企业12</a></li>
          <li><a href="">友情链接企业13</a></li>
          <li><a href="">友情链接企业14</a></li>
        </ul>
      </div>
    </div>
    <!--友情链接end-->

    <!--footer-->
    <div class="container-footer">
      <p v-html="footerInfo.content"></p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import store from '@/store'

  export default {
    name: 'NavFooter',
    components: {},
    data() {
      return {
        footerInfo: '' // 底部footer信息
      }
    },
    computed: {
      ...mapGetters(['footer'])
    },
    created() {
      this.getFooterByCode()
    },
    methods: {
      // 如果为空,设置值到store,下次取去store里取。
      getFooterByCode() {
        if (Object.keys(this.footer).length === 0) {
          store.dispatch('getFooterInfo', 'footer').then(res => {
            this.footerInfo = res
          })
        } else {
          this.footerInfo = this.footer
        }
      },
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }

  }
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    height: 260px;
    margin: auto;
    padding: 0 40px;

    .title {
      width: 60px;
      height: 182px;
      padding: 0 15px;
      color: #333;
      font-weight: bold;
      font-size: 36px;
      text-align: center;
    }

    .con {
      width: calc(100% - 60px);
    }
  }

  /*合作银行*/
  .container-service {
    display: flex;
    height: 260px;
    margin: auto;
    padding: 0 40px;

    .title {
      width: 60px;
      height: 182px;
      padding: 0 15px;
      color: #333;
      font-weight: bold;
      font-size: 36px;
      text-align: center;
    }

    .con {
      width: calc(100% - 60px);
    }
  }

  .container-service__bank {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 250px;
      height: 130px;
      text-align: center;
    }
  }

  /*友情链接*/
  .container-link__link {
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 91px;

      a {
        color: #333;
        font-size: 20px;
        text-decoration: none;
      }
    }
  }

  /*底部*/
  .container-footer {
    padding: 30px 0;
    text-align: center;
    background-color: #f8f8f8;

    p {
      color: #949494;
      font-size: 18px;
      line-height: 40px;

      .ft36 {
        color: #25cb5b;
        font-size: 36px;
      }
    }
  }
</style>
