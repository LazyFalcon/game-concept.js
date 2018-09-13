var ids = 0
var nextId = function () {
  ids++
  return ids
}

/**
 * Jak to działa?
 * Odkrycie technologii dodaje do wszystkich obiektów nowe możliwe do zbudowania obiekty(później pogrupowane w tiery), wystarczą same nawzy/ albo jeszcze lepiej id, liczby będą szybsze
 * Userowi wyświetlamy odfiltrowaną listę
 * Najpierw odfiltrowujemy te mandatory - brak potrzebnych budynków, przekroczona ilość zbudowanych, i innych uber-ważnych cudów
 * W drugim rzucie odfiltrowujemy listę tych które można zbdować
 */
class Construction {
  constructor (name, {level = 1, perks = [], primary = [], secondary = []}) {
    this.name = name
    this.level = level
    this.id = nextId()
    this.perks = perks
    this.primaryRequariements = primary
    this.secondaryRequariements = secondary
  }

  canBeBuild (parent) {
    return this.hasEnoughResources(parent) && this.hasAll
  }

  // * Hidden even when available
  firstLevelVisibilityCheck (parent) {

  }

  // * Greyed out when req not met
  secondLevelVisibilityCheck (parent) {

  }
}

var constructions = new Map([
  ['Factory', new Construction('Factory', {
    level: 1,
    perks: ['AllowBuilding'],
    primary: [{'Needs Gov': planet => planet.hasBuilding('Government')}]
  })],
  ['Shipyard', new Construction('Shipyard', {
    level: 1,
    perks: ['AllowBuildingShips']
  })],
  ['Government', new Construction('Government', {
    level: 1,
    perks: ['AllowBuilding']
  })],
  ['Mines', new Construction('Mines', {
    level: 1,
    perks: ['IncreaseResources']
  })],
  ['Lab', new Construction('Lab', {
    level: 1,
    perks: ['Techs']
  })],
  ['Habitat', new Construction('Habitat', {
    level: 1,
    perks: ['IncreasePopulationCapability']
  })]
])

export default constructions
