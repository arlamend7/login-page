import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthBaseAction } from "src/app/shared/auth-action.component";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
    selector: "app-create",
    templateUrl: "create.component.html"
})
export class CreateComponent extends AuthBaseAction {
    formularioCriacao: FormGroup
    createdUser: boolean = false;
    get valueSenha() {
        return this.formulario.get('senha').value
    }

    constructor(private readonly formBuilder: FormBuilder,
        protected readonly authService: AuthService) {
        super(authService)
        this.formularioCriacao = this.formBuilder.group({
            name: ['', [Validators.required, Validators.pattern(/[a-zA-Z]+ [a-zA-Z]+/)]],
            telefone: ['', [Validators.required]],
            pais: ['+55', [Validators.required]],
            genero: ['None', [Validators.required]],
            senhaRepeat: ['', [Validators.required, Validators.minLength(8)]]

        })
    }

    firstStepDisabled = null;
    anotherStep(step: string) {
        this.redirect.emit('create')

        setTimeout(() => {
            this.createdUser = !this.createdUser;
            const control = this.formulario.get('email');
            if (this.firstStepDisabled == null) {
                this.firstStepDisabled = control.disabled;
            }
            if (step == 'finish') {
                control.disable()
            }
            if (step == 'start') {
                this.firstStepDisabled ? control.disable() : control.enable()
            }
        }, 700);
    }
    finish() {
        this.carregando = true;
        setTimeout(() => {
            this.carregando = false;
            this.finishAction.emit();
        }, 500)
    }
    CreateUser() {
        this.carregando = true;
        this.authService.CreateUser("arlanmendes197@gmail.com", "arlan123").then(() => {
            this.carregando = false;
            console.log("create");
        })
    }
}