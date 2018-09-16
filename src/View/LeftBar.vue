<template>
  <div class='sidebar'>
    <div class='panelSelection'>
      <button
        v-for='tab in tabs'
        v-bind:key='tab'
        v-bind:class="['tab-button', { active: selectedTab === tab }]"
        v-on:click='selectedTab = tab'
        class='button'
        >{{ tab }}</button>
    </div>

    <component
      v-bind:is="currentTabComponent"
      class="tab"
    ></component>
  </div>
</template>

<script>
/*
* Tu są wszystkie działania pogrupowane
*/

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
      selectedTab: 'Construction',
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
.sidebar, .content{
  background: #333;
  color: #fff;
  height: 500px;
  border-radius: 4px;
  border:1px solid #777;
}
.panelSelection {
  border-bottom: 1px solid white;
  display: flex; /* or inline-flex */
  flex-wrap: nowrap;
}
.sidebar{
  width: 400px;
  left:0;
  top:0;
  height: 100%;
  position: absolute;
}

.button {
  font-size: 20px;
  background-color:transparent;
  color: white;
  text-align: center;
  text-decoration: none;
  border: 0px;
  flex: 1 1;
}

.button:hover {
  color: white;
}

</style>
