//dependencies
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

//creating a new window
let window 

function makeWin() {
    window = new BrowserWindow({width: 1000,height: 800})
    
    /** 
    * Each window is a html renderer powered by chromium
    * This is how you choose what html file the window should load. 
    * I suppose it could also load html files over the web
    * */
 

    window.loadURL(url.format({
        pathname: path.join(__dirname, 'src', 'authenticate.html'),
        protocol: 'file',
        slashes: true
    }))
    
    window.webContents.openDevTools()
    window.on('close', () => {
        window = null
    })
}


app.on('ready', makeWin)

