import positioner from 'electron-traywindow-positioner'
import { BrowserWindow } from 'electron'

export default class {
  constructor(application) {
    this.application = application
    this.mainWindow = null
    this.devtools = false
    this.url = `file://${__dirname}/index.html`
    this.options = {
      width: 450,
      height: 650,
      title: 'Google Bard',
      type: 'overlay',
      showOnAllWorkspaces: true,
      preloadWindow: true,
      alwaysOnTop: true,
      transparent: true,
      showDockIcon: false,
      resizable: false,
      frame: false,
      show: false,
      webPreferences: {
        backgroundThrottling: false,
        nodeIntegration: true,
        webviewTag: true,
      },
    }
  }

  setOptions(options = null) {
    this.options = { ...this.options, ...options }
    return this
  }

  setUrl(url = null) {
    this.url = url || this.url
    return this
  }

  toggle() {
    if (this.mainWindow.isVisible()) return this.mainWindow.hide()
    positioner.position(this.mainWindow, this.application.getTray().getBounds())
    return this.mainWindow.show()
  }

  withDevtools() {
    this.devtools = true
    return this
  }

  create() {
    this.mainWindow = new BrowserWindow(this.options)
    this.mainWindow.loadURL(this.url)
    if (this.devtools) this.mainWindow.webContents.openDevTools()
    this.mainWindow.on('blur', () => this.toggle())
    return this
  }
}