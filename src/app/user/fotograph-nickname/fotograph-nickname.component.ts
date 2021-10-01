import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "app-fotograph-nickname",
    template: `
    <div class="d-flex justify-content-center align-items-center">
            <div
              class="d-flex justify-content-center align-items-center"
              style="
                border: 2px solid black;
                border-radius: 50%;
                height: 70px;
                width: 70px;
              "
            >
              <i class="fas fa-image"></i>
            </div>
            <div
              class="w-50"
              [formGroup]="formulario"
              style="margin-left: 15px"
            >
              <input
                formControlName="userName"
                type="type"
                class="input-field w-100"
                style="height: 30px"
              />
            </div>
          </div>
    `
})
export class FotographNicknameComponent {
    @Input() formulario: FormGroup
}