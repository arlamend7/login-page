import { NgModule } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "src/app/auth/auth.component";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "src/environments/environment.firebase";
import { getAnalytics } from "@firebase/analytics";
import { ModalModule } from 'ngx-bootstrap/modal';
import { SocialMediaComponent } from "src/app/shared/social-media/social-media.component";
import { LoginComponent } from "src/app/auth/login/login.component";
import { ForgotComponent } from "src/app/auth/forgot/forgot.component";
import { CreateComponent } from "src/app/auth/create/create.component";
import { InputComponent } from "src/app/shared/inputs/input.component";
import { PopoverModule } from 'ngx-bootstrap/popover';
import { SenhaMensagemComponent } from "src/app/shared/senha-mensagem/senha-mensagem.component";
import { NgxMaskModule } from 'ngx-mask'

const app = initializeApp(firebaseConfig);

getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SocialMediaComponent,
    LoginComponent,
    ForgotComponent,
    CreateComponent,
    InputComponent,
    SenhaMensagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
