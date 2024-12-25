import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   isLoggedIn : boolean = false
   isAdmin : boolean = false

  constructor() { }

  login(username:string,password:string){
    if(username === "admin@gmail.com" && password==="Admin"){
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    else if(username === "user@gmail.com" && password==="User"){
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}
