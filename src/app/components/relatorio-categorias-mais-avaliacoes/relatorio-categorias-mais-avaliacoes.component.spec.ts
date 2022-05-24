import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioCategoriasMaisAvaliacoesComponent } from './relatorio-categorias-mais-avaliacoes.component';

describe('RelatorioCategoriasMaisAvaliacoesComponent', () => {
  let component: RelatorioCategoriasMaisAvaliacoesComponent;
  let fixture: ComponentFixture<RelatorioCategoriasMaisAvaliacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioCategoriasMaisAvaliacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioCategoriasMaisAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
