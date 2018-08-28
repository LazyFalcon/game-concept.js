<template>
  <div class="hello">
    <h3>Constructions</h3>
    <template v-if='planetName'>
    <h3>{{ msg }} {{planetName}}?</h3>
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
    planetName: function () {
      return this.$store.state.selectedPlanet
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
