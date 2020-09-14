import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Livro } from '../livro/livro';
import { LivroService } from '../livro/livro.service';

@Component({
  selector: 'applivro-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  livros: Observable<Livro[]>;
  filtro: string = '';

  constructor(private livroService: LivroService,
    private router: Router) {}
  
  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.livros = this.livroService.listagem();
  }

  excluiLivro(id: number) {
    this.livroService.exclui(id).subscribe(
      data => {console.log(data);
      this.lista();
      },
      error => console.log(error)
    );
  }

  atualizaLivro(id: number) {
    this.router.navigate(['livro/atualiza', id]);
  }

  livroDetalhe(id: number) {
    this.router.navigate(['livro/detalhe', id]);
  }
}
