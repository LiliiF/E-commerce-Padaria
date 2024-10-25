import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModeloComponent } from './card-modelo.component';

describe('CardModeloComponent', () => {
  let component: CardModeloComponent;
  let fixture: ComponentFixture<CardModeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardModeloComponent]
    });
    fixture = TestBed.createComponent(CardModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
