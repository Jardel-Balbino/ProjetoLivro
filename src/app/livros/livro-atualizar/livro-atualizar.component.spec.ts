import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroAtualizarComponent } from './livro-atualizar.component';

describe('LivroAtualizarComponent', () => {
  let component: LivroAtualizarComponent;
  let fixture: ComponentFixture<LivroAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
