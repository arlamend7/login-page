import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container-fluid p-0 h-100">
  <div class="h-100">
    <div
      style="background-image: url(assets/{{ image }});
          background-size: cover;
      background-repeat: no-repeat;
      background-clip: content-box;"
      class="h-100"
    ></div>
    <div class="card-img-overlay">
    <router-outlet></router-outlet>
    </div>
  </div>
</div>
<div class="position-absolute aumentar" style="bottom: 5px; left: 20px">
  <a
    href="https://www.linkedin.com/in/arlan-mendes-b190a717b/"
    style="text-decoration: none; color: rgb(255, 60, 60)"
    ><p class="small">
      <span class="text-white">© Create by: </span>dev.arlan
    </p></a
  >
</div>
  `,
  styles: [],
})
export class AppComponent {
  title = "login-unico";
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
}
