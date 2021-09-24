import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { spin } from "src/app/animations/spin.animation";

@Component({
  templateUrl: "login.component.html",
  animations: [
    trigger("photoState", [
      transition("* => *", spin.metaData),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  linkRedirect: string;
  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getLinkRedirect();
  }

  getLinkRedirect() {
    this.activatedRoute.queryParams.subscribe((obj) => {
      this.linkRedirect = obj["link"];
    });
  }
  carregando = false;

  animation2 = true;
  animar() {
    this.animation2 = !this.animation2;
    setTimeout(() => console.log("teste"),spin.tempoAction)
  }
}
