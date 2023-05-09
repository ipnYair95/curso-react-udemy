import { getUsuarioActivo, getUser } from "../../src/base-pruebas/05-funciones";

describe.only('05-Funciones', () => {

    test('getUser debe retonar un objecto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );

    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Yair';

        const testUser = {
            uid: 'ABC567',
            username: nombre
        }

        const resp = getUsuarioActivo(nombre);

        expect( testUser ).toEqual(resp);
        
    });

});