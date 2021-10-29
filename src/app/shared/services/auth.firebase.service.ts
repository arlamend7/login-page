import { Injectable } from "@angular/core";
import {
    getAuth,
    UserCredential,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    verifyPasswordResetCode,
    sendEmailVerification,
    signInWithPopup,
    signInWithCustomToken,
    Auth,
    AuthProvider
} from "firebase/auth";


@Injectable({ providedIn: "root" })
export class AuthFirebaseService {
    auth: Auth
    constructor() {
        this.auth = getAuth()
    }

    async SignIn(email: string, senha: string) {
        return signInWithEmailAndPassword(this.auth, email, senha).then(
            (userCredential: UserCredential) => {
                const user = userCredential.user;
                return user.uid
            }
        );
    }
    
    async CreateUser(email: string, senha: string) {
        return createUserWithEmailAndPassword(this.auth, email, senha)
            .then(
                (userCredential: UserCredential) => {
                    const user = userCredential.user;
                    sendEmailVerification(user);
                    return user.uid;
                }
            )
    }

    Forgot(email: string) {
        return sendPasswordResetEmail(this.auth, email)
    }

    AlreadyLogin(token: string) {
        return signInWithCustomToken(this.auth, token)
            .then((userCredential: UserCredential) => {
                const user = userCredential.user;
                return user.uid;
            })
    }
    PopUpLogin(authProvider: AuthProvider) {
        return signInWithPopup(this.auth, authProvider)
            .then((userCredential: UserCredential) => {
                const user = userCredential.user;
                return user.uid;
            })
    }
}
