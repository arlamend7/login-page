import { Component, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AuthBaseAction } from "src/app/shared/auth-action.component";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
    selector: "app-forgot",
    templateUrl: "forgot.component.html"
})
export class ForgotComponent extends AuthBaseAction {
    token: string;
    private tokenReceived: string;
    senha: string;
    isAuthenticated: boolean = false;
    constructor(private readonly modalService: BsModalService,
        protected readonly authService: AuthService) {
        super(authService)
    }

    modalRef: BsModalRef
    Forgot(template: TemplateRef<HTMLDivElement>) {
        this.carregando = true;
        setTimeout(() => {
            this.carregando = false;
            this.modalRef = this.modalService.show(template, {
                ignoreBackdropClick: true
            });
        }, 500)
    }
    verifyToken() {
        if (this.token == this.tokenReceived) {
            this.carregando = false;
            this.modalRef.hide()
            this.redirect.emit('forgot');
            setTimeout(() => {
                this.isAuthenticated = true;
            }, 700);
        }
    }
    confirm() {
        if (this.senha) {
            this.carregando = true;
            setTimeout(() => {
                this.carregando = false;
                this.redirect.emit('login')
            }, 500)

        }
    }
}