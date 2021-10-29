import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthBaseAction } from "src/app/shared/auth-action.component";
import { AuthFirebaseService } from "src/app/shared/services/auth.firebase.service";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
    selector: "app-create",
    templateUrl: "create.component.html"
})
export class CreateComponent extends AuthBaseAction  implements OnInit{
    formularioCriacao: FormGroup
    createdUser: boolean = false;
    valueSenha : string;
    get FormularioValue() {
        return {
            Email : this.formulario.get('email').value,
            Senha : this.formulario.get('senha').value
        }
    }

    constructor(private readonly formBuilder: FormBuilder,
        protected readonly authFirebaseService: AuthFirebaseService,
        protected readonly authService : AuthService) {
        super(authFirebaseService, authService)
        this.formularioCriacao = this.formBuilder.group({
            name: ['', [Validators.required, Validators.pattern(/[a-zA-Z]+ [a-zA-Z]+/)]],
            telefone: ['', [Validators.required]],
            genero: ['None', [Validators.required]],
            senhaRepeat: ['', [Validators.required, Validators.minLength(8)]]

        })
    }
    ngOnInit(): void {
       this.valueSenha = this.formulario.get('senha').value;
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
        this.CreateUser().then(() => {
            this.authService.Insert({}).subscribe({
                next : () => {
                    this.carregando = false;
                    this.finishAction.emit();
                }
            })
        })
    }

    async CreateUser() {
        this.carregando = true;
        var senhaValida = this.FormularioValue.Senha === this.formularioCriacao.get('senhaRepeat').value;
        await this.authService.Exists(this.FormularioValue.Email).subscribe({
            next : (exists : boolean) => {
                if(senhaValida && !exists){
                   this.authFirebaseService.CreateUser(this.FormularioValue.Email, this.FormularioValue.Senha)
                    .then((uid) => {
                        this.carregando = false;
                    })
                }
            }
        });
    }
}