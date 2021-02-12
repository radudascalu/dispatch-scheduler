<template>
  <div id="app">
    <dispatch-scheduler />
  </div>
</template>

<script>
import DispatchScheduler from './components/DispatchScheduler.vue'

export default {
  name: 'App',
  components: {
    DispatchScheduler
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
