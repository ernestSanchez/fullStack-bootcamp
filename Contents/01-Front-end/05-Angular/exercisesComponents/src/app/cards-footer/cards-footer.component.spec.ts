import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFooterComponent } from './cards-footer.component';

describe('CardsFooterComponent', () => {
  let component: CardsFooterComponent;
  let fixture: ComponentFixture<CardsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
