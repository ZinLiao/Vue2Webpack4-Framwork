export default {
  routes: [
    {
      path: '/',
      component: r => require(['@/views/index.vue'], r)
    }
  ]
}