import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "src/app/auth/auth.component";
import { UserComponent } from "src/app/user/user.component";

const rotas: Routes = [
  {
    path: "auth",
    component: AuthComponent,
  },
  {
    path: "profile",
    component: UserComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "auth",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
