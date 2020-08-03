<!--
 * 文件描述: 大宗交易区
 * @author Lz on 2020-07-13
 -->
<template>
  <!--大宗交易区-->
  <div class="container-blocktrade">
    <!--非共权益项目-->
    <zd-card
      bold
      header-title="商品交易区"
    >
      <template v-slot:subtitle>
        <div class="zd_card__more--font">
          <span>大宗交易</span>
        </div>
      </template>
      <el-table
        :data="tableData"
        :row-style="{fontSize:'20px',height:'60px'}"
        :header-cell-style="getTableHeaderColor"
      >
        <el-table-column
          prop="productNumber"
          width="155"
          label="商品编号"
        >
        </el-table-column>
        <el-table-column
          prop="productName"
          label="商品名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="brand"
          width="150"
          label="品牌">
        </el-table-column>
        <el-table-column
          prop="specification"
          width="100"
          label="规格">
        </el-table-column>
        <el-table-column
          prop="closingPrice"
          width="100"
          label="收盘价">
        </el-table-column>
        <el-table-column
          prop="volume"
          width="100"
          label="成交量">
        </el-table-column>
        <el-table-column
          prop="date"
          width="100"
          label="日期">
        </el-table-column>
      </el-table>
    </zd-card>
    <!--林权公共资源项目-->
    <zd-card
      header-title="大宗交易"
    >
      <el-table
        :data="tableData"
        :row-style="{fontSize:'20px',height:'60px'}"
        :header-cell-style="getTableHeaderColor"
      >
        <el-table-column
          prop="productNumber"
          width="155"
          label="商品编号"
        >
        </el-table-column>
        <el-table-column
          prop="productName"
          label="商品名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="brand"
          width="150"
          label="品牌">
        </el-table-column>
        <el-table-column
          prop="specification"
          width="100"
          label="规格">
        </el-table-column>
        <el-table-column
          prop="closingPrice"
          width="100  "
          label="收盘价">
        </el-table-column>
        <el-table-column
          prop="volume"
          width="100"
          label="成交量">
        </el-table-column>
        <el-table-column
          prop="date"
          width="100"
          label="日期">
        </el-table-column>
      </el-table>
    </zd-card>
  </div>
</template>

<script>
  import ZdCard from '@/components/ZdCard'
  import tableHeaderStyle from '../mixin/table-header-style'

  export default {
    name: 'BlockTrade',
    components: { ZdCard },
    mixins: [tableHeaderStyle],
    data() {
      return {
        tableData: [{
          productNumber: '58968574',
          productName: '贵州脐橙',
          brand: '惠众实业',
          specification: '规格一',
          closingPrice: '5.00',
          volume: '800',
          date: '05-18'
        },
          {
            productNumber: '58968574',
            productName: '贵州脐橙',
            brand: '惠众实业',
            specification: '规格一',
            closingPrice: '5.00',
            volume: '800',
            date: '05-18'
          },
          {
            productNumber: '58968574',
            productName: '贵州脐橙',
            brand: '惠众实业',
            specification: '规格一',
            closingPrice: '5.00',
            volume: '800',
            date: '05-18'
          },
          {
            productNumber: '58968574',
            productName: '贵州脐橙',
            brand: '惠众实业',
            specification: '规格一',
            closingPrice: '5.00',
            volume: '800',
            date: '05-18'
          },
          {
            productNumber: '58968574',
            productName: '贵州脐橙',
            brand: '惠众实业',
            specification: '规格一',
            closingPrice: '5.00',
            volume: '800',
            date: '05-18'
          },
          {
            productNumber: '58968574',
            productName: '贵州脐橙',
            brand: '惠众实业',
            specification: '规格一',
            closingPrice: '5.00',
            volume: '800',
            date: '05-18'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .container-blocktrade {
    @include container($wrap: nowrap);
  }

  .zd_card__more--font {
    span:first-child {
      margin-left: 10px;
    }
  }
</style>
