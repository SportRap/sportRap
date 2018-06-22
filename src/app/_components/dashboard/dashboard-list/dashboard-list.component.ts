import { Evento } from './../../../model/evento';
import { EventoService } from './../../../_services/evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  esporteEscolhido : string;
  listaEventos : Evento[];
  service : EventoService;

  constructor( service : EventoService) {
    this.service = service;
   }

  ngOnInit() {
    this.service.lista().subscribe(res => {
      this.listaEventos = res;
    });
  }
}
