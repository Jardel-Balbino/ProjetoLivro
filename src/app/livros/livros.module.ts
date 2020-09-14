import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LivroListaModule } from './livro-lista/livro-lista.module';
import { LivroFormularioModule } from './livro-formulario/livro-formulario.module';
import { LivroAtualizarModule } from './livro-atualizar/livro-atualizar.module';
import { LivroDetalheModule } from './livro-detalhe/livro-detalhe.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        CommonModule,
        FormsModule,
        LivroListaModule,
        LivroFormularioModule,
        LivroAtualizarModule,
        LivroDetalheModule
    ]
})
export class LivrosModule {}