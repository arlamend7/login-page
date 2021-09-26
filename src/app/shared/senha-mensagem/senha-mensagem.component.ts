import { Component, Input } from "@angular/core";

@Component({
    selector: "app-senha-regras",
    template: `
    <p>Deve conter pelo menos:</p>
    <ul>
        <li [ngClass]="{'text-success': CaracterEspecial}">1 caracter especial</li>
        <li [ngClass]="{'text-success': Numerico}">1 numero</li>
        <li [ngClass]="{'text-success': LetraMaiuscula}">1 letra maiuscula</li>
        <li [ngClass]="{'text-success': LetraMinuscula}">1 letra minuscula</li>
        <li [ngClass]="{'text-success': value.length > 7}">8 caracteres</li>
    </ul>
    
    `

})
export class SenhaMensagemComponent{
    @Input() value: string;
    
    get LetraMaiuscula(): boolean{
        return /[A-Z]+/g.exec(this.value)?.length > 0
    }
    get LetraMinuscula(): boolean{
        return /[a-z]+/g.exec(this.value)?.length > 0
    }
    get Numerico(): boolean{
        return /\d+/g.exec(this.value)?.length > 0
    }
    get CaracterEspecial(): boolean{        
        return /[@$!%*#?&]+/g.exec(this.value)?.length > 0
    }
}