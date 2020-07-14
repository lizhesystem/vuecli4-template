<!--
 * 文件描述: 权益项目区
 * @author Lz on 2020-07-13
 -->
<template>
  <!--权益项目start-->
  <zd-card
    class="container-project"
    bold
    header-title="权益项目区"
  >
    <template v-slot:subtitle>
      <div class="zd_card__more--font">
        <span><a href="">用材林</a></span>
        <span><a href="">油茶林</a></span>
        <span><a href="">竹用林</a></span>
        <span><a href="">绿化苗</a></span>
        <span><a href="">果木林</a></span>
        <span><a href="">香料林</a></span>
        <span><a href="">药材林</a></span>
        <span><a href="">旅游资源</a></span>
        <span><a href="">农村住宅</a></span>
        <span><a href="">耕地</a></span>
        <span><a href="">水面</a></span>
        <span><a href="">宅基地</a></span>
      </div>
    </template>
    <div class="container-project__itempro">
      <ul class="container-project__ul">
        <li class="container-project__li" v-for="(i,index) in count " :key="index">
          <div class="pic"><a href=""><img src="@/assets/images/pro1.png" alt=""></a></div>
          <div class="txt"><a href="">转让-赣州章贡区2700亩果园</a></div>
          <div class="map">江苏/南京/六合区 <span>4300亩</span></div>
          <div class="kind">种类一 <span>品种二</span></div>
        </li>
      </ul>
    </div>
  </zd-card>
</template>

<script>
  import ZdCard from '@/components/ZdCard'

  export default {
    name: 'RightProject',
    components: { ZdCard },
    data() {
      return {
        count: 8
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*第三行权益项目*/
  .container-project {
    @include container($direction: column)
  }

  .container-project__ul {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    width: 100%;
  }

  .container-project__li {
    display: block;
    width: 432px;
    height: 515px;
    float: left;
    border: 1px #dddcdd solid;
    margin-bottom: 30px;

    a {
      color: #333;

      > img {
        width: 433px;
      }
    }

    .txt {
      font-size: 24px;
      color: #333;
      line-height: 60px;
      padding: 0 10px;
    }

    .map {
      padding: 0 10px;
      font-size: 20px;
      line-height: 60px;
    }

    .kind {
      padding: 0 10px;
      font-size: 20px;
      line-height: 60px;
    }
  }

  .zd_card__more--font span a {
    cursor: pointer;

    &:hover {
      color: $a-hover-color;
    }
  }
</style>
