import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../_services/shared.service';
import { User } from '../../../model/user';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public shared: SharedService
  user: User


  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    this.shared = SharedService.getInstance();
    this.user = this.shared.user;

  }
  ngOnSubmit() {
    console.log(this.user)
    this.userService.update(this.user);
  }

}
