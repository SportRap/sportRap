import { SPORTRAP_API } from './sportrap.api';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Evento } from '../model/evento';
import { isObject } from 'util';

@Injectable()
export class EventoService{ 

    http: Http;
    headers: Headers;

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    cadastra(evento : Evento): Observable<MensagemCadastro> {
        
        return this.http
        .post(`${SPORTRAP_API}/evento/novo`, evento)
        .map(() => new MensagemCadastro('Evento incluído com sucesso !', true));  
    }

    update(evento : Evento): Observable<MensagemCadastro> {
        
        return this.http
        .post(`${SPORTRAP_API}/evento/salvar`, evento)
        .map(() => new MensagemCadastro('Evento incluído com sucesso !', true));  
    }

    lista(): Observable<Evento[]> {

        return this.http
        .get(`${SPORTRAP_API}/evento/listar`)
        .map(res => res.json());

    }

    remove(evento : Evento):  Observable<Response> {

        return this.http.delete(`${SPORTRAP_API}/evento/excluir`);
    }

    buscaPorId(id: number): Observable<Evento> {

        return this.http
            .get(`${SPORTRAP_API}` + '/' + id)
            .map(res => res.json());
    }

    buscaEnumValor(){
        return this.http.get(`${SPORTRAP_API}/evento/descricaoEsportes`)
        .map(res => res.json());
    }

}

export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean) {

        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {

        return this._inclusao;
    }

}