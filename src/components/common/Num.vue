<template>
  <div class="num">
    <div class="menu-wrapper">
      <Search></Search>
    </div>
  </div>
</template>

<script>
import Search from './Search.vue';

export default {
  
  components: {
    Search
  }
}
</script>

<style lang="stylus">
  .header

    .num
      width 100%
      background #fff

      .menu-wrapper
        position relative
        width 980px
        margin 0 auto
        padding 6px 0
        z-index 100
</style>
