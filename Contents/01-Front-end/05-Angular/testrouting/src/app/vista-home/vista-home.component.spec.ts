import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHomeComponent } from './vista-home.component';

describe('VistaHomeComponent', () => {
  let component: VistaHomeComponent;
  let fixture: ComponentFixture<VistaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
