import { EventoService } from './../../_services/evento.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { SharedService } from '../../_services/shared.service';
import { Evento } from '../../model/evento';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public shared : SharedService;
  listEventos : Evento[];
  service : EventoService;
  constructor(
              private route: ActivatedRoute,
              private router: Router,
              service : EventoService){
                this.shared = SharedService.getInstance();
                this.service = service;
               }


  logout(){
    this.shared.logout();    
    this.router.navigate(['']);
  }

  ngOnInit() {  

    this.service.lista().subscribe(res => {
      this.listEventos = res;
    });

    //Funcao do toggle do menu, e para o menu mobile !
    $(document).ready(function () {
      $('.nav-dropdown-toggle').on('click', function (e) {
          e.preventDefault();
          $(this).parent().toggleClass('open');
      });

      $('ul.nav').find('a.active').parent().parent().parent().addClass('open');

      $('.sidebar-toggle').on('click', function (e) {
          e.preventDefault();
          $('body').toggleClass('sidebar-hidden');
      });

      $('.sidebar-mobile-toggle').on('click', function () {
          $('body').toggleClass('sidebar-mobile-show');
      });
  }); 
  }
}
