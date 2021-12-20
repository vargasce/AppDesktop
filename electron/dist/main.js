"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
const url = require("url");
let appWin;
const createWindow = () => {
    appWin = new electron_1.BrowserWindow({
        width: 1400,
        height: 900,
        title: "App Desktop",
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            //preload : './preload.js'
        }
    });
    appWin.loadURL(url.format({
        pathname: path.join(__dirname, `/../../dist/AppDesktop/index.html`),
        protocol: 'file',
        slashes: true
    }));
    configMenuApp(appWin);
    //appWin.setMenu(null);
    //appWin.webContents.openDevTools();
    appWin.on("closed", () => {
        appWin = null;
    });
};
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
const configMenuApp = (win) => {
    win.webContents.openDevTools();
    let menuPview = electron_1.Menu.buildFromTemplate(templateMenu());
    win.setMenu(menuPview);
    win.maximize();
    win.show();
    //win.setResizable(false);
};
const templateMenu = () => {
    let menuPrincipal = [
        {
            label: "Menu",
            submenu: [
                {
                    label: "Acerca de",
                    click: () => {
                        //viewMenuAcercaDe();
                    }
                }
            ]
        }
    ];
    return menuPrincipal;
};
//# sourceMappingURL=main.js.map