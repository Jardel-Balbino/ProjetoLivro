import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LivroAtualizarComponent } from './livro-atualizar.component';


@NgModule({
  declarations: [LivroAtualizarComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LivroAtualizarModule { }
