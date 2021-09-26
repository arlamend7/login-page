import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-input",
    templateUrl: 'input.component.html'
})
export class InputComponent implements OnInit{
    campo: AbstractControl;
    ngOnInit(): void {
        this.campo = this.formulario.get(this.propriedade);
    }
    @Input() type: string;
    @Input() placeholder: string = "";
    @Input() formulario: FormGroup;
    @Input() propriedade: string;
    @Input() regras: string | TemplateRef<HTMLDivElement>;
    @Input() mask: string = ""
    forceShowErro: boolean
}