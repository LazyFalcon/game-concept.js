export class StructureDescription {
  constructor ({name = 'Name.Me.Pls', description = 'tbd.', effects = [], on = []}, methods = []) {
    this.name = name
    this.description = description
    this.effects = effects
    this.on = on
    this.methods = methods
  }
}

export let defined = new Map()

function addToReady (name) {
  return function () {
    this.structures.addToReady(defined.get(name))
  }
}

defined.set('Habitat', new StructureDescription({
  name: 'Habitat',
  effects: [function () { this.production.add(1) }],
  on: [addToReady('Factory'), addToReady('Mines'), addToReady('Lab'), addToReady('Shipyard')]
}))

defined.set('Factory', new StructureDescription({
  name: 'Factory',
  effects: [function () { this.production.multiply(2) }]
}))

defined.set('Mines', new StructureDescription({
  name: 'Mines',
  effects: [function () { this.production.add(2) }]
}))

defined.set('Shipyard', new StructureDescription({
  name: 'Shipyard',
  effects: [function () { this.production.add(2) }]
}))

defined.set('Lab', new StructureDescription({
  name: 'Lab'
}))
