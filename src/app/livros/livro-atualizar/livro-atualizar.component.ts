import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Livro } from '../livro/livro';
import { LivroService } from '../livro/livro.service';

@Component({
  selector: 'app-livro-atualizar',
  templateUrl: './livro-atualizar.component.html',
  styleUrls: ['./livro-atualizar.component.css']
})
export class LivroAtualizarComponent implements OnInit {

  id: number;
  livro: Livro;

  constructor(private route: ActivatedRoute,
    private router: Router, private livroService: LivroService) { }

  ngOnInit(): void {
    this.livro = new Livro();
    this.id = this.route.snapshot.params['id'];

    this.livroService.livroId(this.id).subscribe(
      data => {console.log(data);
        this.livro = data;
      }, error => console.log(error)
    );
  }

  atualizaLivro() {
    this.livroService.atualiza(this.id, this.livro)
      .subscribe(data => console.log(data), error => console.log(error));
    this.livro = new Livro();
    this.lista();
  }

  enviarDados() {
    this.atualizaLivro();
  }

  lista() {
    this.router.navigate(['livro/lista']);
  }

}
