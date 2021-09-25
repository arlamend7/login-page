import {
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { spin } from "src/app/animations/spin.animation";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  templateUrl: "login.component.html",
  animations: [trigger("photoState", [transition("* => *", spin.metaData)])],
})
export class LoginComponent implements OnInit {
  @ViewChild("forgot", { static: false }) forgot: TemplateRef<HTMLDivElement>;
  @ViewChild("newUser", { static: false }) newUser: TemplateRef<HTMLDivElement>;
  @ViewChild("login", { static: false }) login: TemplateRef<HTMLDivElement>;

  tela: TemplateRef<HTMLDivElement>;
  linkRedirect: string;

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
    private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.getLinkRedirect();
    setTimeout(() => {
      this.tela = this.login;
    });
  }

  getLinkRedirect() {
    this.activatedRoute.queryParams.subscribe((obj) => {
      this.linkRedirect = obj["link"];
    });
  }

  carregando = false;
  animation = true;
  animar(nomeTela: string) {
    this.animation = !this.animation;
    setTimeout(() => (this.tela = this[nomeTela]), spin.tempoAction);
  }

  SignIn() {
    this.carregando = true;
    this.authService.SignIn("arlanmendes197@gmail.com", "arlan123").then(() => {
      console.log("login");
      this.carregando = false;

    })
  }
  CreateUser() {
    this.carregando = true;
    this.authService.CreateUser("arlanmendes197@gmail.com", "arlan123").then(() => {
      this.carregando = false;
      console.log("create");
    })
  }
  Forgot() {
    this.carregando = true;
    this.authService.Forgot("arlanmendes197@gmail.com").then(() => {
      this.carregando = false;
      console.log("forgot");
    })
  }
}
