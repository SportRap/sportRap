import { User } from './../../model/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../_services/shared.service';
import { UserService } from '../../_services/user.service';
import { NgForm } from '@angular/forms';
import { CurrentUser } from '../../model/currentUser';

@Component({
  selector: 'app-telainicial',
  templateUrl: './telainicial.component.html',
  styleUrls: ['./telainicial.component.scss']
})
export class TelainicialComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  public user = new User('', '', '', '', '', '', '', '');
  public shared: SharedService;
  public message: string;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
  }

  login() {
    this.message = '';
    this.userService.login(this.user).subscribe((userAuthentication: CurrentUser) => {

      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.user;
      this.shared.showTemplate.emit(true);

      console.log(this.shared.token)
      console.log(this.shared.user)
      console.log(this.shared.isLoggedIn());
      this.router.navigate(['dashboard']);

    }, err => {
      console.log("erro login ", err);

      this.shared.token = null;
      this.shared.user = null;
      this.message = 'Erro ';
    });
  }

  buscaEmailBanco(){
    this.userService.findByEmail(this.user).subscribe((responseApi: User) => {
      //this.user = responseApi;
      console.log("retorno =", responseApi);
      if(responseApi == null){
        console.log("dentro do if");
        
        this.register();
      }else{
        alert("Email ja cadastrado");
      }

    }, err => {
      console.log(err);

    });
  }

  register() {
    this.userService.create(this.user).subscribe((responseApi: User) => {
      console.log("gravou");

    }, err => {
      console.log(err);

    });
  }

  getFormGroupClass(isInvalid: boolean, isDirty: boolean): {} {
    return {
      'form-group': true,
      'has-error': isInvalid && isDirty,
      'has-success': !isInvalid && isDirty
    };
  }

  /*login(){
    this.authService.login(this.usuario.email, this.usuario.senha)
        .subscribe(
            data => {
                console.log(data)
                this.router.navigate(['dashboard']);
            },
            error => {
              console.log(error)
                this.alertService.error(error);
                this.loading = false;
            });
  }*/
}
