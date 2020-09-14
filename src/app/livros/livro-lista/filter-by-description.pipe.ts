import { Pipe, PipeTransform } from '@angular/core';

import { Livro } from '../livro/livro';

@Pipe({name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {
    
    transform(livros: Livro[], descricaoQuery: string) {
        descricaoQuery = descricaoQuery.trim().toLowerCase();

        if(descricaoQuery) {
            return livros.filter(livro => 
                livro.titulo.toLowerCase().includes(descricaoQuery));
        } else {
            return livros;
        }
    }
}