import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
    templateUrl: "user.component.html",
})
export class UserComponent implements OnInit {
    formulario: FormGroup;
    carregando = false;
    user = {
        userName: "dev.arlamend7",
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
    constructor(
        private readonly formBuilder: FormBuilder) {
        this.formulario = this.formBuilder.group(this.user)

    }

    ngOnInit(): void {

    }

    modalRef: BsModalRef
}
