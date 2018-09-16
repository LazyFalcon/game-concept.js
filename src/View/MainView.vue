<template>
  <div class='mainView'>
    <div v-for='(item, index) in visibleObjects' v-bind:key='index' class='planetList'>
        <button v-on:click="select(item)" class='planetAttributes button'>{{ item.name }}</button>:
        traits:
        <!-- <div v-for='(structure, index2) in item.structures.build' v-bind:key='index2' class='planetAttributes'>
          {{ structure.name }}
        </div> -->
    </div>
  </div>
</template>

<script>
/*
? Co tu jest wyświtlane?
* Lista widocznych planet: ich nazwy, obraz, satelity(naturalne i sztuczne(ale zgrupowane)), widoczne space obiekty
* Jakieś tło
* Orbity planet

? Co tu się może dziać?
* Klikanie na planetę/obiekt w zależności od stanu
* Głównie to wybranie planety, całość akcji odbywa się na panelu bocznym
* Pokazywanie celów -> tu ustawiony jest callback, jak callbacka nie ma to leci defaultowy wybór planety

* Callbacki na lewy i prawy przycisk myszy
* Lewy: callbck na akcje ze stanu(ruch, atak, budowa itepe.) by default wybór obiektu
* Prawy: bardziej kontekstowe zachowania: dodatkowe akcje, skrócone info cokolwiek
*/

export default {
  name: 'MainView',
  data () {
    return {
      selectedPlanet: undefined
    }
  },
  methods: {
    select: function (toSelect) {
      if (this.selectedPlanet === toSelect) this.selectedPlanet = undefined
      else this.selectedPlanet = toSelect

      this.$store.commit({
        type: 'selectObject',
        selected: this.selectedPlanet
      })
    }
  },
  computed: {
    visibleObjects: function () {
      return this.$store.visibleObjects
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
