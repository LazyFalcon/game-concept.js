export class Planet {
  constructor (name, attachments = []) {
    this.name = name
    this.attachments = attachments
    this.buildings = []
  }
}

export class Game {
  constructor (name) {
    this.planets = [new Planet('Alfa', ['Hot']), new Planet('Beta', ['Toxic']), new Planet('Home', ['Government', 'Habitat'])]
  }
}

var game = new Game('a')

export default game
