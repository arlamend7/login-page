import { Injectable } from "@angular/core";
import { HttpClient , HttpHeaders } from "@angular/common/http"


@Injectable({ providedIn: "root" })
export class AuthService {
    private readonly url = "http://localhost:5000/users/";
    constructor(private readonly http : HttpClient ) {
    }

    Insert(obj : any){
        return this.http.post(this.url,obj);
    }
    Exists(email : string){
        return this.http.get(this.url, {params : {email}});
    }
    Login(uid : string){
        var headers = new HttpHeaders();
        headers.append("uid", uid);
        return this.http.head(this.url, {headers});
    }
}
