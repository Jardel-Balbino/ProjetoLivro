import { Component, OnInit } from '@angular/core';

import { LivroService } from '../livro/livro.service';
import { Livro } from '../livro/livro';

@Component({
  selector: 'app-livro-formulario',
  templateUrl: './livro-formulario.component.html',
  styleUrls: ['./livro-formulario.component.css']
})
export class LivroFormularioComponent implements OnInit {

  livro: Livro = new Livro();

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
  }

  novoLivro(): void {
    this.livro = new Livro();
  }

  cadastraLivro() {
    this.livroService.cadastro(this.livro)
      .subscribe(data => console.log(data), error => console.log(error));
    this.livro = new Livro();
  }

  emviarDados() {
    this.cadastraLivro();
  }

}
