<template>
  <div class="banner">
    <div class="topic-preview-wrapper">
      <div class="topic-preview-list-wrapper">
        <ul class="topic-preview" style="width: 500%;" ref="banner">
          <BannerItem></BannerItem>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BannerItem from 'components/banner/BannerItem';
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'bannerlist'
    ])
  },
  components: {
    BannerItem
  }
}
</script>


<style lang="stylus" scoped>
	.banner
		height 220px
		width 440px
		.topic-preview-wrapper
			position relative
			height 100%
			width 100%
			a
				color #fff
			.topic-preview-list-wrapper
				overflow hidden
				border-radius 4px
				.topic-preview
					width 500%
					height 100%
					transition .2s
			.more-topic
				position absolute
				right 15px
				bottom 35px
				color #fff
				background rgba(0,0,0,0.64)
				width 50px
				height 24px
				line-height 24px
				text-align center
				border-radius 4px
				transition .2s all linear
				&:hover
					text-shadow 0 0 3px #fff
					color #fff
				.b-icon
					display inline-block
					vertical-align middle
					width 6px
					height 12px
					margin -2px 0 0 5px
					background url(../../assets/images/icons.png) no-repeat
					background-position -541px -218px
			.s-bottom
				position absolute
				bottom 0
				left 0
				width 100%
				height 35px
				background linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.66))
				border-radius 0 0 4px 4px
				.title
					position absolute
					bottom 0
					vertical-align top
					left 20px
					top 0
					height 35px
					line-height 35px
					width 50%
					overflow hidden
					white-space nowrap
					text-overflow ellipsis
					color #fff
					font-size 14px
				.slide-bar
					position absolute
					right 5px
					bottom 5px
					overflow hidden
					padding 2px 5px
					li
						float left
						cursor pointer
						width 18px
						height 18px
						margin 2px 2px
						background url(../../assets/images/icons.png) -855px -790px no-repeat
						&:hover
							background-position -919px -790px
						&.on
							background-position -855px -727px
</style>
