import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "app-profile",
    templateUrl: "profile.component.html"
})
export class ProfileComponent {
    user = {
        userName:"dev.arlamend7",
        name: "Arlan dos Santos Franklin Mendes",
        telefone: "27992284737",
        genero: "M",
        email: "arlanmendes197@gmail.com",
        providers: [
            'Google'
        ],
        rua: "",
        cidade: "",
        pais: "",
        

    }
    carregando = false;
    formulario: FormGroup;
    constructor(private readonly formBuilder: FormBuilder) {
        this.formulario = this.formBuilder.group(this.user)
    }
    saveInfo() {
        
    }
}