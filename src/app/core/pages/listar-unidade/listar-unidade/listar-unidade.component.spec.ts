import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUnidadeComponent } from './listar-unidade.component';

describe('ListarUnidadeComponent', () => {
  let component: ListarUnidadeComponent;
  let fixture: ComponentFixture<ListarUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUnidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
