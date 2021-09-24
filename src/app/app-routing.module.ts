import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "src/app/login/login.component";

const rotas: Routes = [
    {
      path: "login",
      component: LoginComponent,
    },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
