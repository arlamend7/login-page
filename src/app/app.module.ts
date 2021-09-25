import { NgModule } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "src/app/login/login.component";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "src/environments/environment.firebase";
import { getAnalytics } from "@firebase/analytics";

const app = initializeApp(firebaseConfig);

getAnalytics(app);

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
