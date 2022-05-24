import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioMembrosMaisAvaliaramComponent } from './relatorio-membros-mais-avaliaram.component';

describe('RelatorioMembrosMaisAvaliaramComponent', () => {
  let component: RelatorioMembrosMaisAvaliaramComponent;
  let fixture: ComponentFixture<RelatorioMembrosMaisAvaliaramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioMembrosMaisAvaliaramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioMembrosMaisAvaliaramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
