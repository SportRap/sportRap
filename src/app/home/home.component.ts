import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../_services/token.storage';
import { AuthService } from "../_services/auth.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private token: TokenStorage,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log()
    if(!this.token.isLoged()){
      this.router.navigate(['']);
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

}
