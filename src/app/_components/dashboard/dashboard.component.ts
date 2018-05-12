import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { SharedService } from '../../_services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public shared : SharedService;

  constructor(
              private route: ActivatedRoute,
              private router: Router){
                this.shared = SharedService.getInstance();
               }


  logout(){
    this.shared.logout();    
    this.router.navigate(['']);
  }

  ngOnInit() {  
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
