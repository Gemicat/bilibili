<template>
  <div class="search">
    <form action="//search.bilibili.com/all" id="searchform" target="_blank">
      <input type="text" class="search-keyword" id="search-keyword" autocomplete="off" placeholder="蝙蝠侠竟被洗脑成为傀儡！">
      <button class="search-submit" type="submit"></button>
    </form>
    <a href="//www.bilibili.com/ranking" class="link-ranking">
      <span>排行榜</span>
    </a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus">
  .header .num

    .search
      position absolute
      top -56px
      right 0
      width 268px
      height 32px
      padding 2px 2px 2px 72px
      background-color rgba(0,0,0,0.12)
      border-radius 6px

      #searchform
        background-color rgba(255,255,255,0.88)
        display block
        height 32px
        border-radius 4px
        transition .2s background-color

        &:hover
          background-color #fff
      
      .search-keyword
        outline 0
        float left
        width 200px
        color #222
        font-size 12px
        overflow hidden
        height 32px
        line-height 32px
        padding 0 12px
        border 0
        box-shadow none
        background-color transparent

        &:focus
          outline-offset: -2px;
      
      button.search-submit
        display block
        position absolute
        right 0
        width 48px
        min-width 0
        cursor pointer
        height 32px
        background url(../../assets/images/icons.png) -653px -720px
        margin 0
        padding 0
        border 0

        &:hover
          background-position -718px -720px
      
      .link-ranking
        position absolute
        left 2px
        top 2px
        height 32px
        line-height 32px
        background-color #fff
        background-color rgba(255,255,255,0.88)
        border-radius 4px
        width 68px
        transition .2s background-color

        &:hover
            background-color #fff

        span
          font-size 12px
          padding-left 26px
          color #f25d8e
          display inline-block
          background url(../../assets/images/icons.png) -659px -655px no-repeat

</style>
