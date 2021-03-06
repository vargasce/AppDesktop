'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ConnectionError extends Error {
    constructor(title = 'Conection', ...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ConnectionError);
        }
        this.name = params;
        this.title = title;
        this.date = new Date();
    }
}
exports.default = ConnectionError;
//# sourceMappingURL=Connection.error.js.map