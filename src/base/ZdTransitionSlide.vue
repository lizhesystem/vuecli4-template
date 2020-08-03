<template>
  <transition
    :name="transitionName"
    mode="out-in"
  >
    <slot/>
  </transition>
</template>

<script>
  /**
   * * 路由动画组件
   */
  export default {
    name: 'ZdTransitionSlide',
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      $route(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
      }
    }
  }
</script>

<style scoped>
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 0.1s, opacity 0.1s;
    will-change: transform, opacity;
  }

  .slide-left-enter,
  .slide-right-leave-to {
    opacity: 0;
    -webkit-transform: translate(10px, 0);
    transform: translate(10px, 0);
  }

  .slide-right-enter,
  .slide-left-leave-to {
    opacity: 0;
    -webkit-transform: translate(-10px, 0);
    transform: translate(-10px, 0);
  }
</style>
