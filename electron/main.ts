import { app, BrowserWindow, Menu } from "electron";
import * as path from "path";
import * as url from "url";

let appWin: BrowserWindow;

const createWindow = () => {

    appWin = new BrowserWindow({
        width: 1400,
        height: 900,
        title: "App Desktop",
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            //preload : './preload.js'
        }
    });
    
    appWin.loadURL(
        url.format({
            pathname : path.join(__dirname,`/../../dist/AppDesktop/index.html`),
            protocol : 'file',
            slashes : true
        })
    );

    configMenuApp( appWin );

    //appWin.setMenu(null);
    //appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});

const configMenuApp = ( win : BrowserWindow ) =>{
	win.webContents.openDevTools();
	let menuPview = Menu.buildFromTemplate(templateMenu());
	win.setMenu(menuPview);
    win.maximize()
    win.show();
	//win.setResizable(false);
}

const templateMenu = () =>{

	let menuPrincipal = [
		{
			label:"Menu",
			submenu : [
				{
					label : "Acerca de",
					click : () =>{
						//viewMenuAcercaDe();
					}
				}
			]
		}
	];

  return menuPrincipal;
}