
import { Usuario } from './../../telaInicial/usuario';
import { UserService } from './../../../_services/user.service';
import { SharedService } from './../../../_services/shared.service';
import { Router } from '@angular/router';
import { EventoService } from './../../../_services/evento.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Evento } from '../../../model/evento';
import { User } from '../../../model/user';

@Component({
  selector: 'app-evento',
  templateUrl: './dashboard-evento.component.html',
  styleUrls: ['./dashboard-evento.component.scss']
})
export class DashboardEventoComponent implements OnInit {

  evento : Evento = new Evento();
  formularioEvento : FormGroup;
  service : EventoService;
  router : Router;
  mensagem : string = '';
  shared : SharedService;
  listaEnum : string;


  constructor(fb : FormBuilder, service : EventoService, router : Router, userService : UserService) {
    this.service = service;
    this.router = router;
    this.shared = SharedService.getInstance();
    //Pega a instancia do usuario logado !

    this.formularioEvento = fb.group({
      nomeEvento : [''],
      descricaoEvento : [''],
      dataEvento : [''],
      localEvento : [''],
      esporteEscolhidoEnum : ['']
    });

    this.evento.criadorEvento = new User(
      this.shared.currentUser.user.id,
      this.shared.currentUser.user.nomeCompleto,
      this.shared.currentUser.user.nomeUsuario,
      this.shared.currentUser.user.fotoUsuario,
      this.shared.currentUser.user.senha,
      this.shared.currentUser.user.email,
      this.shared.currentUser.user.dataNascimento,
      this.shared.currentUser.user.esporteFavorito
      );
   }

  ngOnInit() {

  }

  cadastrar(event){
    event.preventDefault();
    console.log(this.evento);
    this.service.cadastra(this.evento).subscribe(res => {
      this.evento = new Evento();
      this.router.navigate(['dashboard/lista']);
    }, erro => console.log(erro));
  }
}
