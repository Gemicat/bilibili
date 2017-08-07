<template>
  <div class="top-list-wrapper">
    <ul class="top-list" clearfix>
      <li>212121</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'ranklist'
    ])
  },
  mounted() {
    this.$store.dispatch('ranklist')
  }
}
</script>

<style lang="stylus" scoped>
	.top-list-wrapper
		position relative
		height 240px
		overflow hidden
		margin-left 20px
		.top-list
			margin-right -20px
		.prev, .next
			display none
			position absolute
			background-color rgba(0,0,0,0.6)
			background-image url(http://static.hdslb.com/images/v3images/icons2.png)
			background-repeat no-repeat
			width 20px
			top 50%
			margin-top -30px
			cursor pointer
			font-size 12px
			color #fff
			z-index 99
			text-align center
			line-height 16px
			user-select none
		.prev
			left 0px
			border-radius 0 2px 2px 0
			background-position 6px -1211px
			padding 13px 5px 13px 10px
		.next
			right 0px
			border-radius 2px 0 0 2px
			background-position 25px -1262px
			padding 13px 10px 13px 5px
		&:hover .prev, &:hover .next
			display block
		.prev:hover, .next:hover
			background-color rgba(0,0,0,0.8)
</style>

