export class StarSystem {
  constructor () {
    this.systemObjects = new Map()
    this.totalPopulation = 0
    this.totalResources = 0
    this.totalProduction = 0
    this.averageQuality = 1
  }

  collectSystemOutcome () {
    let quality = 0
    for (let thing of this.systemObjects) {
      this.totalPopulation += thing.population.get()
      this.totalResources += thing.resources.get()
      this.totalProduction += thing.production.production
      quality += thing.quality.get()
    }
    this.averageQuality = quality / this.systemObjects.size
  }

  addObject (name, thing) {
    this.systemObjects.set(name, thing)
  }
}
