import { Injectable,OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { TokenStorage } from '../_services/token.storage'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService implements OnInit{

    private url = 'http://localhost:8000/login';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http,
                private token: TokenStorage) {
        // Atribui o token se ele estiver salvo no local storage


    }

    ngOnInit() {
      this.token.signOut();
      var currentUser = JSON.parse(this.token.getToken());
      console.log(currentUser);
    }

    login(username, password): Observable<boolean> {

        let body = JSON.stringify({ username: username, password: password });

        return this.http.post(this.url, body)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response && response.headers.get('Authorization')
                if (token) {

                    //Armazenar o nome de usuário e jwt token no local store para manter o usuário conectado entre as atualizações de página

                    this.token.saveToken(JSON.stringify({ username: username, token: token }));
                    console.log(this.token.getToken())
                    // Returna verdadeiro para indicar o login bem-sucedido
                    return true;
                } else {
                    // Retorna falso para indicar uma falha de login
                    return false;
                }
            });
    }

    logout(): void {
        // Limpa o token removendo o usuário do local store para efetuar o logout
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
