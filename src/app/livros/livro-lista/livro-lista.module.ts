import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroListaComponent } from './livro-lista.component';
import { FilterByDescription } from './filter-by-description.pipe';

@NgModule({
    declarations: [
        LivroListaComponent,
        FilterByDescription
    ],
    imports: [
        CommonModule
    ]
})
export class LivroListaModule {}