import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        /* get token
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log(credentials); 
        */
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email, photoURL,
            uid
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error);
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }

}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        //TODO: ACTUALIZAR DISPLAY NAME EN FIREBASE
        await updateProfile(FirebaseAuth.currentUser, {
            displayName
        });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch (error) {

        console.log(error);

        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const loginWithEmailAndPassword = async ({ email, password }) => {

    //sign with email and password

    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { photoURL, uid, displayName } = resp.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {

        console.log(error);

        return {
            ok: false,
            errorMessage: error.message
        }

    }

}

export const logoutFirebase = async () =>{

    return await FirebaseAuth.signOut();

}