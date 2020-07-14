<!--
 * 文件描述: 卡片
 * @author Lz on 2020-07-10

 * 组件使用方式：
       <zd-card
       :style-obj="{padding:'0 40px'}"
        bold
        headerTitle="通知通告"
        :before-title="true"
        :more-info="true"
      >
        <template v-slot:subtitle>
          ..副标题内容
        </template>
        <template v-slot:newsFocus>
          ..焦点新闻
        </template>
        <div>新闻列表...<div>
      </zd-card>
 -->
<template>
  <div class="zd-card" :style="styleObj">
    <div class="zd-card__header">
      <span class="zd-card__tip" v-if="beforeTitle"></span>
      <div :class="['zd-card__title',fontSize ? 'zd-card__title--' + fontSize : '']">{{ headerTitle }}
      </div>
      <slot name="subtitle"></slot>
      <span @click="getMore" class="zd_card__more" v-if="moreInfo">更多>></span>
    </div>
    <div class="zd-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ZdCard',
    props: {
      // 卡片宽度
      styleObj: {
        type: Object,
        default: () => {
        }
      },
      // 标题左侧装饰是否展示
      beforeTitle: {
        type: Boolean,
        default: true
      },
      // 标题
      headerTitle: {
        type: String,
        default: ''
      },
      // 更多跳转
      moreInfo: {
        type: Boolean,
        default: true
      },
      // title字体大小
      bold: {
        type: Boolean,
        default: false
      }
    },
    components: {},
    computed: {
      fontSize() {
        return this.bold ? 'bold' : 'normal'
      }
    },
    methods: {
      getMore() {
        this.$emit('getMore')
      }
    }
  }
</script>

<style lang="scss" src="../sass/components-theme/news-card.scss"></style>
