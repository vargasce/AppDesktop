"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import necesarios
const electron_1 = require("electron");
const path = require("path");
const url = require("url");
const preload_1 = require("./preload");
let preload = new preload_1.Preload();
let win;
process.env.SOCKET_PORT = "18488";
//https://home.openweathermap.org/api_keys
//https://openweathermap.org/current
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 1600,
        height: 1250,
        minWidth: 1150,
        minHeight: 1000,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            //preload : './preload.js'
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, `/../../dist/AppDesktop/index.html`),
        protocol: 'file:',
        slashes: true
    }));
    configMenuApp(win);
    win.on('closed', () => {
        win.close;
    });
    preload.InitSocket(win);
}
//RUN CONTROLLER
preload.InitEvents();
// Para ver el estado de la app
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
const configMenuApp = (win) => {
    win.webContents.openDevTools();
    let menuPview = electron_1.Menu.buildFromTemplate(templateMenu());
    win.setMenu(menuPview);
    //win.maximize();
    win.show();
    win.setResizable(true);
};
const templateMenu = () => {
    let menuPrincipal = [
        {
            label: "Menu",
            submenu: [
                {
                    label: "Acerca de",
                    click: () => {
                        viewMenuAcercaDe();
                    }
                }
            ]
        }
    ];
    return menuPrincipal;
};
const viewMenuAcercaDe = () => {
    //Todavia no se que hacer con esto tipos de eventos, por ahora lo vamos a dejar asi
    //hasta tener nuevo aviso.
};
//# sourceMappingURL=main.js.map