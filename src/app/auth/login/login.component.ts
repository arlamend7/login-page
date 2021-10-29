import { Component, OnInit } from "@angular/core";
import { AuthProvider } from "@firebase/auth";
import { AuthBaseAction } from "src/app/shared/auth-action.component";
@Component({
    selector: "app-login",
    templateUrl: "login.component.html"
})
export class LoginComponent extends AuthBaseAction implements OnInit{
    valueSenha : string;

    get FormularioValue() {
        return {
            Email : this.formulario.get('email').value,
            Senha : this.formulario.get('senha').value
        }
    }
    ngOnInit(): void {
        this.valueSenha = this.formulario.get('senha').value;
    }
    
    SignIn() {
        this.carregando = true;

        this.authFirebaseService.SignIn(this.FormularioValue.Email, this.FormularioValue.Senha)
        .then((uid : string) => {
            this.authService.Login(uid).subscribe({
                next : () => {
                    this.finishAction.emit();
                    this.carregando = false;
                }
            })
        })
    }

    SignInPopUp(provider: AuthProvider) {
        this.authFirebaseService.PopUpLogin(provider)
    }
}