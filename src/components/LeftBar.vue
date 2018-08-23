<template>
  <div class='hello'>
    <button
      v-for='tab in tabs'
      v-bind:key='tab'
      v-bind:class="['tab-button', { active: selectedTab === tab }]"
      v-on:click='selectedTab = tab'
      >{{ tab }}</button>

    <component
      v-bind:is="currentTabComponent"
      class="tab"
    ></component>
  </div>
</template>

<script>

import ConstructionView from './ConstructionView'
import ResourcesView from './ResourcesView'
import TechView from './TechView'

export default {
  name: 'LeftBar',
  components: {
    ResourcesView,
    TechView,
    ConstructionView
  },
  data () {
    return {
      selectedTab: 'Resources',
      tabs: ['Resources', 'Tech', 'Construction'],
      msg: 'Wanna build something?'
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.selectedTab + 'View'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
