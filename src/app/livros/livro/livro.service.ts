import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppConstants } from 'src/app/app-constants';

@Injectable({providedIn: 'root'})
export class LivroService {

    constructor(private http: HttpClient) {}

    livroId(id: number): Observable<any> {
        return this.http.get(`${AppConstants.baseLivro}/${id}`);
    }

    cadastro(livro: Object): Observable<Object> {
        return this.http.post(`${AppConstants.baseLivro}`, livro);
    }

    atualiza(id: number, valor: any): Observable<Object> {
        return this.http.put(`${AppConstants.baseLivro}/${id}`, valor);
    }

    exclui(id: number): Observable<any> {
        return this.http.delete(`${AppConstants.baseLivro}/${id}`, {responseType: 'text'});
    }

    listagem(): Observable<any> {
        return this.http.get(`${AppConstants.baseLivro}`);
    }

    livroGravarAutor(id: number, autor: Object): Observable<Object> {
        return this.http.post(`${AppConstants.baseLivro}/${id}`, autor);
    }
}