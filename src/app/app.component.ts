import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <ngx-spinner
      bdColor="rgb(208, 225, 248,0.6)"
      size="medium"
      color="#5887f9"
      type="ball-clip-rotate"
    ></ngx-spinner>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "login-unico";
}
