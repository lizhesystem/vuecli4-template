<!--
 * 文件描述: 搜索权益项目
 * @author Lz on 2020/7/10
 -->
<template>
  <div class="search-quanyi">
    <div class="title">
      搜索权益项目
    </div>
    <div class="con">
      <div class="search-quanyi__area">
        <el-select v-model="value" placeholder="地区" style="width:120px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="类型" style="width:120px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="种类" style="width:120px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="品种" style="width:120px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="面积" style="width:120px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        &nbsp;&nbsp;
        <el-button type="warning" size="">
          开始搜索
        </el-button>
      </div>
      <div class="search-quanyi__quanyi-all">
        <div class="map">
          <div class="tit">
            地区
          </div>
          <div class="search-quanyi__city">
            <a href="">江西</a>
            <a href="">广东</a>
            <a href="">山东</a>
            <a href="">四川</a>
            <a href="">湖北</a>
            <a href="">江苏</a>
            <a href="">浙江</a>
            <a href="">河南</a>
            <a href="">河北</a>
            <a href="">湖南</a>
            <a href="">江西</a>
            <a href="">北京</a>
            <a href="">广西</a>
            <a href="">云南</a>
            <a href="">海南</a>
            <a href="">辽宁</a>
            <a href="">陕西</a>
            <a href="">重庆</a>
          </div>
          <div class="more">
            <a href="">更多地区</a>
          </div>
        </div>
        <div class="map">
          <div class="tit">
            类型
          </div>
          <div class="search-quanyi__brandtype">
            <a href="">用材林</a>
            <a href="">油茶林</a>
            <a href="">竹用林</a>
            <a href="">绿化苗</a>
            <a href="">香料林</a>
            <a href="">果木林</a>
            <a href="">药材林</a>
            <a href="">旅游资源</a>
            <a href="">农村住宅</a>
            <a href="">耕地</a>
            <a href="">水面</a>
            <a href="">宅基地</a>
          </div>
          <div class="more">
            <a href="">更多地区</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'SearchRight',
    components: {},
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }],
        value: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-quanyi {
    width: 930px;

    .title {
      font-size: $font-size-title-lg;
      font-weight: bold;
      height: 50px;
    }

    .con {
      margin-top: 20px;
      padding: 40px;
      border: 1px #dddcdd solid;
    }

    .search-quanyi__quanyi-all {
      display: flex;
      margin: 40px auto 0 auto;
      height: calc(406px - 80px);

      .map {
        margin-right: 50px;
        display: inline-block;

        .tit {
          font-size: 22px;
          color: #333;
          font-weight: bold;
          line-height: 60px;
        }
      }
    }

    .search-quanyi__city {
      flex-flow: wrap;
      position: relative;
      width: 380px;

      &:after {
        content: "";
        overflow: hidden;
        position: absolute;
        width: 2px;
        height: 250px;
        top: -47px;
        right: 0;
        background-color: #dddddd;
      }

      > a {
        display: inline-block;
        line-height: 2.5;
        color: $mainTextColor;
        width: 67px;
        font-size: 20px;

        &:hover {
          color: $a-hover-color;
        }
      }
    }

    .search-quanyi__brandtype {
      flex-flow: wrap;
      width: 300px;

      > a {
        display: inline-table;
        color: $mainTextColor;
        line-height: 2.5;
        width: 97px;
        font-size: 20px;

        &:hover {
          color: $a-hover-color;
        }
      }
    }

    .more {
      > a {
        color: $theme-color;
        line-height: 45px;
        font-size: 20px;
        display: inline-flex;
      }
    }
  }
</style>
