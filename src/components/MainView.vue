<template>
  <div class='mainView'>
    <div v-for='(item, index) in planets' v-bind:key='index' class='planetList'>
        <button v-on:click="select(item.name)" class='planetAttributes button'>{{ item.name }}</button>:
        <div v-for='(att, index2) in item.attachments' v-bind:key='index2' class='planetAttributes'>
          {{ att }}
        </div>
        <div v-for='(att, index2) in item.buildings' v-bind:key='index2' class='planetAttributes'>
          {{ att }}
        </div>
    </div>
  </div>
</template>

<script>

import game from '../Game.js'

export default {
  name: 'MainView',
  data () {
    return {
      planets: game.planets,
      selectedPlanet: undefined
    }
  },
  methods: {
    select: function (toSelect) {
      if (this.selectedPlanet === toSelect) this.selectedPlanet = undefined
      else this.selectedPlanet = toSelect

      this.$store.commit({
        type: 'selectObject',
        object: this.selectedPlanet
      })
    }
  }
}
</script>

<style scoped>

.mainView {
  font-family: 'Segoe UI';
  font-size: 20px;
  padding: 5px;
}

.planetList {
  display: block;
  background-color: rgb(116, 116, 116);
  color: white;
}

.planetAttributes {
  display: inline-block;
  margin: 5px;
}

.button {
  font-family: 'Segoe UI';
  font-size: 20px;
  background-color:transparent;
  color: white;
  text-align: center;
  text-decoration: none;
  border: 2px solid rgb(233, 233, 233);
}

.button:hover {
  background-color: rgb(141, 141, 141);
  color: white;
}

</style>
