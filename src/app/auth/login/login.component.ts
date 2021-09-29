import { Component } from "@angular/core";
import { AuthProvider } from "@firebase/auth";
import { AuthBaseAction } from "src/app/shared/auth-action.component";
@Component({
    selector: "app-login",
    templateUrl: "login.component.html"
})
export class LoginComponent extends AuthBaseAction {

    get valueSenha() {
        return this.formulario.get('senha').value
    }
    SignIn() {
        this.carregando = true;
        const obj = {
            email: "",
            senha: ""
        }
        setTimeout(() => {
            this.finishAction.emit();
            this.carregando = false;

        })
    }

    SignInPopUp(provider: AuthProvider) {
        this.authService.popUpLogin(provider)
    }
}