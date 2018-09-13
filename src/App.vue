<template>
  <div id="app">
    <TopBar/>
    <MainView/>
    <LeftBar/>
  </div>
</template>

<script>
import MainView from './View/MainView'
import LeftBar from './View/LeftBar'
import TopBar from './View/TopBar'

export default {
  name: 'App',
  components: {
    MainView,
    LeftBar,
    TopBar
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
