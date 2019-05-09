<template>
  <div>
    <h1>CNode Topics</h1>
    <ol>
      <li 
        v-for="(t, i) in topics"
        :key="i">
        《{{t.title}}》
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      topics: []
    }
  },

  mounted () {
    this.GET({
      url: '/api/topics',
      data: {}
    }).then(res => this.topics = res.data )
  }
}
</script>

<style lang="scss" scoped>
li {
  text-align: left;
}
</style>
