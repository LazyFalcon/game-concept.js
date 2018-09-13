/*
* Na razie modujemy tylko produkcję, jak już się ustabilizuje framework to będzie można zająć się resztą
*/

const popType = {
  Uninhabited: 'uninhabited',
  Human: 'human',
  Automated: 'automated',
  AI: 'AI'
}

class Population {
  constructor () {
    this.population = 0
    this.populationType = popType.Uninhabited
  }
  // ? maybe getters? get population () ?
  get () {
    return this.population
  }
}

class Resources {
  constructor () {
    this.resources = 0
  }
  get () {
    return this.resources
  }
}

class Production {
  constructor () {
    this.baseProduction = 0

    this.multipliers = 1
    this.increments = 0
  }
  get production () {
    return (this.baseProduction + this.increments) * this.multipliers
  }
}

class Quality {
  constructor () {
    this.quality = 1
  }
  get () {
    return this.quality
  }
}

export class Structure {
  constructor ({name = 'Name.Me.Pls', effects = []}) {
    this.effects = effects
    this.name = name
  }
}

export class SystemObject {
  constructor () {
    this.population = new Population()
    this.resources = new Resources()
    this.production = new Production()
    this.quality = new Quality()

    this.structuresThatCanBeBuilt = new Set()
    this.structures = new Set()
  }
}
