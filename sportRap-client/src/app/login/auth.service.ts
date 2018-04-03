import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
    public token: string;
    private url = 'http://localhost:4040/apiv1/auth/login';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
        // Atribui o token se ele estiver salvo no local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username, password): Observable<boolean> {
        let body = JSON.stringify({ username: username, password: password });
        return this.http.post(this.url, body, this.options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // Atribui a propriedade token
                    this.token = token;
                    //Armazenar o nome de usuário e jwt token no local store para manter o usuário conectado entre as atualizações de página
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

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
