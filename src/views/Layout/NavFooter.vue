<!--
 * 文件描述: 底部footer
 * @author Lz on 2020-07-09
 -->
<template>
  <div>
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
      <p>主办单位: <span class="ft36">南方林业产权交易所</span> 联系电话：<span class="ft36">400-888-888</span></p>
      <p>Copyright © 2013-2016 赣ICP备XXXXXXXXXXX号 地址：郑州市南xxxxxxxxxx13楼1306. XXXXXXXX交易中心有限公司版权所有</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavFooter',
    components: {},
    data() {
      return {

      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .container {
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

  /*友情链接*/
  .container-link__link {
    display: flex;
    flex-wrap: wrap;

    li {
      height: 91px;
      width: calc(100% / 7);
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        color: #333;
        font-size: 20px;
        text-decoration: none;
      }
    }

  }

  /*底部*/
  .container-footer {
    background-color: #f8f8f8;
    padding: 20px 0;
    text-align: center;

    p {
      font-size: 18px;
      color: #949494;
      line-height: 40px;

      .ft36 {
        font-size: 36px;
        color: #25cb5b;
      }
    }

  }
</style>
