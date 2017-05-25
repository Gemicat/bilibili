<template>
  <div class="header" style="background-image: url('//i0.hdslb.com/bfs/archive/57c5ced363be9f08b4cacf1745e221d3bb99d7c5.png');">
    <div class="header-layer" style="height: 170px;"></div>
    <a href="javascript:;" class="header-link" target="_blank" style="height: 170px;"></a>
    <div class="h-center">
      <a href="//www.bilibili.com/index.html" class="logo" style="background-image: url('//i0.hdslb.com/bfs/archive/58d322146cb4b1685a5775478b9753f96a0c2ff6.png');"></a>
    </div>
    <Num></Num>
  </div>
</template>

<script>
import Num from './Num.vue';

export default {
  components: {
    Num
  }
}
</script>

<style lang="stylus">
  .header
    background transparent no-repeat center -10px
    position relative
    margin -42px auto 0

    .header-layer
      position absolute
      top 0
      left 0
      width 100%
      z-index 10
    
    .header-link
      position absolute
      top 0
      left 0
      width 100%
      z-index 10
    
    .h-center
      width 980px
      margin 0 auto
      position relative
      height 170px
      transition .2s height
    
    .logo
      position absolute
      width 220px
      height 105px
      left 24px
      top 55px
      background transparent no-repeat left center
      z-index 100
</style>


