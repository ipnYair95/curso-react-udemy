import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = () => {

    return async (dispatch) => {
        dispatch(checkingCredentials());
    }

}

export const startGoogleSignIn = () => {

    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await singInWithGoogle();

        if (!result.ok) {
            return dispatch(logout(result));
        }

        dispatch(login(result));


    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

    return async (dispatch) => {

        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if (!ok) {
            return dispatch(logout({ errorMessage }));
        }

        dispatch(login({ uid, displayName, photoURL }));

    }

}

export const startLoginWithEmailAndPassword = ({ email, password }) => {

    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await loginWithEmailAndPassword({ email, password });        

        if (!result.ok) {
            return dispatch(logout(result));
        }

        dispatch(login(result));

    }

}

export const startLogout = () =>{
    return async( dispatch ) =>{
        
        await logoutFirebase();

        dispatch( logout({}) );

        dispatch( clearNotesLogout() );

    }
}