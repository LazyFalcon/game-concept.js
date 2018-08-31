<template>
  <div class="hello">
    <h3>Constructions</h3>
    <template v-if='getPlanet'>
      <h3>{{ msg }} {{getPlanet.name}}?</h3>
      <div>
        <button v-for='(thing, index) in getPlanet.availbleBuildings'
          v-bind:key='index'
          v-on:click="getPlanet.addBuilding(thing)">{{ thing }}</button>

      </div>
    </template>

    <template v-else><h3>Please select planet</h3></template>
  </div>
</template>

<script>

export default {
  name: 'ConstructionView',
  data () {
    return {
      msg: 'Wanna build something on'
    }
  },
  computed: {
    getPlanet: function () {
      return this.$store.state.selected
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3{
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
