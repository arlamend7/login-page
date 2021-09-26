import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from "@firebase/auth";

@Component({
    selector: "social-media",
    template: `
     <div class="d-flex justify-content-center">
          <a class="social-icon" (click)="sendProvider('Google')"><i class="fab fa-google"></i></a>
          <a class="social-icon" (click)="sendProvider('Facebook')"><i class="fab fa-facebook-f"></i></a
          ><a class="social-icon" (click)="sendProvider('Twitter')"><i class="fab fa-twitter"></i></a
          ><a class="social-icon" (click)="sendProvider('Github')"><i class="fab fa-github"></i></a>
        </div>
    `
})
export class SocialMediaComponent {
    @Input() tipoAcao: 'login' | 'newUser';
    @Output() providerId = new EventEmitter<AuthProvider>();

    sendProvider(provider: string) {
        const objProvider = {
            'Google':  new GoogleAuthProvider(),
            'Facebook':  new FacebookAuthProvider(),
            'Twitter':  new TwitterAuthProvider(),
            'Github':  new GithubAuthProvider(),
        }
        this.providerId.emit(objProvider[provider])
    }
}