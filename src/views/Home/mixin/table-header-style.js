// el-table首行标题样式的mixin,
// 由于不涉及到业务逻辑，单独抽离出来。
export default {
  methods: {
    getTableHeaderColor({ rowIndex }) {
      if (rowIndex === 0) {
        return {
          background: '#25cb5b',
          color: '#fff',
          fontSize: '20px',
          fontWeight: 'normal',
          height: '60px'
        }
      }
    }
  }
}
