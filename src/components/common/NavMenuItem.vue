<template>
  <li class="m-i" :class="classes">
    <a class="i-link" href="//www.bilibili.com/video/douga.html">
      <em>{{item.title}}</em>
      <div class="v-num" v-if="showNum">
        <span class="addnew_1">{{item.num}}</span>
      </div>
    </a>
    <ul class="i_num">
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      classes: {
        home: this.item.home,
        'm-i-square': this.item.sequare,
        'm-i-live': this.item.live,
        'm-i-blackroom': this.item.blackroom
      }
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    showNum() {
      if (this.item.home || this.item.sequare || this.item.live || this.item.blackroom) {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="stylus">
  .header .num

    ul.nav-menu
      zoom 1
      display inline-block
      vertical-align top
      height 50px

      &:after
        content ""
        display block
        visibility hidden
        height 0
        clear both
        font-size 0

    li.m-i
      float left
      position relative
      font-size 14px
      display block
      height 50px
      margin-right -1px

      &:hover .i_num
        display block

      a
        color #222
        display block

        &:hover
          color #00a1d6

      .i-link
        position relative
        z-index 10
        font-size 14px

        em
          padding-right 0
          padding-left 0
          margin 0
          line-height 50px
          display inline-block
          vertical-align middle
          line-height 48px
          margin 0 10px
          height 40px
          padding-top 8px
          font-style normal

      .v-num
        position absolute
        top 8px
        left 0
        height 14px
        width 100%
        text-align center

        span
          position static
          display inline-block
          vertical-align top
          top auto
          left auto
          margin-left 0
          background-color #ffafc9
          line-height 12px
      span
        position absolute
        top 0
        left 50%
        margin-left -12px
        color #fff
        border-radius 4px
        height 12px
        line-height 10px
        text-align center
        font-family Calibri,Arial,Helvetica,sans-serifsans-serif
        background-color #ffafc9
        font-size 11px
        min-width 18px
        padding 1px 3px

    li.m-i.m-i-square
      margin 0 16px 0 10px

      a.i-link
        margin 0

        em
          padding-left 22px
          padding-right 0
          padding-top 0
          height 50px
          margin 0!important
          font-size 16px
          background url('../../assets/images/icons.png') -664px -904px no-repeat

    li.m-i.m-i-live
      margin 0 16px 0 10px

      a.i-link
        margin 0

        em
          padding-left 22px
          padding-right 0
          padding-top 0
          height 50px
          margin 0!important
          background url('../../assets/images/icons.png') -664px -518px no-repeat
          font-size 16px

    li.m-i.m-i-blackroom
      margin 0 16px 0 10px
    
      a.i-link
          margin 0

          em
            padding-left 22px
            padding-right 0
            padding-top 0
            height 50px
            margin 0!important
            font-size 16px

            &::before
              position absolute
              background: url('../../assets/images/icons.png') -727px -519px no-repeat;
              display inline-block
              width 22px
              height 50px
              left 0
              content ''

    .home
      width auto
      margin 0
      padding 0 9px 0 0

      a.i-link
        padding 0
        background url('../../assets/images/icons.png') -658px -1170px no-repeat

        em
          padding-right: 0;
          padding-left: 0;
          margin: 0;
      
    .i_num
      position absolute
      display none
      z-index 100
      left 0
      overflow hidden
      top 49px
      background #fff
      border 1px solid #e5e9ef \9
      border-top 0
      box-shadow rgba(0,0,0,0.16) 0 2px 4px
      border-radius 0 0 4px 4px
      height auto

      li
        position relative
        font-size 12px
        line-height 20px
        min-width 120px
        height auto
        overflow hidden
        text-align left
        transition .2s all

        &:hover
          background-color #e5e9ef

          a
            left 5px
            text-shadow none
            color #222

            em
              right -21px
              opacity 1

        a
          padding 5px 15px 5px 25px
          margin-right 10px
          background url(../../assets/images/icons2.png) no-repeat 12px -1613px
          white-space nowrap
          transition .2s all
          overflow hidden
          position relative
          left 0
          color #222

          b
            display inline-block
            position relative
            font-weight normal
          
          em
            background url(../../assets/images/icons2.png) no-repeat 0 -1581px
            width 15px
            height 18px
            display block
            position absolute
            right -100px
            top 0
            transition .2s all
            opacity 0
</style>
