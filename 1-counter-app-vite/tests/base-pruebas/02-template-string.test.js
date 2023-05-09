const { getSaludo } = require("../../src/base-pruebas/02-template-string");

describe('Pruebas en template string', () => {

    test('getSaludo debe retonar Hola Fernando', () => {
        
        const name = 'Fernando';

        const msg = getSaludo( name );

        expect( msg ).toBe( `Hola ${name}` );
        
    });
    
});