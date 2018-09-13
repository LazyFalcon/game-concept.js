import constructions from './Structures.'

export class Planet {
  constructor (name, {traits = [], buildings = []}) {
    this.name = name
    this.type = 'PLANET'
    this.traits = traits
    this.buildings = buildings
    this.availbleBuildings = []
    if (buildings.indexOf('Government') < 0) this.availbleBuildings.push('Government')

    for (let it of buildings) {
      console.log(it, constructions.get(it))
      this.addAvilableFrom(constructions.get(it))
    }
    for (let it of buildings) {
      let idx = this.availbleBuildings.indexOf(it)
      if (idx > -1) this.availbleBuildings.splice(idx, 1)
    }
  }

  hasBuilding (name) {
    return this.buildings.indexOf(name) > -1
  }

  addBuilding (buildingName) {
    var building = constructions.get(buildingName)
    let idx = this.availbleBuildings.indexOf(buildingName)
    if (idx < 0 || building === undefined) {
      console.log('Building not exists in availble: ', building)
      return
    }
    console.log(',,', building)

    this.availbleBuildings.splice(idx, 1)
    this.buildings.push(building.name)
    this.addAvilableFrom(building)
  }

  // * preserves uniqueness
  addAvilableFrom (building) {
    if (building && 'adds' in building) { // ! why this was necessary?
      for (let thing of building.adds) { // for-of
        if (this.availbleBuildings.indexOf(building.name) < 0) {
          this.availbleBuildings.push(thing)
          console.log('>>', thing)
        }
      }
    }
  }
}

export class Game {
  constructor (name) {
    let planets = [new Planet('Alfa', {traits: ['Hot']}), new Planet('Beta', {traits: ['Toxic']}), new Planet('Home', {buildings: ['Government', 'Habitat']})]
    this.planets = {}
    for (let it of planets) {
      this.planets[it.name] = it
    }
  }
}

var game = new Game('a')

export default game
