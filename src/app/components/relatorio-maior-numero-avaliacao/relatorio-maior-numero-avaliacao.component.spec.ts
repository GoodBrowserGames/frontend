import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioMaiorNumeroAvaliacaoComponent } from './relatorio-maior-numero-avaliacao.component';

describe('RelatorioMaiorNumeroAvaliacaoComponent', () => {
  let component: RelatorioMaiorNumeroAvaliacaoComponent;
  let fixture: ComponentFixture<RelatorioMaiorNumeroAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioMaiorNumeroAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioMaiorNumeroAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
