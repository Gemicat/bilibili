<template>
  <div id="app">
    <TopContainer></TopContainer>
    <BHeader></BHeader>
  </div>
</template>

<script>
import TopContainer from 'components/common/TopContainer.vue';
import BHeader from 'components/common/BHeader.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    TopContainer,
    BHeader
  }
}
</script>