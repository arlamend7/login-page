import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-tab-info',
    template: ` <div class="row mt-3">
    <div class="col-12">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">Nome:</span>
        <input
          type="text"
          class="input-field form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  </div>
  <div class="row mt-3">
    <app-input
      type="email"
      propriedade="email"
      placeholder="email"
      label="Email :"
      [formulario]="formulario"
    ></app-input>
  </div>
  <div class="row mt-3">
    <div class="col-sm-12 col-md-6">
      <div class="form-group mb-3">
        <app-input
          type="text"
          propriedade="telefone"
          [formulario]="formulario"
          classIcon="fas fa-mobile"
          placeholder="(27) 99228-4737"
          mask="(00) 00000-0000"
        ></app-input>
      </div>
    </div>
    <div class="col-sm-12 col-md-6">
      <div [formGroup]="formulario" class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"
          ><i class="fas fa-venus-mars"></i
        ></span>
        <select
          type="password"
          class="input-field form-select"
          formControlName="genero"
        >
          <option value="None" disabled selected hidden>
            Choose Genre...
          </option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
          <option value="N">Não dizer</option>
        </select>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center m-2">
    <a class="social-icon disabled"><i class="fas fa-at"></i></a>
    <a class="social-icon"><i class="fab fa-google"></i></a>
    <a class="social-icon disabled"><i class="fab fa-facebook-f"></i></a
    ><a class="social-icon disabled"><i class="fab fa-twitter"></i></a
    ><a class="social-icon disabled"><i class="fab fa-github"></i></a>
  </div>`
})
export class TabInfoComponent {
    @Input() formulario: FormGroup
}