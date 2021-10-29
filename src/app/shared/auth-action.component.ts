import { Component, EventEmitter, Input, Output } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { AuthFirebaseService } from "src/app/shared/services/auth.firebase.service"
import { AuthService } from "./services/auth.service"

@Component({
    template: ''
})
export abstract class AuthBaseAction {
    @Input() formulario: FormGroup
    @Output() redirect = new EventEmitter<string>()
    @Output() finishAction = new EventEmitter<void>()

    carregando: boolean
    constructor(protected readonly authFirebaseService: AuthFirebaseService,
                protected readonly authService : AuthService) { }
}