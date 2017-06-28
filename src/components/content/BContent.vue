<template>
  <div class="content">
    <div class="container-top-wrapper">
      <div class="container-top">
        <div class="b-l">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from 'components/banner/Banner';

export default {
  components: {
    Banner
  }
}
</script>


<style lang="stylus" scoped>
  .content
    zoom 1
    .container-top-wrapper
      &:after
        content ''
        display block
        visibility hidden
        height 0
        clear both
        font-size 0
    .container-top
      padding 0
      margin 0 auto
      margin-bottom 20px
      zoom 1
      width 980px
      &:after
        content ''
        display block
        visibility hidden
        height 0
        clear both
        font-size 0
      .b-l
        float left
        width 440px
      .b-r
        float right
        width 540px
        height auto
    .container-row
      margin 0 auto
      zoom 1
      width 980px
      &:after
        content ''
        display block
        visibility hidden
        height 0
        clear both
        font-size 0
</style>