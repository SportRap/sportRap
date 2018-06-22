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
  myVar: boolean = false;

  @ViewChild("form")
  form: NgForm;


  public user = new User(null, '', '', '', '', '', null, null);
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

      if (this.shared.isLoggedIn()) {
        this.router.navigate(['dashboard']);
      }



    }, err => {
      console.log("erro login ", err);

      this.message = 'Erro ';
    });
  }

  buscaEmailBanco() {
    this.userService.findByEmail(this.user).subscribe((responseApi: User) => {
      //this.user = responseApi;
      console.log("retorno =", responseApi);
      if (responseApi == null) {
        console.log("dentro do if");

        this.register();
      } else {
        alert("Email ja cadastrado");
      }

    }, err => {
      console.log(err);

    });
  }

  register() {
    this.userService.create(this.user).subscribe((responseApi: User) => {
      console.log("gravou");
      this.myVar = true;
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

  aviso(){
    this.myVar = false;
    this.router.navigate(['']);
  }
}
