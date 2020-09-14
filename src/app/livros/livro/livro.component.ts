import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'applivro-livro',
    templateUrl: './livro.component.html'
})
export class LivroComponent implements OnInit {

    ngOnInit(): void {
    }

    @Input() nome = '';
}