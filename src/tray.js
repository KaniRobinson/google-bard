import path from 'path'
import { Tray } from 'electron'

export default class {
  constructor(application) {
    this.application = application
  }

  getBounds() {
    if (!this.tray) return
    return this.tray.getBounds()
  }

  create() {
    this.tray = new Tray(path.join(__dirname, 'icon.png'), 'Google Bard')
    this.tray.on('click', () => this.application.getBrowser().toggle())

    return this
  }
}