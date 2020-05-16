import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUnoComponent } from './vista-uno.component';

describe('VistaUnoComponent', () => {
  let component: VistaUnoComponent;
  let fixture: ComponentFixture<VistaUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
