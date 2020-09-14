import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LivroDetalheComponent } from './livro-detalhe.component';


@NgModule({
  declarations: [LivroDetalheComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LivroDetalheModule { }
