<template>
  <div class="num">
    <div class="menu-wrapper">
      <Search></Search>
      <NavMenu></NavMenu>
    </div>
  </div>
</template>

<script>
import Search from './Search.vue';
import NavMenu from './NavMenu.vue';

export default {
  
  components: {
    Search,
    NavMenu
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
