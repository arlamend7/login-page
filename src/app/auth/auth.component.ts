import {
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { timer } from "rxjs";
import { spin } from "src/app/animations/spin.animation";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  templateUrl: "auth.component.html",
  animations: [trigger("photoState", [transition("* => *", spin.metaData)])],
})
export class AuthComponent implements OnInit {
  tela: string;
  permission: string;
  produtoId: string;
  formulario: FormGroup;

  get Image() {
    const obj = {
      0: "secury.gif",
      1: "secury.gif",
      2: "players.gif",
      3: "mario.gif",
      4: "house.gif",
    };
    var value = Math.round(Math.random() * 4);
    return obj[value];
  }
  image: string = this.Image;
  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly modalService: BsModalService,
    private readonly formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/\w+@\w+\.\w{2,}/)]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/\d/), Validators.pattern(/[A-Z]/), Validators.pattern(/[a-z]/), Validators.pattern(/[@$!%*#?&]+/)]],
    })
  }

  ngOnInit(): void {
    timer(200).subscribe(() => {
      this.getAllParams();
    })
  }

  getAllParams() {
    this.activatedRoute.queryParams.subscribe((obj) => {
      if (obj['email']) {
        const control = this.formulario.get("email")
        control.setValue(obj['email'])
        control.disable()
      }
      this.tela = obj["tela"] ?? 'login';
      this.produtoId = obj["produtoId"];
      this.permission = obj["permission"];
    });
  }

  modalRef: BsModalRef
  finish(template: TemplateRef<HTMLDivElement>) {
    if (this.produtoId && this.permission) {
      this.modalRef = this.modalService.show(template);
    }
    if (this.produtoId) {
      window.open("");
    }
    else {
      this.animar('profile')
    }
  }
  confirmVinculo() {
    
  }
  carregando = false;
  animation = true;
  animar(nomeTela: string) {
    this.animation = !this.animation;
    setTimeout(() => (this.tela = nomeTela), spin.tempoAction);
  }

}
