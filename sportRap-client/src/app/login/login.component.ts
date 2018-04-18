import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "../_services/auth.service";
import { Usuario } from "./usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.usuario.email, this.usuario.senha)
        .subscribe(
            data => {
                console.log(data)
                this.router.navigate(['home']);
            },
            error => {
              console.log(error)
                /*this.alertService.error(error);
                this.loading = false;*/
            });
  }

}
