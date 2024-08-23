import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';
import { signIn, logOut, checkingCredentials } from '../slices/auth/AuthSlice';

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            dispatch(signIn({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }));
        } catch (error) {
            dispatch(logOut({ errorMessage: error.message }));
        }
    };
};

export const startEmailPasswordLogin = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user;
            dispatch(signIn({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }));
        } catch (error) {
            dispatch(logOut({ errorMessage: error.message }));
        }
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth);
        dispatch(logOut());
    };
};
