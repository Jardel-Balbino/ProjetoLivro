import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConstants } from 'src/app/app-constants';

@Injectable({providedIn: 'root'})
export class AutorService {

    constructor(private http: HttpClient) {}

    autorId(id: number): Observable<any> {
        return this.http.get(`${AppConstants.baseAutor}/${id}`);
    }
    
    listagem(): Observable<any> {
        return this.http.get(`${AppConstants.baseAutor}`);
    }
}