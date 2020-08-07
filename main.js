const {app, BrowserWindow} = require('electron')
const open = require('open')


function createWindow () {
    let win = new BrowserWindow({
        width: 285, // 285
        height: 520, // 520
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('frontend/index.html')
}

app.whenReady().then(createWindow)
// link: https://api.whatsapp.com/send?phone=seunumerodetelefone&text=sua%20mensagem


function configNumber(element) {
    number = element.value
    number = number.replace(/\D/g,"")
    console.log(number)
    element.value = number
}

function send(number, text, navigator) {
    console.log('vai dar certo')
}

