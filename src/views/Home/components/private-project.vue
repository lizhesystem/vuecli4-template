<!--
 * 文件描述: 非共权益项目
 * @author Lz on 2020-07-13
 -->
<template>
  <!--private项目 临权资源-->
  <div class="container-privateproject">
    <!--非共权益项目-->
    <zd-card
      header-title="非共权益项目"
      :more-info="false"
    >
      <el-table
        :data="tableData"
        :row-style="{fontSize:'20px',height:'60px'}"
        :header-cell-style="getTableHeaderColor"
      >
        <el-table-column
          prop="proName"
          width="155"
          label="项目名称"
        >
        </el-table-column>
        <el-table-column
          prop="position"
          label="坐落乡村组"
          width="155">
        </el-table-column>
        <el-table-column
          prop="variety"
          width="130"
          label="品种">
        </el-table-column>
        <el-table-column
          prop="area"
          width="155"
          label="面积">
        </el-table-column>
        <el-table-column
          prop="price"
          width="155"
          label="挂牌价格">
        </el-table-column>
        <el-table-column
          prop="time"
          width="150"
          label="挂牌时间">
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
      header-title="林权公共资源项目"
    >
      <el-table
        :data="tableData"
        :row-style="{fontSize:'20px',height:'60px'}"
        :header-cell-style="getTableHeaderColor"
      >
        <el-table-column
          prop="proName"
          width="155"
          label="项目名称"
        >
        </el-table-column>
        <el-table-column
          prop="position"
          label="面积"
          width="180">
        </el-table-column>
        <el-table-column
          prop="price"
          width="155"
          label="挂牌价格">
        </el-table-column>
        <el-table-column
          prop="time"
          width="150"
          label="交易时间">
        </el-table-column>
        <el-table-column
          prop="status"
          width="100"
          label="状态">
        </el-table-column>
      </el-table>
    </zd-card>
  </div>
</template>

<script>
  import ZdCard from '@/components/ZdCard'
  import tableHeaderStyle from '../mixin/table-header-style'

  export default {
    name: 'PrivateProject',
    components: { ZdCard },
    mixins: [tableHeaderStyle],
    data() {
      return {
        tableData: [{
          proName: '果园转让',
          position: '赣州章贡区',
          variety: '品种一',
          area: '4300亩',
          price: '80万元',
          time: '05-18',
          status: '已成交'
        }, {
          proName: '果园转让',
          position: '赣州章贡区',
          variety: '品种一',
          area: '4300亩',
          price: '80万元',
          time: '05-18',
          status: '已成交'
        }, {
          proName: '果园转让',
          position: '赣州章贡区',
          variety: '品种一',
          area: '4300亩',
          price: '80万元',
          time: '05-18',
          status: '已成交'
        }, {
          proName: '果园转让',
          position: '赣州章贡区',
          variety: '品种一',
          area: '4300亩',
          price: '80万元',
          time: '05-18',
          status: '已成交'
        },
          {
            proName: '果园转让',
            position: '赣州章贡区',
            variety: '品种一',
            area: '4300亩',
            price: '80万元',
            time: '05-18',
            status: '已成交'
          },
          {
            proName: '果园转让',
            position: '赣州章贡区',
            variety: '品种一',
            area: '4300亩',
            price: '80万元',
            time: '05-18',
            status: '已成交'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  /*非公权益项目*/
  .container-privateproject {
    @include container($wrap: nowrap)
  }
</style>
