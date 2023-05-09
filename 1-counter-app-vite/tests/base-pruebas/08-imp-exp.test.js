import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Name of the group', () => {

    test('getHeroeById debe retonar heroe por id', () => {

        const id = 1;

        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeroeById debe retonar undefined por no existir heroe por id', () => {

        const id = 100;

        const hero = getHeroeById(id);

        expect(hero).toBeUndefined();

    });

    test('debe retornar un arreglo de heroes DC', () => {

        const owner = 'DC';

        const resp = getHeroesByOwner(owner);

        expect(resp.length).toEqual(3);
        expect(resp.every( (heroe) => heroe.owner === owner )).toBeTruthy();
        
    });

    test('debe retornar un arreglo de heroes marvel', () => {

        const owner = 'Marvel';

        const resp = getHeroesByOwner(owner);

        expect(resp.length).toEqual(2);
        expect(resp.every( (heroe) => heroe.owner === owner )).toBeTruthy();
        
    });


});