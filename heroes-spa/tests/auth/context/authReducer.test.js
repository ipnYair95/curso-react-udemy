import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('auth Reducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const initialState = {
            logged: false,            
        };

        const state = authReducer(initialState);

        expect(state).toEqual({ logged: false });

    });

    test('dedbe de login llamar al login y autenticar', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Doe',
                id: '123'
            }
        };

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({            
            logged: true,
            user: action.payload
        });
        
    });

    test('dedbe de logout ', () => {

     const state = {
        logged: true,
        user: {
            id: '123',
            name: 'juan'
        }
     };

     const action = {
        type: types.logout
     };

     const newState = authReducer(state, action);

     expect(newState).toEqual({logged: false});

        
    });



});