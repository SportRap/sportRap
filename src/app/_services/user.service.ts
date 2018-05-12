import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SPORTRAP_API } from './sportrap.api';
import { User } from '../model/user';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  login(user: User){
    return this.http.post(`${SPORTRAP_API}/api/auth`,user);
  }

  create(user: User){
    return this.http.post(`${SPORTRAP_API}/users/sign-up`, user);
  }

  findByEmail(user: User){
    return this.http.get(`${SPORTRAP_API}/usuario/${user.email}`, );
  }

  
}
