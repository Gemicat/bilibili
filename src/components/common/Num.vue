<template>
  <div class="num">
    <div class="menu-wrapper">
      <Search></Search>
      <ul class="nav-menu">
        <NavMenuItem v-for="i in classify" :item="i" :key="i.title"></NavMenuItem>
      </ul>
    </div>
  </div>
</template>

<script>
import Search from './Search.vue';
import NavMenuItem from './NavMenuItem.vue';

export default {

  data() {
    return {
      classify: [
        {
          title: '首页',
          num: 0,
          home: true
        },
        {
          title: '动画',
          num: 468
        },
        {
          title: '番剧',
          num: 61
        },
        {
          title: '音乐',
          num: 749
        },
        {
          title: '舞蹈',
          num: 108
        },
        {
          title: '游戏',
          num: 999
        },
        {
          title: '科技',
          num: 482
        },
        {
          title: '生活',
          num: 988
        },
        {
          title: '鬼畜',
          num: 64
        },
        {
          title: '时尚',
          num: 177
        },
        {
          title: '广告',
          num: 43
        },
        {
          title: '娱乐',
          num: 839
        },
        {
          title: '影视',
          num: 702
        },
        {
          title: '广场',
          num: 0,
          sequare: true
        },
        {
          title: '直播',
          num: 0,
          live: true
        },
        {
          title: '小黑屋',
          num: 0,
          blackroom: true
        }
      ]
    }
  },
  components: {
    Search,
    NavMenuItem
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
