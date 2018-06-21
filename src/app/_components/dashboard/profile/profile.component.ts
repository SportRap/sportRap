import { Component, OnInit } from '@angular/core';
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


  constructor(private userService: UserService) { }

  ngOnInit() {

    this.shared = SharedService.getInstance();
    this.user = this.shared.currentUser.user;
    console.log(this.user)

  }
  ngOnSubmit(user: User) {
    this.userService.update(this.user).subscribe((responseApi: User) => {
      console.log("gravou");

    }, err => {
      console.log(err);

    });
  }

}
