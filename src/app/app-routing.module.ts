import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "src/app/auth/auth.component";

const rotas: Routes = [
  {
    path: "auth",
    component: AuthComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "auth",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
