import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCheckComponent } from './vista-check.component';

describe('VistaCheckComponent', () => {
  let component: VistaCheckComponent;
  let fixture: ComponentFixture<VistaCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
