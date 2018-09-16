import * as StarSystem from './StarSystem.js'
import * as SystemObject from './SystemObject.js'
import * as Structures from './Structures.js'
/*
* VueStore for communication with UI: mainly setting calbacks and data to render(so UI don't have to read directly from game)
*/
export class Game {
  constructor (vueStore) {
    this.system = new StarSystem.StarSystem()
    this.system.addObject('Alfa', new SystemObject.SystemObject('Alfa'))
    this.system.addObject('Beta', new SystemObject.SystemObject('Beta'))
    this.system.addObject('Homeworld', new SystemObject.SystemObject('Homeworld'))

    let homeworld = this.system.systemObjects.get('Homeworld')
    homeworld.structures.addToReady(Structures.defined.get('Habitat'))

    this.listOfVisiblePlanets = Array.from(this.system.systemObjects.entries())

    vueStore.commit({
      type: 'updateListOfVisibleObjects',
      newList: this.listOfVisiblePlanets
    })
  }

  update (days) {
    console.log(days)
  }
}
