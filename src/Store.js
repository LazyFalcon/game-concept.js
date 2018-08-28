import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedPlanet: undefined
  },
  mutations: {
    selectObject (state, payload) {
      state.selectedPlanet = payload.object
    },
    unselect (state) {
      state.selectedPlanet = undefined
    }
  }
})
