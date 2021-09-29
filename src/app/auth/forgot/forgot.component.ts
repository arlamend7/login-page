import { Component } from "@angular/core";
import { AuthBaseAction } from "src/app/shared/auth-action.component";

@Component({
    selector: "app-forgot",
    templateUrl: "forgot.component.html"
})
export class ForgotComponent extends AuthBaseAction {
    isAuthenticated: boolean = false;

    Forgot() {
        this.carregando = true;
        this.redirect.emit('forgot');
        setTimeout(() => {
            this.isAuthenticated = true;
            this.carregando = false;

        }, 700)
    }

}