import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUnidadesComponent } from './cadastro-unidades.component';

describe('CadastroUnidadesComponent', () => {
  let component: CadastroUnidadesComponent;
  let fixture: ComponentFixture<CadastroUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroUnidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
