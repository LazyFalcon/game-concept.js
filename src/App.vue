<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <LeftBar/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import LeftBar from './components/LeftBar'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LeftBar
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
