<template>
  <div id="app">
    <TopContainer></TopContainer>
  </div>
</template>

<script>
import TopContainer from 'components/common/TopContainer.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    TopContainer
  }
}
</script>