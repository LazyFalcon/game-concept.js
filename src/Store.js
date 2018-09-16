import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /*
    * stores currently selected object of any type, type specific behaviors should be provided by traits and template selection
    * common props:
    *   name
    *   type
     */
    selected: undefined,
    visibleObjects: []
  },
  mutations: {
    selectObject (state, payload) {
      console.log('selected: ', payload)
      if (payload.selected === this.selected) this.state.selected = undefined
      else this.state.selected = payload.selected
    },
    unselect (state) {
      this.state.selected = undefined
    },
    updateListOfVisibleObjects (state, payload) {
      this.state.visibleObjects = payload.newList
    }
  }
})
