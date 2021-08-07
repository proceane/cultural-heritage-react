import { auth } from "../firebase";

export function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

export function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        return userCredential.user;
    }).catch((error) => {
        return error.code;
    });
}

export function logout() {
    return auth.signOut();
}