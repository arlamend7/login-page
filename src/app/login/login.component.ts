import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: "login.component.html",
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%)',
      })),
      state('enlarge',   style({
        transform: 'scale(1.5)',
      })),
      state('spin',   style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('* => *', animate('500ms ease')),
    ])
  ]
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
  v1: number;
  v2: number;
  v3: number;
  adicionar(valor: number) {
    const obj = {
      "1": () => this.v1++,
      "2": () => this.v2++,
      "3": () => this.v3++,
    };
  }
}
