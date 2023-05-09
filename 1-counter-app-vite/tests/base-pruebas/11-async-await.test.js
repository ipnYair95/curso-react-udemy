import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {

    test('getImagen debe retonar un URL', async() => {

        const resp = await getImagen();        
        expect( resp ).toEqual('No se encontro la imagen');
        
    });
    
});