import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() nome = '';

}
