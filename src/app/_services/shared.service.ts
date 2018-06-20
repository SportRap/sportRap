import { CurrentUser } from './../model/currentUser';
import { UserService } from './user.service';
import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../model/user';


@Injectable()
export class SharedService {

  public static instance: SharedService = null;
  user : User;
  token: string;
  currentUser: CurrentUser;
  showTemplate = new EventEmitter<boolean>();

  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn():boolean {
    this.getLocalstorage()

    if(this.currentUser.user== null){   
      return false;
    }
    return this.currentUser.user.email != '';
  }

  logout(){
    this.currentUser = null;
    localStorage.removeItem('currentUser')
  }

  setLocalstorage(currentUser: CurrentUser){
    localStorage.setItem('currentUser', 
                JSON.stringify({ token: currentUser.token , user: currentUser.user }));
  }

  getLocalstorage(){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));   
  }



}
