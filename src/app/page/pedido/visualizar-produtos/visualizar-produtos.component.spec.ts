import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarProdutosComponent } from './visualizar-produtos.component';

describe('VisualizarProdutosComponent', () => {
  let component: VisualizarProdutosComponent;
  let fixture: ComponentFixture<VisualizarProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarProdutosComponent]
    });
    fixture = TestBed.createComponent(VisualizarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
