/*
* Na razie modujemy tylko produkcję, jak już się ustabilizuje framework to będzie można zająć się resztą
* produkcja ma dwa modyfikatory: zwiekszanie i mnożenie, standard.
* pochodzą one głównie od budynków(na razie, potem od populacji i polityk)
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
  add (value) {
    this.increments += value
  }
  multiply (value) {
    this.multipliers += value
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

class Structure {
  constructor (info) {
    this.name = info.name
    this.info = info
  }
}

export class SystemObject {
  constructor (name) {
    this.population = new Population()
    this.name = name
    this.resources = new Resources()
    this.production = new Production()
    this.quality = new Quality()
    this.temporaryEffects = new Set()

    this.structures = {
      ready: new Map(),
      forbidden: new Set(),
      build: new Map(),
      addToReady: function (thing) {
        if (!this.build.has(thing.name) && !this.forbidden.has(thing.name)) this.ready.set(thing.name, thing)
      }
    }
  }

  buildStructure (thing) {
    this.structures.ready.delete(thing.name)
    this.structures.build.set(thing.name, new Structure(thing))
    for (let on of thing.on) {
      on.call(this)
    }
  }

  applyEffects () {
    for (let str of this.structures.build) {
      for (let effect of str.info.effects) effect.call(this)
    }
  }
}
