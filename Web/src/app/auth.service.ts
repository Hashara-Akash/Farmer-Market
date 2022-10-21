import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }


  // public login(userInfo: User){
  //   localStorage.setItem('ACCESS_TOKEN', "access_token");
  // }


  public isWebMasterLoggedIn(){
    return sessionStorage.getItem('webmaster') !== null;
  }
  public isUserLoggedIn(){
    return sessionStorage.getItem('user') !== null;
  }
  public isFarmerLoggedIn(){
    return sessionStorage.getItem('farmer') !== null;
  }


  public logout(){
    sessionStorage.clear()
  }
}