import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LivroFormularioComponent } from './livro-formulario.component';

@NgModule({
    declarations: [
        LivroFormularioComponent
    ],
    imports: [CommonModule,
        FormsModule
    ]
})
export class LivroFormularioModule {}