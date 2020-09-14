import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutorListaModule } from './autor-lista/autor-lista.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AutorListaModule
  ]
})
export class AutoresModule { }
