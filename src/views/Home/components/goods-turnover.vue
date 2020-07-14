<!--
 * 文件描述: 林权流转+风险提示
 * @author Lz on 2020-07-13
 -->
<template>
  <div class="container-goodsturnover">
    <!--林权流转-->
    <zd-card
      bold
      header-title="林权流转服务"
    >
      <el-table
        :data="tableData"
        :row-style="{fontSize:'20px',height:'60px'}"
        :header-cell-style="getTableHeaderColor"
      >
        <el-table-column
          prop="proNum"
          width="180"
          label="项目编号"
        >
        </el-table-column>
        <el-table-column
          prop="serviceType"
          label="服务类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="area"
          width="180"
          label="区域">
        </el-table-column>
        <el-table-column
          prop="status"
          width="180"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="registerTime"
          width="180"
          label="申请时间">
        </el-table-column>
        <el-table-column
          prop="acceptingUnit"
          width="180"
          label="受理单位">
        </el-table-column>
      </el-table>
    </zd-card>
    <!--风险提示-->
    <zd-card
      bold
      :style-obj="{width:'560px'}"
      header-title="风险提示"
    >
      <div class="container-warning">
        <ul class="container-warning__ul">
          <li class="container-warning__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a><span>2020-05-18</span></li>
          <li class="container-warning__li"><a href="">期货公司年度“大考”成绩出炉！AA级公司...</a><span>2020-05-18</span></li>
          <li class="container-warning__li"><a href="">石大胜华牵手中化泉州投建新能源材料项目</a><span>2020-05-18</span></li>
          <li class="container-warning__li"><a href="">十建浙江石化乙烯项目裂解气压缩机组试车成...</a><span>2020-05-18</span></li>
          <li class="container-warning__li"><a href="">鄂尔多斯盆地发现10亿吨级大油田</a><span>2020-05-18</span></li>
          <li class="container-warning__li"><a href="">期货公司年度“大考”成绩出炉！AA级公司...</a><span>2020-05-18</span></li>
          <li class="container-warning__li"><a href="">石大胜华牵手中化泉州投建新能源材料项目</a><span>2020-05-18</span></li>
        </ul>
      </div>
    </zd-card>
  </div>

</template>

<script>
  import ZdCard from '@/components/ZdCard'
  import tableHeaderStyle from '../mixin/table-header-style'

  export default {
    name: 'GoodsTurnover',
    components: { ZdCard },
    mixins: [tableHeaderStyle],
    data() {
      return {
        tableData: [{
          proNum: '58968574',
          serviceType: '类型一',
          area: '赣州章贡区',
          status: '状态一',
          registerTime: '05-18',
          acceptingUnit: '单位名称'
        },
          {
            proNum: '58968574',
            serviceType: '类型一',
            area: '赣州章贡区',
            status: '状态一',
            registerTime: '05-18',
            acceptingUnit: '单位名称'
          },
          {
            proNum: '58968574',
            serviceType: '类型一',
            area: '区域一',
            status: '状态一',
            registerTime: '05-18',
            acceptingUnit: '单位名称'
          },
          {
            proNum: '58968574',
            serviceType: '类型一',
            area: '区域一',
            status: '状态一',
            registerTime: '05-18',
            acceptingUnit: '单位名称'
          },
          {
            proNum: '58968574',
            serviceType: '类型一',
            area: '区域一',
            status: '状态一',
            registerTime: '05-18',
            acceptingUnit: '单位名称'
          },
          {
            proNum: '58968574',
            serviceType: '类型一',
            area: '区域一',
            status: '状态一',
            registerTime: '05-18',
            acceptingUnit: '单位名称'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .container-goodsturnover {
    @include container($wrap: nowrap);
    margin-top: 40px;
  }

  .container-warning__li {
    display: block;
    line-height: 64px;
    font-size: 20px;
    @include ellipsis();

    span {
      float: right;
      color: #999;
      font-size: 18px;
    }

    &::before {
      content: "";
      width: 6px;
      height: 6px;
      background-color: #398f16;
      float: left;
      margin: 30px 20px 0 0;
      border-radius: 6px;
    }
  }
</style>
