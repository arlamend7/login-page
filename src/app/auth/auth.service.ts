import { Injectable } from "@angular/core";
import {
    getAuth,
    UserCredential,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from "firebase/auth";


@Injectable({ providedIn: "root" })
export class AuthService {
    auth
    constructor() {
        this.auth = getAuth()
    }
    SignIn(email: string, senha: string) {
        return signInWithEmailAndPassword(this.auth, email, senha).then(
            (userCredential: UserCredential) => {
                const user = userCredential.user;
                console.log(user.uid);
            }
        );
    }
    CreateUser(email: string, senha: string) {
        return createUserWithEmailAndPassword(this.auth, email, senha)
            .then(
                (userCredential: UserCredential) => {
                    const user = userCredential.user;
                    console.log(user.uid);
                }
            )
    }
    Forgot(email: string) {
        return sendPasswordResetEmail(this.auth, email)
    }
}
