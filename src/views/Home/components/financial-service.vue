<!--
 * 文件描述: 金融服务区
 * @author Lz on 2020-07-13
 -->
<template>
  <!--金融服务区-->
  <div class="container-financial">
    <!--非共权益项目-->
    <zd-card
      bold
      header-title="金融服务区"
    >
      <template v-slot:subtitle>
        <div class="zd_card__more--font">
          <span>抵质押、</span>
          <span>项目贷款</span>
        </div>
      </template>
      <el-table
        :data="tableData"
        :row-style="{fontSize:'20px',height:'60px'}"
        :header-cell-style="getTableHeaderColor"
      >
        <el-table-column
          prop="proNum"
          width="155"
          label="项目编号"
        >
        </el-table-column>
        <el-table-column
          prop="loanType"
          label="贷款类型"
          width="155">
        </el-table-column>
        <el-table-column
          prop="quota"
          width="130"
          label="发放额度">
        </el-table-column>
        <el-table-column
          prop="loanBank"
          width="155"
          label="贷款银行">
        </el-table-column>
        <el-table-column
          prop="registerTime"
          width="155"
          label="申请时间">
        </el-table-column>
        <el-table-column
          prop="area"
          width="150"
          label="区域">
        </el-table-column>
        <el-table-column
          prop="status"
          width="100"
          label="状态">
        </el-table-column>
      </el-table>
    </zd-card>
    <!--林权公共资源项目-->
    <zd-card
      header-title="信用贷款"
    >
      <el-table
        :data="tableData"
        :row-style="{fontSize:'20px',height:'60px'}"
        :header-cell-style="getTableHeaderColor"
      >
        <el-table-column
          prop="lender"
          width="155"
          label="贷款人"
        >
        </el-table-column>
        <el-table-column
          prop="quota"
          label="额度"
          width="180">
        </el-table-column>
        <el-table-column
          prop="loanBank"
          width="155"
          label="贷款银行">
        </el-table-column>
        <el-table-column
          prop="creditTime"
          width="150"
          label="授信时间">
        </el-table-column>
        <el-table-column
          prop="area"
          width="100"
          label="区域">
        </el-table-column>
      </el-table>
    </zd-card>
  </div>
</template>

<script>
  import ZdCard from '@/components/ZdCard'
  import tableHeaderStyle from '../mixin/table-header-style'

  export default {
    name: 'FinancialService',
    components: { ZdCard },
    mixins: [tableHeaderStyle],
    data() {
      return {
        tableData: [{
          proNum: '58968574',
          loanType: '贷款类型一',
          quota: '80万元',
          loanBank: '中国银行',
          registerTime: '05-18',
          area: '区域一',
          status: '状态一',
          lender: '李建国',
          creditTime: '05-18'
        },
          {
            proNum: '58968574',
            loanType: '贷款类型一',
            quota: '80万元',
            loanBank: '中国银行',
            registerTime: '05-18',
            area: '区域一',
            status: '状态一',
            lender: '李建国',
            creditTime: '05-18'
          },
          {
            proNum: '58968574',
            loanType: '贷款类型一',
            quota: '80万元',
            loanBank: '中国银行',
            registerTime: '05-18',
            area: '区域一',
            status: '状态一',
            lender: '李建国',
            creditTime: '05-18'
          },
          {
            proNum: '58968574',
            loanType: '贷款类型一',
            quota: '80万元',
            loanBank: '中国银行',
            registerTime: '05-18',
            area: '区域一',
            status: '状态一',
            lender: '李建国',
            creditTime: '05-18'
          },
          {
            proNum: '58968574',
            loanType: '贷款类型一',
            quota: '80万元',
            loanBank: '中国银行',
            registerTime: '05-18',
            area: '区域一',
            status: '状态一',
            lender: '李建国',
            creditTime: '05-18'
          },
          {
            proNum: '58968574',
            loanType: '贷款类型一',
            quota: '80万元',
            loanBank: '中国银行',
            registerTime: '05-18',
            area: '区域一',
            status: '状态一',
            lender: '李建国',
            creditTime: '05-18'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .container-financial {
    @include container($wrap: nowrap)
  }

  .zd_card__more--font {
    span:first-child {
      margin-left: 10px;
    }
  }
</style>
