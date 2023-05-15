import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todo Reducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demon Todo',
        done: false
    }];

    test('debe de regresar estado inicial', () => {

        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);

    });

    test('debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect( newState ).toContain( action.payload );

    });

    test('debe eliminar un todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
        expect( newState.find( (todo) => todo.id === 1 ) ).toBeFalsy();
        
    });

    test('debe realizar el toogle de 1 todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect( newState[0].done ).toBeTruthy();

    });


});