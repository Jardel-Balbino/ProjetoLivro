import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivroListaComponent } from './livros/livro-lista/livro-lista.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { LivroFormularioComponent } from './livros/livro-formulario/livro-formulario.component';
import { AutorListaComponent } from './autores/autor-lista/autor-lista.component';
import { LivroAtualizarComponent } from './livros/livro-atualizar/livro-atualizar.component';
import { LivroDetalheComponent } from './livros/livro-detalhe/livro-detalhe.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'livro/lista',
    pathMatch: 'full'
  },
  {
    path: 'livro/lista',
    component: LivroListaComponent
  },
  {
    path: 'livro/adiciona',
    component: LivroFormularioComponent
  },
  {
    path: 'livro/atualiza/:id',
    component: LivroAtualizarComponent
  },
  {
    path: 'livro/detalhe/:id',
    component: LivroDetalheComponent
  },
  {
    path: 'autor/lista',
    component: AutorListaComponent

  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
