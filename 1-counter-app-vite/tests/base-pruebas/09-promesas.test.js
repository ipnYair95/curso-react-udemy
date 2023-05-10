import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {


        const id = 1;

        getHeroeByIdAsync(id).then(hero => {


            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });

    });

    test('getHeroeByIdAsync debe retornar un error si no existe', (done) => {


        const id = 100;

        getHeroeByIdAsync(id).catch(err => {

            expect(err).toEqual('No se pudo encontrar el héroe');

            done();
        });

    });

});