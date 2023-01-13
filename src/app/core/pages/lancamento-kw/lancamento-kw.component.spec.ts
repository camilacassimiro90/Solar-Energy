import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoKwComponent } from './lancamento-kw.component';

describe('LancamentoKwComponent', () => {
  let component: LancamentoKwComponent;
  let fixture: ComponentFixture<LancamentoKwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentoKwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoKwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
