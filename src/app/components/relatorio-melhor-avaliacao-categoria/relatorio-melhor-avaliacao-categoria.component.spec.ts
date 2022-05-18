import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioMelhorAvaliacaoCategoriaComponent } from './relatorio-melhor-avaliacao-categoria.component';

describe('RelatorioMelhorAvaliacaoCategoriaComponent', () => {
  let component: RelatorioMelhorAvaliacaoCategoriaComponent;
  let fixture: ComponentFixture<RelatorioMelhorAvaliacaoCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioMelhorAvaliacaoCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioMelhorAvaliacaoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
