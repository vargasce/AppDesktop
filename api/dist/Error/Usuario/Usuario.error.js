'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioError extends Error {
    constructor(title = 'Usuario', ...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UsuarioError);
        }
        this.name = params;
        this.title = title;
        this.date = new Date();
    }
}
exports.default = UsuarioError;
//# sourceMappingURL=Usuario.error.js.map