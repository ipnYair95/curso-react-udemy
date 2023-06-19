import { loginWithEmailAndPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailAndPassword, startLogout } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('"../../../src/firebase/providers');

describe('auth thunks', () => {

    const dispatch = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de invocar el checkingCredentials', async () => {

        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());

    });

    test('startGoogleSingIn debe llamar checking credentials y login', async () => {

        const loginData = {
            ok: true,
            ...demoUser
        };

        //metodo de firebase mockeado por jest.mock
        await singInWithGoogle.mockResolvedValue(loginData); // spy on :3

        //thunk
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));


    });

    test('startGoogleSingIn debe llamar checking credentials y logout - error', async () => {

        const response = {
            ok: false,
            errorMessage: 'Un error'
        };

        //metodo de firebase mockeado por jest.mock
        await singInWithGoogle.mockResolvedValue(response); // spy on :3

        //thunk
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(response));


    });

    test('startLoginWithEmailAndPassword debe de llamar checking credentials y login', async () => {

        const loginData = { ok: true, ...demoUser };
        const formData = {
            email: demoUser.email,
            password: '123456'
        };

        await loginWithEmailAndPassword.mockResolvedValue( loginData );

        await startLoginWithEmailAndPassword(formData)(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) );

        
    });

    test('startLogout debe de llamar logoutFirebase, clear notes y logout',async () => {

        await startLogout()(dispatch);

        expect( logoutFirebase ).toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledWith( clearNotesLogout() );
        expect(dispatch).toHaveBeenCalledWith( logout({}) );
        
    });

});