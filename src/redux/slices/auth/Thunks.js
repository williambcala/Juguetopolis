import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../../../firebase/FirebaseConfig"
import { signIn, logOut, register } from "./AuthSlice"


export const registerThunk = (emailInput, password) => {

    return async (dispatch) => {
        try {
        const response = await createUserWithEmailAndPassword(auth, emailInput, password)
        const {email, uid, accessToken} = response.user;
        dispatch(register({email, uid, accessToken}));


        } catch(error) {
            dispatch(register({error: 'Ha ocurrido un error, verifique por favor la información suministrada.'}))
        }
    }

}

export const signInThunk = (emailInput, password) => {

    return async (dispatch) => {
        try {
        const response = await signInWithEmailAndPassword(auth, emailInput, password)
        const {email, uid, accessToken} = response.user;
        dispatch(signIn({email, uid, accessToken}));


        } catch(error) {

            dispatch(signIn({error: 'Ha ocurrido un error, digite de nuevo las credenciales'}))
        }
    }

}

export const signOutThunk = () => {

    return async (dispatch) => {
        signOut(auth)
        dispatch(logOut());
    }

}