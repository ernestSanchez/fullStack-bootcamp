import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnComponent } from './home-en.component';

describe('HomeEnComponent', () => {
  let component: HomeEnComponent;
  let fixture: ComponentFixture<HomeEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
