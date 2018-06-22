import { SharedService } from './../../../_services/shared.service';
import { Evento } from './../../../model/evento';
import { EventoService } from './../../../_services/evento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  listaEventos : Evento[];
  service : EventoService;
  router : Router;
  shared : SharedService;

  usuarioNome : string = '';

  constructor( service : EventoService, router : Router, shared : SharedService) {
    this.shared = SharedService.getInstance();
    this.router = router;
    this.service = service;
   }

  ngOnInit() {
    this.service.lista().subscribe(res => {
      this.listaEventos = res;
      console.log(this.listaEventos);
    });
    this.usuarioNome = this.shared.currentUser.user.nomeCompleto;

  }

  eventoOnClick(id:number){
    this.router.navigate(['dashboard/event', id]);
  }

  ingressaEvento(evento : Evento){
    
    if(evento.membrosTime1.includes(this.usuarioNome) && evento.membrosTime2.includes(this.usuarioNome)){
      console.log("Usuario ja ingressou em um dos times");
    }
    else {
      evento.membrosTime1.push(this.usuarioNome);
      this.service.update(evento).subscribe(res => {
        console.log("Atualizou com sucesso");
      })
    }
    console.log(evento.membrosTime1);
  }
}
