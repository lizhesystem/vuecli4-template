<!--
 * 文件描述: 底部footer
 * @author Lz on 2020-07-09
 -->
<template>
  <div>我是footer</div>
</template>

<script>
export default {
  name: 'NavFooter',
  components: {},
  data() {
    return {}
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
