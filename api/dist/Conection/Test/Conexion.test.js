const ConnectionSqlite = require('../ConexionSqlite');
let _conection = ConnectionSqlite.instace;

describe("Conexion DB", ()=>{
    test("Query Request", ()=>{
        _conection.all( 'SELECT * FROM Usuario ;', ( error, result ) =>{
            if( !error ){
                if( result.length > 0 ){
                    expect(true).toBe(true);
                }
            }else{
                expect(true).toBe(false);                   
            }
        })
    });
});