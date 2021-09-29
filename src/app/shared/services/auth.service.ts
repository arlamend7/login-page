import { Injectable } from "@angular/core";
import {
    getAuth,
    UserCredential,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    signInWithPopup,
    signInWithCustomToken,
    Auth,
    AuthProvider
} from "firebase/auth";


@Injectable({ providedIn: "root" })
export class AuthService {
    auth: Auth
    constructor() {
        this.auth = getAuth()
    }

    async SignIn(email: string, senha: string) {
        return signInWithEmailAndPassword(this.auth, email, senha).then(
            (userCredential: UserCredential) => {
                const user = userCredential.user;
                console.log(user.uid);
            }
        );
    }
    async CreateUser(email: string, senha: string) {
        return createUserWithEmailAndPassword(this.auth, email, senha)
            .then(
                (userCredential: UserCredential) => {
                    const user = userCredential.user;
                    sendEmailVerification(user).then(() => {

                    })
                }
            )
    }
    Forgot(email: string) {
        return sendPasswordResetEmail(this.auth, email)
    }
    alreadyLogin(token: string) {
        signInWithCustomToken(this.auth, token)
            .then((userCredential: UserCredential) => {
                const user = userCredential.user;
            })
    }
    popUpLogin(authProvider: AuthProvider) {
        signInWithPopup(this.auth, authProvider)
            .then((userCredential: UserCredential) => {
                const user = userCredential.user;
            })
    }
}
