import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosProdutosComponent } from './nossos-produtos.component';

describe('NossosProdutosComponent', () => {
  let component: NossosProdutosComponent;
  let fixture: ComponentFixture<NossosProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NossosProdutosComponent]
    });
    fixture = TestBed.createComponent(NossosProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
