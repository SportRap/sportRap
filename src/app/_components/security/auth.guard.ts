import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { SharedService } from '../../_services/shared.service';
import { UserService } from '../../_services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  public shared: SharedService;
  
  constructor(private userService: UserService,
              private router: Router) { 
                this.shared = SharedService.getInstance();
  }
  
  canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<boolean> | boolean {

    if(this.shared.isLoggedIn()){
      
        return true;
    }
    this.router.navigate(['']);
    return false;
  }

}
