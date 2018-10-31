<template>
  <div id="app">
    <MarkDown msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MarkDown from './components/MarkDown'
import debounce from 'lodash/debounce'

export default {
  name: 'app',
  components: {
    MarkDown
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
