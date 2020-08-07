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
    win.setMenuBarVisibility(false)
    win.loadFile('frontend/index.html')
}

app.whenReady().then(createWindow)
// link: https://api.whatsapp.com/send?phone=seunumerodetelefone&text=sua%20mensagem
// https://web.whatsapp.com/send?1=pt_br&phone=55849999416129

function enter() {
    var tecla = window.event.keyCode;
    if (tecla==13) {
        event.keyCode = 0; 
        event.returnValue = false;
    }
}

function configNumber(element) {
    number = element.value
    number = number.replace(/\D/g,"")
    console.log(number)
    element.value = number
}

function send(navigator) {
    const ddd = document.getElementById('ddd').options[document.getElementById('ddd').selectedIndex].value
    const phone = document.getElementById('phone').value
    const text = document.getElementById('msg').value
    console.log(navigator, ddd, phone, text)

    open(`https://web.whatsapp.com/send?phone=55${ddd}${phone}&text=${text}`,{
        app: navigator
    })
}

