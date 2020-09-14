import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Livro } from '../livro/livro';
import { LivroService } from '../livro/livro.service';
import { Autor } from 'src/app/autores/autor/autor';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {

  autor: Autor = new Autor();
  
  id: number;
  livro: Livro;

  constructor(private route: ActivatedRoute,
    private router: Router, private livroService: LivroService) {}
  
  ngOnInit(): void {
    this.livro = new Livro();
    this.id = this.route.snapshot.params['id'];

    this.livroService.livroId(this.id).subscribe(
      data => {console.log(data); this.livro = data
      }, error => console.log(error)
    );
  }

  lista() {
    this.router.navigate(['livro/lista']);
  }

  novoAutor(): void {
    this.autor = new Autor();
  }
  
  emviar() {
    this.cadastraAutor();
  }

  cadastraAutor() {
    this.livroService.livroGravarAutor(this.id, this.autor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.autor = new Autor();
  }

}
