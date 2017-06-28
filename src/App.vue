<template>
  <div id="app">
    <TopContainer></TopContainer>
    <BHeader></BHeader>
    <BContent></BContent>
  </div>
</template>

<script>
import TopContainer from 'components/common/TopContainer.vue';
import BHeader from 'components/common/BHeader.vue';
import BContent from 'components/content/BContent.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    TopContainer,
    BHeader,
    BContent
  }
}
</script>