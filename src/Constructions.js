var ids = 0
var nextId = function () {
  ids++
  return ids
}

var constructions = new Map([
  ['Factory', {
    name: 'Factory',
    id: nextId(),
    level: 1,
    perks: ['AllowBuilding'],
    adds: ['Shipyard']
  }],
  ['Shipyard', {
    name: 'Shipyard',
    id: nextId(),
    level: 1,
    perks: ['AllowBuildingShips']
  }],
  ['Government', {
    name: 'Government',
    id: nextId(),
    level: 1,
    perks: ['AllowBuilding'],
    adds: ['Habitat', 'Factory']
  }],
  ['Habitat', {
    name: 'Habitat',
    id: nextId(),
    level: 1,
    perks: ['IncreasePopulationCapability']
  }]
])

export default constructions
