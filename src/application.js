import { BrowserWindow } from 'electron'
import Browser from './browser'
import Tray from './Tray'

export default class {
  constructor(app) {
    this.app = app
    this.browser = null
    this.tray = null
  }

  onReady() {
    this.tray = new Tray(this)
      .create()

    this.browser = new Browser(this)
      .setUrl(`file://${__dirname}/index.html`)
      .create()
  }

  onWindowAllClosed() {
    if (process.platform === 'darwin') return
    return this.app.quit()
  }

  onActivate() {
    if (BrowserWindow.getAllWindows().length) return
    this.onReady()
  }

  getBrowser() {
    return this.browser
  }

  getTray() {
    return this.tray
  }

  create() {
    this.app.dock.hide()
    this.app.on('ready', this.onReady.bind(this))
    this.app.on('window-all-closed', this.onWindowAllClosed.bind(this))
    this.app.on('activate', this.onActivate.bind(this))
  }
}