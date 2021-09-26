import { Component, EventEmitter, Input, Output } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { AuthService } from "src/app/shared/services/auth.service"

@Component({
    template: ''
})
export abstract class AuthBaseAction {
    @Input() formulario: FormGroup
    @Output() redirect = new EventEmitter<string>()
    @Output() finishAction = new EventEmitter<void>()

    carregando: boolean
    constructor(protected readonly authService: AuthService) { }
}