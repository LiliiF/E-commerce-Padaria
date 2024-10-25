import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoDePagamentoComponent } from './metodo-de-pagamento.component';

describe('MetodoDePagamentoComponent', () => {
  let component: MetodoDePagamentoComponent;
  let fixture: ComponentFixture<MetodoDePagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetodoDePagamentoComponent]
    });
    fixture = TestBed.createComponent(MetodoDePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
