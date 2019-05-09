<template>
  <div>
    <h1>Vue2 + Vue-Router2 + Webpack4</h1>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      page: 'index'
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
