"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConexionSqlite_1 = require("../../Conection/ConexionSqlite");
const typedi_1 = require("typedi");
const md5 = require("md5");
let UsuarioDAO = class UsuarioDAO {
    constructor() {
        this._conection = null;
        this._conection = ConexionSqlite_1.default.instace;
    }
    /** ADD USER
     * @Observations => Insertar nuevo usuario a la base.
     * @param { UsuarioDTO } data => datos del usuario.
     * @returns { Primise<boolean> } => TRUE or False.
     */
    AddUser(data) {
        return new Promise((resolve, reject) => {
            try {
                this._conection.all(createSqlStringAddUser(data), (error, result) => {
                    if (!error) {
                        console.log('Add User Succes!! ');
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            catch (_error) {
                throw _error;
            }
        });
    }
};
UsuarioDAO = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], UsuarioDAO);
exports.default = UsuarioDAO;
const createSqlStringAddUser = (data) => {
    console.log(data);
    let sql = ` INSERT INTO Usuario ( nombre, apellido, usuario, pass, fecha_alta, activo, email, numero )
                VALUES( '${data.nombre}',
                        '${data.apellido}',
                        '${data.usuario}',
                        '${md5(data.pass)}',
                        '${new Date()}',
                        ${data.activo},
                        '${data.email}',
                        '${data.numero}'
                );
`;
    return sql;
};
//# sourceMappingURL=Usuario.dao.js.map