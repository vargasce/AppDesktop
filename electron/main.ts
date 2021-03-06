// Import necesarios
import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { Preload } from './preload';

let preload = new Preload();
let win: BrowserWindow;
process.env.SOCKET_PORT = "18488";

//https://home.openweathermap.org/api_keys
//https://openweathermap.org/current

function createWindow():void {

    win = new BrowserWindow({ 
        //width: 1600, 
        //height: 1250,
        width: 1400, 
        height: 900,
        //minWidth: 1250,
        //minHeight: 900,
        show : false,
        webPreferences : {
            nodeIntegration : true,
            //preload : './preload.js'
        }
    });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/AppDesktop/index.html`),
            protocol: 'file:',
            slashes: true
        })
    );

    configMenuApp( win );

    win.on('closed', () => {
        win.close;
    });


    preload.InitSocket( win );
}

//RUN CONTROLLER
preload.InitEvents();

// Para ver el estado de la app
app.on('ready', createWindow)

app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
});

const configMenuApp = ( win : BrowserWindow ) =>{
    win.webContents.openDevTools();
	let menuPview = Menu.buildFromTemplate(templateMenu());
	win.setMenu(menuPview);
    //win.maximize();
    win.show();
	win.setResizable(false);
}

const templateMenu = () =>{

	let menuPrincipal = [
		{
			label:"Menu",
			submenu : [
				{
					label : "Acerca de",
					click : () =>{
						viewMenuAcercaDe();
					}
				}
			]
		}
	];

  return menuPrincipal;
}

const viewMenuAcercaDe = () =>{
    //Todavia no se que hacer con esto tipos de eventos, por ahora lo vamos a dejar asi
    //hasta tener nuevo aviso.
}


