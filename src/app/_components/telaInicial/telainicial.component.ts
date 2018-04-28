import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "../../_services/auth.service";
import { Usuario } from "./usuario";

@Component({
  selector: 'app-telainicial',
  templateUrl: './telainicial.component.html',
  styleUrls: ['./telainicial.component.scss']
})
export class TelainicialComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

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
