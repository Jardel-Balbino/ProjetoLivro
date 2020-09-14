import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Autor } from '../autor/autor';
import { AutorService } from '../autor/autor.service';

@Component({
  selector: 'app-autor-lista',
  templateUrl: './autor-lista.component.html',
  styleUrls: ['./autor-lista.component.css']
})
export class AutorListaComponent implements OnInit {

  autores: Observable<Autor[]>;
  filtro: string = '';

  constructor(private autorService: AutorService,
    private router: Router) {}
  
  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.autores = this.autorService.listagem();
  }

}
