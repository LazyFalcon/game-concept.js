var ids = 0
var nextId = function () {
  ids++
  return ids
}

let constructions = new Map([
  ['Factory', {
    name: 'Factory',
    id: nextId(),
    level: 1,
    perks: ['AllowBuilding']
  }],
  ['Shipyard', {
    name: 'Shipyard',
    id: nextId(),
    level: 1,
    perks: ['AllowBuildingShips']
  }],
  ['Habitat', {
    name: 'Habitat',
    id: nextId(),
    level: 1,
    perks: ['IncreasePopulationCapability']
  }]

])

export default constructions
